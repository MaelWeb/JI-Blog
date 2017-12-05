import Comment from '../models/comment_model';

export async function creactComment(ctx) {
    const postData = ctx.request.body;
    const createTime = new Date();
    const { user, commentCont } = postData;

    if ( !user ) {
        return ctx.body = {
            code: 400,
            message: '缺少用户信息'
        };
    }

    if ( !user.email ) {
        return ctx.body = {
            code: 400,
            message: '缺少用户邮箱'
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
        .catch( err => {
            ctx.throw(500, err);
        })

    await Comment.populate(result, {path: 'reply'}, function(err, res) {
        result = res;
    });

    ctx.body = {
        code: 200,
        comment: result,
        message: "发布成功"
    };
}