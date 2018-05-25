import Comment from '../models/comment_model';

export async function creactComment(ctx) {
    const postData = ctx.request.body;
    const createTime = new Date();
    const { user, commentCont } = postData;
    const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;

    if (!user) {
        return ctx.body = {
            code: 400,
            message: '缺少用户信息'
        };
    }

    if (!user.email || !emailReg.test(user.email)) {
        return ctx.body = {
            code: 400,
            message: '缺少用户邮箱或邮箱格式不正确'
        };
    }

    if (!commentCont) {
        return ctx.body = {
            code: 400,
            message: '评论信息不能为空'
        };
    }

    const newComment = new Comment({
        createTime,
        ...postData
    });

    let result = await newComment.save()
        .catch(err => {
            ctx.throw(500, err.message);
        })

    await Comment.populate(result, { path: 'reply' }, function(err, res) {
        result = res;
    });

    ctx.body = {
        code: 200,
        comment: result,
        message: "发布成功"
    };
}

export async function getComments(ctx) {
    let page = 1,
        size =  20,
        articleid = null,
        skip = 0,
        allNum = 0,
        allPage = 0,
        comments = [],
        filter = {};

    if (ctx && ctx.query ) {
        page = +ctx.query.page || 1;
        size = +ctx.query.size || 20;
        ctx.query.isRemove && (filter.isRemove = ctx.query.isRemove);
        ctx.query.articleid && (filter.articleid = ctx.query.articleid)
    }

    if (ctx && ctx.params && ctx.params.id) {
        filter.articleid = ctx.params.id;
    }

    if (page !== 1) {
        skip = size * (page - 1)
    }


    comments = await Comment.find(filter)
        .populate("reply")
        .sort({ createTime: -1 })
        .limit(size)
        .skip(skip).catch(err => {
            ctx.throw(500, '服务器内部错误')
        });

    allNum = await Comment.find(filter)
        .count()
        .catch(err => {
            ctx.throw(500, '服务器内部错误')
        });

    allPage = Math.ceil(allNum / size);

    ctx && (ctx.body = {
        code: 200,
        comments,
        allPage,
        allNum,
        page
    })

    return { comments, allPage, allNum, page };
}

export async function showAndHideComent(ctx) {
    const postData = ctx.request.body;

    let result = {
        code: 200,
        message: '修改成功'
    };
    const comment = await Comment.findByIdAndUpdate(postData.id, { isRemove: postData.isRemove })
        .catch(err => {
            if (err.name === 'CastError') {
                result.code = 400;
                result.message = "评论不存在";
            } else {
                result.code = 500;
                result.message = "服务器内部错误";
            }
        });

    // result.comment = comment;
    ctx.body = result;
}

export async function deleteComment(ctx) {
    const id = ctx.params.id;
    let result = {
        code: 200,
        message: '删除成功'
    };
    const article = await Comment.findByIdAndRemove(id).catch(err => {
        if (err.name === 'CastError') {
            result.code = 400;
            result.message = "评论不存在";
        } else {
            result.code = 500;
            result.message = "服务器内部错误";
        }
    });
    ctx.body = result;
}