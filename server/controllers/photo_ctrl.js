import Photo from '../models/photo_model';
import { uploadToQiniu } from './qiniu_ctrl';

export async function addPhoto(ctx) {
    let postData = ctx.request.body;

    const result = await Photo.create(postData).catch(err => {
        console.log('[Server ERROR]', err);
        ctx.throw(500, '服务器错误')
    });

    ctx.body = {
        code: 200,
        photoes: result
    }
}


export async function getPhotoes(ctx) {
    let query = ctx.query,
        page = +query.page || 0,
        size = +query.size || 10,
        skip = 0;

    if (page !== 0) {
        skip = size * (page - 1);
    }

    let photoes = await Photo.find()
        .limit(size)
        .skip(skip)
        .catch( err => ctx.throw(500, err));

    let allNum = await Photo.count().catch( err => ctx.throw(500, err));


    ctx.body= {
        code: 200,
        photoes,
        allPage: Math.ceil(allNum / size)
    }

}