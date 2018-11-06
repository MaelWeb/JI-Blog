import Book from '../models/book_model';

export async function createBook(ctx) {
    let postData = ctx.request.body;

    const result = {
        code: 200,
        message: '新增成功'
    };

    const book = new Book({ ...postData, createTime: +new Date() });

    const bookResult = await book.save().catch(err => {
        result.code = 500;
        result.message = "服务器错误";
    });

    result.book = bookResult;

    ctx.body = result;
}

export async function getBooks(ctx) {
    let query = ctx.query;

    const page = +query.page || 1;

    const size = +query.size || 10;

    let skip = 0;

    if (page !== 1) {
        skip = size * (page - 1);
    }

    const result = {
        code: 200,
        message: 'ok'
    };

    const books = await Book.find()
        .limit(size)
        .skip(skip)
        .sort({ isReading: -1, createTime: -1 })
        .catch(err => {
            result.code = 500;
            result.message = "服务器错误";
        });

    const allNum = await Book.count().catch(err => {
        result.code = 500;
        result.message = "服务器错误";
    });

    result.books = books || [];
    result.page = page;
    result.allPage = Math.ceil(allNum / size);
    result.allNum = allNum;

    if (ctx) {
        ctx.body = result;
    }

    return {
        books,
        allNum,
        page,
        allPage: Math.ceil(allNum / size)
    };
}

export async function deleteBook(ctx) {
    let id = ctx.params.id;

    const book = await Book.findByIdAndRemove(id).catch(err => {
    if (err.name === "CastError") {
      return (ctx.body = {
                code: 400,
                message: "书籍不存在或已删除"
            });
    }
        return ctx.body = {
      code: 500,
            message: "服务器内部错误"
    };
    });
    ctx.body = {
        code: 200,
        message: '删除成功'
    };
}

export async function updateBook(ctx) {
    const id = ctx.params.id;
    const postData = ctx.request.body;

    const book = await Book.findByIdAndUpdate(id, { $set: postData }).catch(
    err => {
      if (err.name === "CastError") {
        return (ctx.body = {
          code: 400,
                message: 'Banner不存在或已删除',
            };
      }
      return ctx.body = {
      code: 500,
            message: "服务器内部错误"
    };
    }
  );

    ctx.body = {
        code: 200,
        message: '修改成功',
        book
    };
}
