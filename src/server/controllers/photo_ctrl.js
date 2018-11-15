import Photo from '../models/photo_model';
import { uploadToQiniu, deleteFileInQiniu } from './qiniu_ctrl';

export async function addPhoto(ctx) {
    const postData = ctx.request.body;

    const result = await Photo.create(postData).catch(err => {
        ctx.body = {
            code: 500,
            message: '服务器内部错误',
        }
    });

    ctx.body = {
        code: 200,
        photoes: result
    };
}

export async function updatePhoto(ctx) {
    let id = ctx.params.id;
    let postData = ctx.request.body;

    let result = await Photo.findByIdAndUpdate(id, { $set: postData }).catch(
        err => {
            if (err.name === 'CastError') {
                return ctx.body = {
                    code: 400,
                    message: "相片不存在"
                };
            } else {
                return ctx.body = {
                    code: 500,
                    message: "服务器内部错误"
                };
            }
        },
    );

    ctx.body = {
        code: 200,
        message: '保存成功'
    };
}

export async function getPhotoes(ctx) {
    let query = ctx.query;


    let page = +query.page || 1;


    let size = +query.size || 10;


    let skip = 0;

    if (page !== 1) {
        skip = size * (page - 1);
    }

    let photoes = await Photo.find()
        .limit(size)
        .skip(skip)
        .sort({ isBanner: -1, createTime: -1 })
        .catch(err => ctx.throw(500, err));

    const allNum = await Photo.count().catch(err => ctx.throw(500, err));

    ctx.body = {
        code: 200,
        photoes,
        allNum,
        page,
        allPage: Math.ceil(allNum / size)
    };

    return {
        photoes,
        allNum,
        page,
        allPage: Math.ceil(allNum / size)
    };
}

export async function deletePhoto(ctx) {
    let id = ctx.params.id;

    const photo = await Photo.findByIdAndRemove(id).catch(err => {
        if (err.name === "CastError") {
            return (ctx.body = {
                code: 400,
                message: '图片不存在或已删除'
            });
        }
        return ctx.body = {
            code: 500,
            message: '服务器内部错误'
        };

    });

    deleteFileInQiniu(photo.key);

    return ctx.body = {
        code: 200,
        message: "删除成功"
    };
}