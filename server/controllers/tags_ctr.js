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

export async function updateTagCount(ctx) {
    const type = ctx.request.body.type;
    let result = {
        code: 200,
        message: 'ok'
    }

    await Tag.findByIdAndUpdate(ctx.request.body.id, { $inc: { count: type } }).catch(err => {
        result.code = 500;
        result.message = "服务器错误";
    })

    ctx.body = result;
}

export async function getAllTags(ctx) {
    let result = {
        code: 200,
        message: 'ok'
    };

    const tags = await Tag.find()
        .sort({ count: -1 })
        .catch(err => {
            result.code = 500;
            result.message = "服务器错误";
        });

    ctx.body = {
        code: 200,
        tags
    }

    return tags;
}