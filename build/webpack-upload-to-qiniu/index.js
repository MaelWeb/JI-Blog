'use strict';
// use Polyfill for util.promisify in node versions < v8
const promisify = require('util.promisify');

const qiniu = require("qiniu");
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const _array = require('lodash/array');
const _difference = require('lodash/difference');
const _extend = require('lodash/extend');

const fsStaAsync = promisify(fs.stat);
const fsReadDirAsync = promisify(fs.readdir);

const fileEncodeType = 'utf8';
const successUnloadLog = '_success_upload_log.json';
const failedUploadLog = '_faile_upload_log.json';

class UploadToQiniuWebpackPlugin {
    constructor(options) {
        this.options = _extend({
            qiniuAccessKey: 'qiniuAccessKey',
            qiniuSecretKey: 'qiniuSecretKey',
            qiniuBucket: 'qiniuBucket',
            qiniuZone: 'Zone_z0',
            uploadTaget: null, // targe to upload
            exclude: 'html',
            publicPath: ''
        }, options);

        this.config = new qiniu.conf.Config();
        this.config.zone = qiniu.zone[this.options.qiniuZone];
        qiniu.conf.RPC_TIMEOUT = 600000;

        this.mac = new qiniu.auth.digest.Mac(this.options.qiniuAccessKey, this.options.qiniuSecretKey);

        // global value
        this.allUploadIsSuccess = true;
        this.allRefreshIsSuccess = true;
        this.failedObj = {
            uploadFiles: {},
            refreshArr: []
        };
        this.needUploadArray = [];
        this.successUploadFilesData = {};
        this.successUploadLogData = {};

        this.uploadCount = 0;
    }

    apply(compiler) {
        const _this = this;

        if (!_this.options.uploadTaget) {
            _this.options.uploadTaget = compiler.options.output.path;
        }

        if (!_this.options.publicPath) {
            _this.options.publicPath = compiler.options.output.publicPath;
        }
    }

    _uptoken(bucket, key) {
        let options = {
            scope: bucket + ":" + key
        };

        let putPolicy = new qiniu.rs.PutPolicy(options);

        return putPolicy.uploadToken(mac);
    }

    _uploadFile(uptoken, key, localFile) {
        let formUploader = new qiniu.form_up.FormUploader(this.config),
            putExtra = new qiniu.form_up.PutExtra();

        formUploader.putFile(uptoken, key, localFile, putExtra, function(err, respBody, respInfo) {
            if (err) {
                this.allUploadIsSuccess = false;
                this.failedObj.uploadFiles[key] = new moment().format('YYYY-MM-DD HH:mm:ss');

                console.log(`[ ${key} ] Upload Failed!!`)

            }
            this.uploadCount++;

            if (this.uploadCount === this.needUploadArray.length) {
                this._dealFileQN();
            }
        });
    }

    _dealFileInClound() {
        this.allUploadIsSuccess && console.log('All Dile Is Upload Successful');

        let bucketManager = new qiniu.rs.BucketManager(this.mac, this.config),
            successDtaKeys = Object.keys(this.successUploadFilesData),
            successDtaKeysLength = successDtaKeys.length,
            allFileIsSuccess = true,
            deleteOperations = [];

        if (successDtaKeysLength !== 0) {
            //每个operations的数量不可以超过1000个，如果总数量超过1000，需要分批发送
            successDtaKeys.forEach((key) => {
                deleteOperations.push(qiniu.rs.deleteOp(bucket, key))
            })
            console.log('Deleting %s Files on CDN', successDtaKeys.length);

            bucketManager.batch(deleteOperations, function(err, respBody, respInfo) {
                if (err) {
                    console.error('[ Deleting Files Error]', err);
                } else {
                    // 200 is success, 298 is part success
                    if (parseInt(respInfo.statusCode / 100) == 2) {
                        respBody.forEach(function(item) {
                            if (item.code !== 200) {
                                allFileIsSuccess = false
                                console.error(item);
                            }
                        });
                        if (allFileIsSuccess) {
                            console.log('All Extra File Is Deleted Form QiniuCloud Successful')
                        } else {
                            console.error('Some Deleted is Failed')
                        }
                    } else {
                        // console.log(respInfo.deleteusCode);
                        // console.log(respBody);
                    }
                }
                this._writeLog()
                // refreshCDN(needUpload);
            });
        } else {
            console.log('There Is Not Have Extra File Need To Delete');
            this._writeLog()
        }

    }

    _writeLog() {
        if (!this.allUploadIsSuccess || !this.allRefreshIsSuccess) {
            for (let key in this.failedObj.uploadFiles) {
                delete this.successUploadLogData[key]
            }
            fs.writeFile(path.resolve(failedUploadLog), JSON.stringify(this.failedObj), 'utf8', (err) => {
                if (err) {
                    debugFlag && console.error(err)
                } else {
                    // console.log('失败日志已写入' + failedUploadLog + '，请运行 npm run upload2qiniu  failed 重新' + (this.allUploadIsSuccess ? '' : '上传') + (this.allRefreshIsSuccess ? '' : '刷新'))
                }

            });
        }
        fs.writeFile(path.resolve(successUnloadLog), JSON.stringify(this.successUploadLogData), 'utf8', (err) => {
            if (err) {
                console.log('Unload File Log  Write Failed')
            }
        });

    }
}