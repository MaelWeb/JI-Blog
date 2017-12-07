import Comment from '../models/comment_model';

export async function creactComment(ctx) {
    const postData = ctx.request.body;
    const createTime = new Date();
    const { user, commentCont } = postData;
    const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;

    if ( !user ) {
        return ctx.body = {
            code: 400,
            message: '缺少用户信息'
        };
    }

    if ( !user.email || !emailReg.test(user.email) ) {
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
        .catch( err => {
            ctx.throw(500, err.message);
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

export async function getComments(ctx) {
    const query = ctx.query;
    const page = +query.page || 0;
    const size = +query.size || 10;
    const articleid = ctx.params.id || query.articleid;

    let skip = 0;

    if (page !== 0) {
        skip = size * (page - 1)
    }

    let filter =  articleid ? {articleid: articleid} : {};
    let comments = await Comment.find(filter)
            .populate("reply")
            .sort({ createTime: -1 })
            .limit(size)
            .skip(skip).catch(err => {
                ctx.throw(500, '服务器内部错误')
            });

    let allNum = await Comment.find(filter)
            .count()
            .catch(err => {
                ctx.throw(500, '服务器内部错误')
            });

    let allPage = Math.ceil(allNum / size);

    ctx.body = {
        code: 200,
        comments,
        allPage: allPage
    }

    return { comments, allPage};
}