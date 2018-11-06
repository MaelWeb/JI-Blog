import Tag from '../models/tag_model';

export async function createTag(ctx) {
    const postData = ctx.request.body;
    if (postData.name == "") {
        return ctx.body = {
      code: 400,
      message: '标签名不能为空'
    };
    }

    const tag = await Tag.findOne({ name: postData.name }).catch(err => {
        ctx.throw(500, '服务器错误');
    });

    if (tag !== null) {
        return ctx.body = {
      code: 200,
      tag
    };
    }
    const newTag = new Tag({
        ...postData
    });

    const result = await newTag.save().catch(err => {
        ctx.throw(500, '服务器错误');
    });

    ctx.body = {
        code: 200,
        tag: result
    };
}

export async function updateTagCount(ctx) {
    const type = ctx.request.body.type;
    const result = {
        code: 200,
        message: 'ok'
    };

    await Tag.findByIdAndUpdate(ctx.request.body.id, {
        $inc: { count: type },
    }).catch(err => {
        result.code = 500;
        result.message = "服务器错误";
    });

    ctx.body = result;
}

export async function getAllTags(ctx) {
    let result = {
        code: 200,
        message: 'ok'
    };

    const tags = await Tag.find({}, { __v: 0 })
        .sort({ count: -1 })
        .catch(err => {
            result.code = 500;
            result.message = "服务器错误";
        });

    ctx.body = {
        code: 200,
        tags
    };

    return tags;
}
