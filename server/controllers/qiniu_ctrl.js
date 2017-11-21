import QiNiu from 'qiniu';
import Busboy from 'busboy';
import Config from '../config';
import Util from 'util';
import fs from 'fs';

const { ACCESS_KEY, SECRET_KEY } = Config.upload;
let UPLOAD_TOKEN;

function getToken(bucket) {
    let _bucket = bucket || 'hymnal';

    const options = {
        scope: _bucket,
        expires: 120 * 60 // 秒
    };

    const mac = new QiNiu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);
    const putPolicy = new QiNiu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);

    // return {
    //     token: uploadToken,
    //     expires: + new Date() + 120 * 60 * 1000
    // }

    return uploadToken;
}

function filePipe(ctx) {
    let req = ctx.req,
        res = ctx.res;

    let busboy = new Busboy({ headers: req.headers }),
        buf = Buffer.alloc(0);

    return new Promise((resolve, reject) => {
        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
            console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);

            file.on('data', function(data) {
                console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
                buf = Buffer.concat([ buf , data]);
            });

            file.on('end', function() {
                console.log('File [' + fieldname + '] Finished');
                console.log(buf);
                resolve({
                    filename,
                    encoding,
                    mimetype,
                    fstream: fs.createReadStream(buf)
                })
            });

        });

        busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
            console.log('Field [' + fieldname + ']: value: ' + Util.inspect(val));
        });


        req.pipe(busboy);

    })
}

export async function fileUpload(ctx) {
    let file = await filePipe(ctx);
    let nowTime = +new Date();
    if (!UPLOAD_TOKEN || UPLOAD_TOKEN.expires < nowTime) {
        UPLOAD_TOKEN = getToken();
    }

    let config = new QiNiu.conf.Config();
    // 空间对应的机房
    config.zone = QiNiu.zone.Zone_z0;

    const formUploader = new QiNiu.form_up.FormUploader(config);
    const putExtra = new QiNiu.form_up.PutExtra();
    console.log(file);
    // 文件上传
    formUploader.putStream(UPLOAD_TOKEN, file.filename, file.fstream, putExtra, function(respErr,
        respBody, respInfo) {
        if (respErr) {
            throw respErr;
        }
        if (respInfo.statusCode == 200) {
            console.log('respBody200', respBody);
            ctx.body = respBody;
        } else {
            console.log('respInfo', respInfo.statusCode);
            console.log('respBody', respBody);
            ctx.body = respBody;
        }
    });
}