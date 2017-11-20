import Article from '../models/article_model';

export async function createArticle(ctx) {
    const formData = ctx.request.body;
    const createTime = new Date();
    const lastEditTime = new Date();
    if (formData.title == '') {
        return ctx.body = {
            code: 400,
            message: "标题不能为空"
        }
    }
    if (formData.content == '') {
        return ctx.body = {
            code: 400,
            message: "文章内容不能为空"
        }
    }
    if (formData.htmlContent == '') {
        return ctx.body = {
            code: 400,
            message: "HTML文本为空"
        };
    }
    const article = new Article({
        ...formData,
        createTime,
        lastEditTime
    });
    let createResult = await article.save().catch(err => {
        ctx.throw(500, '服务器内部错误')
    });
    await Article.populate(createResult, { path: 'tags' }, function(err, result) {
        createResult = result;
        // console.log(result)

    });
    console.log('文章创建成功');
    ctx.body = {
        code: 200,
        article: createResult,
        message: "文章保存成功"
    }

}

export async function getAllArticles(ctx) {
    const tag = ctx.query.tag;
    const page = +ctx.query.page;
    const size = +ctx.query.size || 4;
    let skip = 0;
    let articles;
    let allPage;
    let allNum;

    if (tag && (typeof tag != 'array'))
        return ctx.body = {
            code: 501,
            message: '参数错误'
        };

    if (page !== 0) {
        skip = size * (page - 1)
    }

    if (!tag || tag.l) {
        articles = await Article.find()
            .populate("tags")
            .sort({ createTime: -1 })
            .limit(size)
            .skip(skip).catch(err => {
                ctx.throw(500, '服务器内部错误')
            });
        allNum = await Article.count().catch(err => {
            this.throw(500, '服务器内部错误')
        })
    } else {
        let tagArr = tag.split(',')
        // console.log(tagArr)
        articles = await Article.find({
                tags: { "$in": tagArr },
            })
            .populate("tags")
            .sort({ createTime: -1 })
            .limit(size)
            .skip(skip).catch(err => {
                ctx.throw(500, '服务器内部错误')
            });
        allNum = await Article.find({
            tags: { "$in": tagArr }
        }).count().catch(err => {
            ctx.throw(500, '服务器内部错误')
        })
    }
    allPage = Math.ceil(allNum / size)
    ctx.body = {
        code: 200,
        articles,
        allPage: allPage
    }
}

export async function getAllPublishArticles(ctx) {
    const tag = ctx.query.tag;
    const page = +ctx.query.page;
    const limit = +ctx.query.limit || 4;
    let skip = 0;
    let articleArr;
    let allPage;
    let allNum;

    if (page !== 0) {
        skip = limit * (page - 1)
    }

    if (tag == '') {
        articleArr = await Article.find({
                publish: true
            })
            .populate("tags")
            .sort({ createTime: -1 })
            .limit(limit)
            .skip(skip).catch(err => {
                ctx.throw(500, '服务器内部错误')
            });
        allNum = await Article.find({
            publish: true
        }).count().catch(err => {
            this.throw(500, '服务器内部错误')
        })
    } else {
        let tagArr = tag.split(',')
        // console.log(tagArr)
        articleArr = await Article.find({
                tags: { "$in": tagArr },
                publish: true
            })
            .populate("tags")
            .sort({ createTime: -1 })
            .limit(limit)
            .skip(skip).catch(err => {
                ctx.throw(500, '服务器内部错误')
            });
        allNum = await Article.find({
            tags: { "$in": tagArr }
        }).count().catch(err => {
            ctx.throw(500, '服务器内部错误')
        })
    }

    allPage = Math.ceil(allNum / limit)



    ctx.body = {
        success: true,
        articleArr,
        allPage: allPage
    }
}


export async function modifyArticle(ctx) {
    // console.log(ctx.request.body)
    const id = ctx.params.id;
    const title = ctx.request.body.title;
    const content = ctx.request.body.content;
    const abstract = ctx.request.body.abstract;
    const tags = ctx.request.body.tags;
    if (title == '') {
        ctx.throw(400, '标题不能为空')
    }
    if (content == '') {
        ctx.throw(400, '文章内容不能为空')
    }
    if (abstract == '') {
        ctx.throw(400, '摘要不能为空')
    }
    /*if (tags.length === 0) {
      ctx.throw(400, '标签不能为空')
    }*/
    const article = await Article.findByIdAndUpdate(id, { $set: ctx.request.body }).catch(err => {
        if (err.name === 'CastError') {
            ctx.throw(400, 'id不存在');
        } else {
            ctx.throw(500, '服务器内部错误')
        }
    });
    ctx.body = {
        success: true
    }
}

export async function getArticle(ctx) {
    const id = ctx.params.id;
    if (!id) {
        return ctx.body = {
            code: 400,
            message: "请求参数错误"
        }
    }
    /*if (tags.length === 0) {
      ctx.throw(400, '标签不能为空')
    }*/
    const article = await Article
        .findById(id)
        .populate("tags")
        .catch(err => {
            if (err.name === 'CastError') {
                return ctx.body = {
                    code: 400,
                    message: "文章不存在或已删除"
                }
            } else {
                return ctx.body = {
                    code: 500,
                    message: "服务器内部错误"
                }
            }
        });

    ctx.body = {
        code: 200,
        article: article
    }
}

export async function deleteArticle(ctx) {
    const id = ctx.params.id;
    const article = await Article.findByIdAndRemove(id).catch(err => {
        if (err.name === 'CastError') {
            ctx.throw(400, 'id不存在');
        } else {
            ctx.throw(500, '服务器内部错误')
        }
    });
    ctx.body = {
        code: 200,
        message: '删除成功'
    };
}

export async function publishArticle(ctx) {
    const id = ctx.params.id;
    const article = await Article.findByIdAndUpdate(id, { $set: { publish: true } }).catch(err => {
        if (err.name === 'CastError') {
            this.throw(400, 'id不存在');
        } else {
            this.throw(500, '服务器内部错误')
        }
    });
    ctx.body = {
        success: true
    }
}

export async function notPublishArticle(ctx) {
    const id = ctx.params.id;
    const article = await Article.findByIdAndUpdate(id, { $set: { publish: false } }).catch(err => {
        if (err.name === 'CastError') {
            this.throw(400, 'id不存在');
        } else {
            this.throw(500, '服务器内部错误')
        }
    });
    ctx.body = {
        success: true
    }
}