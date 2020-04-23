import Article from '../models/article_model';
import ToWxml from '../lib/towxml';

export async function createArticle(ctx) {
    const formData = ctx.request.body;
    const createTime = new Date();
    const lastEditTime = new Date();
    if (formData.title == '') {
        return (ctx.body = {
            code: 400,
            message: '标题不能为空'
        });
    }
    if (formData.content == '') {
        return (ctx.body = {
            code: 400,
            message: '文章内容不能为空'
        });
    }
    if (formData.htmlContent == '') {
        return (ctx.body = {
            code: 400,
            message: 'HTML文本为空'
        });
    }
    const article = new Article({
        ...formData,
        createTime,
        lastEditTime,
        author: ctx.cookies.get('uid')
    });

    let createResult = await article.save().catch(err => {
        ctx.throw(500, '服务器内部错误');
    });

    await Article.populate(createResult, {
        path: 'tags'
    }, (err, result) => {
        createResult = result;
        // console.log(result)
    });

    ctx.body = {
        code: 200,
        article: createResult,
        message: '文章保存成功'
    };
}

export async function getAllArticles(ctx) {
    const tag = ctx.query.tag;
    const page = +ctx.query.page || 1;
    const pageSize = +ctx.query.pageSize || 20;
    let skip = 0;
    let articles;
    let allPage;
    let allNum;

    if (page !== 1) {
        skip = pageSize * (page - 1);
    }

    if (!tag) {
        articles = await Article.find(null, {
                title: 1,
                publish: 1,
                abstract: 1,
                createTime: 1,
                content: 1
            })
            .populate('tags')
            .sort({
                createTime: -1
            })
            .limit(pageSize)
            .skip(skip)
            .catch(err => {
                ctx.throw(500, '服务器内部错误');
            });
        allNum = await Article.count().catch(err => {
            ctx.throw(500, '服务器内部错误');
        });
    } else {
        // console.log(tagArr)
        let _tag = tag.split(';');
        articles = await Article.find({
                tags: {
                    $in: _tag
                }
            }, {
                title: 1,
                publish: 1,
                abstract: 1,
                createTime: 1,
                content: 1
            })
            .populate('tags')
            .sort({
                createTime: -1
            })
            .limit(pageSize)
            .skip(skip)
            .catch(err => {
                ctx.throw(500, '服务器内部错误');
            });
        allNum = await Article.find({
                tags: {
                    $in: _tag
                }
            })
            .count()
            .catch(err => {
                ctx.throw(500, '服务器内部错误');
            });
    }

    allPage = Math.ceil(allNum / pageSize);

    ctx.body = {
        code: 200,
        articles,
        allPage,
        allNum,
        page
    };

    return {
        articles,
        allPage,
        page,
        allNum
    };
}

export async function getAllPublishArticles(ctx) {
    const tag = ctx.query.tag;
    const page = +ctx.query.page || 1;
    const pageSize = +ctx.query.pageSize || 20;
    const category = ctx.query.category || null;
    let skip = 0;
    let articles;
    let allPage;
    let allNum;

    if (page !== 1) {
        skip = pageSize * (page - 1);
    }

    if (!tag) {
        articles = await Article.find({
                publish: true,
                category
            }, {
                title: 1,
                banner: 1,
                abstract: 1,
                createTime: 1
            })
            .sort({
                createTime: -1
            })
            .limit(pageSize)
            .skip(skip)
            .catch(err => {
                ctx.throw(500, err);
            });
        allNum = await Article.find({
                publish: true,
                category
            })
            .count()
            .catch(err => {
                ctx.throw(500, '服务器内部错误');
            });
    } else {
        let tagArr = tag.split(';');
        articles = await Article.find({
                tags: {
                    '$in': tagArr
                },
                publish: true,
                category
            }, {
                title: 1,
                banner: 1,
                abstract: 1,
                createTime: 1
            })
            .sort({
                createTime: -1
            })
            .limit(pageSize)
            .skip(skip)
            .catch(err => {
                ctx.throw(500, '服务器内部错误');
            });
        allNum = await Article.find({
                tags: {
                    $in: tagArr
                },
                category
            })
            .count()
            .catch(err => {
                ctx.throw(500, '服务器内部错误');
            });
    }

    allPage = Math.ceil(allNum / pageSize);

    ctx.body = {
        code: 200,
        articles,
        allPage,
        allNum,
        page
    };

    return {
        articles,
        allPage,
        page,
        allNum
    };
}

export async function getTopArticles(ctx) {
    const page = +ctx.query.page || 1;
    const pageSize = +ctx.query.pageSize || 20;
    let skip = 0;
    let articles;
    let allPage;
    let allNum;

    if (page !== 1) {
        skip = pageSize * (page - 1);
    }

    articles = await Article.find({
            publish: true
        }, {
            title: 1,
            banner: 1,
            abstract: 1,
            createTime: 1,
            id: 1,
            lastEditTime: -1
        })
        .populate('tags')
        .sort({
            visited: -1
        })
        .limit(pageSize)
        .skip(skip)
        .catch(err => {
            ctx.throw(500, '服务器内部错误');
        });

    allNum = await Article.find({
            publish: true
        })
        .count()
        .catch(err => {
            ctx.throw(500, '服务器内部错误');
        });

    allPage = Math.ceil(allNum / pageSize);

    ctx.body = {
        code: 200,
        articles,
        allPage,
        allNum,
        page
    };

    return {
        articles,
        allPage,
        page,
        allNum
    };
}

export async function modifyArticle(ctx) {
    // console.log(ctx.request.body)
    const id = ctx.params.id;
    const postData = ctx.request.body;

    if (postData.title == '') {
        return (ctx.body = {
            code: 400,
            message: '标题不能为空'
        });
    }
    if (postData.content == '') {
        return (ctx.body = {
            code: 400,
            message: '文章内容不能为空'
        });
    }
    if (postData.htmlContent == '') {
        return (ctx.body = {
            code: 400,
            message: 'HTML文本为空'
        });
    }
    /* if (postData.tags.length === 0) {
            ctx.throw(400, '标签不能为空')
        } */

    const article = await Article.findByIdAndUpdate(id, {
        $set: postData
    }).catch(
        err => {
            if (err.name === 'CastError') {
                return (ctx.body = {
                    code: 400,
                    message: '文章不存在或已删除'
                });
            } else {
                return (ctx.body = {
                    code: 500,
                    message: '服务器内部错误'
                });
            }
        }
    );
    ctx.body = {
        code: 200,
        message: '保存成功'
    };
}

export async function getArticle(ctx) {
    const id = ctx.params.id;
    const {
        filter
    } = ctx.query;
    let projection = {};

    if (filter == 'weapp') {
        projection = {
            title: 1,
            content: 1,
            abstract: 1,
            banner: 1,
            visited: 1,
            category: 1
        };
    } else {
        projection = {
            title: 1,
            htmlContent: 1,
            abstract: 1,
            banner: 1,
            visited: 1,
            category: 1,
            createTime: 1
        };
    }

    if (!id) {
        return (ctx.body = {
            code: 400,
            message: '请求参数错误'
        });
    }
    let article = await Article.findByIdAndUpdate(
            id, {
                $inc: {
                    visited: 1
                }
            }, {
                projection
            }
        )
        .populate('tags')
        .catch(err => {
            if (err.name === 'CastError') {
                return ctx.body = {
                    code: 400,
                    message: '文章不存在或已删除'
                };
            }
            return ctx.body = {
                code: 500,
                message: '服务器内部错误'
            };

        });

    article = article.toJSON({
        getters: true
    });

    const {
        content,
        ...others
    } = article;

    const body = {
        code: 200,
        article: others
    };

    if (filter === 'weapp') {
        body.wxml = ToWxml(article.content, 'markdown');
    }
    ctx.body = body;

    return ctx.body;
}

export async function deleteArticle(ctx) {
    const id = ctx.params.id;
    const article = await Article.findByIdAndRemove(id).catch(err => {
        if (err.name === 'CastError') {
            return ctx.body = {
                code: 400,
                message: '文章不存在或已删除'
            };
        }
        return ctx.body = {
            code: 500,
            message: '服务器内部错误'
        };

    });
    ctx.body = {
        code: 200,
        message: '删除成功'
    };
}

export async function publishArticle(ctx) {
    const id = ctx.params.id;
    const postData = ctx.request.body;
    const article = await Article.findByIdAndUpdate(id, {
        $set: {
            publish: true,
            ...postData
        }
    }).catch(err => {
        if (err.name === 'CastError') {
            return ctx.body = {
                code: 400,
                message: '文章不存在或已删除'
            };
        }
        return ctx.body = {
            code: 500,
            message: '服务器内部错误'
        };

    });

    ctx.body = {
        code: 200,
        message: '发布成功'
    };
}

export async function hideArticle(ctx) {
    const id = ctx.params.id;
    const article = await Article.findByIdAndUpdate(id, {
        $set: {
            publish: false
        }
    }).catch(err => {
        if (err.name === 'CastError') {
            return ctx.body = {
                code: 400,
                message: '文章不存在或已删除'
            };
        }
        return ctx.body = {
            code: 500,
            message: '服务器内部错误'
        };

    });

    ctx.body = {
        code: 200,
        message: '撤回成功'
    };
}