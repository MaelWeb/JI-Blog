import Tag from '../models/tag_model';

export async function createTag(ctx) {
    const tagName = ctx.request.body.name;
    if (tagName == "") {
        return ctx.body = {
            code: 400,
            message: "标签名不能为空"
        }
    }

    const tag = await Tag.findOne({ name: tagName }).catch(err => {
        ctx.throw(500, '服务器错误')
    });

    if (tag !== null) {
        return ctx.body = {
            code: 200,
            tag: tag
        }
    }
    const newTag = new Tag({
        name: tagName
    });

    const result = await newTag.save().catch(err => {
        ctx.throw(500, '服务器错误')
    });

    ctx.body = {
        code: 200,
        tag: result
    }
}

export async function getAllTags(ctx) {
    const tags = await Tag.find().catch(err => {
        ctx.throw(500, '服务器内部错误')
    });

    ctx.body = {
        code: 200,
        tags
    }
}