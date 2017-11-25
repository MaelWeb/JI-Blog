/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = __webpack_require__(15);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    app: {
        port: process.env.PORT || 8889,
        baseApi: '/api'
    },
    mongodb: {
        url: 'mongodb://localhost:27017/koa-blog'
    },
    jwt: {
        secret: 'me' //默认
    },
    mongodbSecret: { //mongodb用户和密码
        user: '',
        pass: ''
    },
    admin: { //后台初始化的用户名密码
        user: 'admin',
        pwd: 'password'
    },
    port: 8080,
    database: {
        DATABASE: 'node_koa_test',
        USERNAME: 'root',
        PASSWORD: "1123",
        PORT: 3306,
        HOST: 'localhost'
    },
    upload: {
        ACCESS_KEY: 'ARA9LIvdx3JFZyADmwohmEMyjVLmNSIjVxgpzIA4',
        SECRET_KEY: 'aK19LEtOfStwsvn501Pl_h_wTqkVFnbzxlI5FNU7'
    }
    // 可在private.js定义自己私有的配置
    // module.exports = {
    //   mongodbSecret: {
    //     user: '',
    //     pass: ''
    //   },
    //   jwt: {
    //     secret: 'xxx'
    //   },
    //   admin: {
    //       user: '',
    //       pwd: ''
    //   }
    // }
    // if (fs.existsSync(__dirname + '/private.js')) {
    //     console.log(111);
    //     config = Object.assign(config, require('./private.js'));
    // }
};exports.default = config;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageVerify = exports.apiVerify = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var apiVerify = exports.apiVerify = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
        var token, tokenContent;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        token = ctx.cookies.get('access_token');

                        if (token === '') {
                            ctx.throw(401, 'no token detected in http header \'Authorization\'');
                        }
                        tokenContent = void 0;
                        _context.prev = 3;
                        _context.next = 6;
                        return _jsonwebtoken2.default.verify(token, _config2.default.jwt.secret);

                    case 6:
                        tokenContent = _context.sent;
                        _context.next = 13;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](3);

                        if ('TokenExpiredError' === _context.t0.name) {
                            ctx.throw(401, 'token expired,请及时本地保存数据！');
                        }
                        ctx.throw(401, 'invalid token');

                    case 13:
                        console.log("鉴权成功");
                        _context.next = 16;
                        return next();

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 9]]);
    }));

    return function apiVerify(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var pageVerify = exports.pageVerify = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
        var token, url, adminReg, loginReg, tokenContent;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        token = ctx.cookies.get('access_token'), url = ctx.request.url, adminReg = /admin/g, loginReg = /admin\/login|admin\/registe/g;

                        if (!(adminReg.test(url) && !loginReg.test(url))) {
                            _context2.next = 13;
                            break;
                        }

                        if (token === '') {
                            ctx.redirect('/admin/login');
                        }

                        tokenContent = void 0;
                        _context2.prev = 4;
                        _context2.next = 7;
                        return _jsonwebtoken2.default.verify(token, _config2.default.jwt.secret);

                    case 7:
                        tokenContent = _context2.sent;
                        _context2.next = 13;
                        break;

                    case 10:
                        _context2.prev = 10;
                        _context2.t0 = _context2['catch'](4);

                        ctx.redirect('/admin/login');

                    case 13:
                        _context2.next = 15;
                        return next();

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[4, 10]]);
    }));

    return function pageVerify(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _jsonwebtoken = __webpack_require__(17);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notPublishArticle = exports.publishArticle = exports.deleteArticle = exports.getArticle = exports.modifyArticle = exports.getAllPublishArticles = exports.getAllArticles = exports.createArticle = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var createArticle = exports.createArticle = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var formData, createTime, lastEditTime, article, createResult;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        formData = ctx.request.body;
                        createTime = new Date();
                        lastEditTime = new Date();

                        if (!(formData.title == '')) {
                            _context.next = 5;
                            break;
                        }

                        return _context.abrupt('return', ctx.body = {
                            code: 400,
                            message: "标题不能为空"
                        });

                    case 5:
                        if (!(formData.content == '')) {
                            _context.next = 7;
                            break;
                        }

                        return _context.abrupt('return', ctx.body = {
                            code: 400,
                            message: "文章内容不能为空"
                        });

                    case 7:
                        if (!(formData.htmlContent == '')) {
                            _context.next = 9;
                            break;
                        }

                        return _context.abrupt('return', ctx.body = {
                            code: 400,
                            message: "HTML文本为空"
                        });

                    case 9:
                        article = new _article_model2.default((0, _extends3.default)({}, formData, {
                            createTime: createTime,
                            lastEditTime: lastEditTime
                        }));
                        _context.next = 12;
                        return article.save().catch(function (err) {
                            ctx.throw(500, '服务器内部错误');
                        });

                    case 12:
                        createResult = _context.sent;
                        _context.next = 15;
                        return _article_model2.default.populate(createResult, { path: 'tags' }, function (err, result) {
                            createResult = result;
                            // console.log(result)
                        });

                    case 15:

                        ctx.body = {
                            code: 200,
                            article: createResult,
                            message: "文章保存成功"
                        };

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function createArticle(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getAllArticles = exports.getAllArticles = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
        var _this = this;

        var tag, page, size, skip, articles, allPage, allNum, _tag;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        tag = ctx.query.tag;
                        page = +ctx.query.page || 0;
                        size = +ctx.query.size || 10;
                        skip = 0;
                        articles = void 0;
                        allPage = void 0;
                        allNum = void 0;


                        if (page !== 0) {
                            skip = size * (page - 1);
                        }

                        if (tag) {
                            _context2.next = 17;
                            break;
                        }

                        _context2.next = 11;
                        return _article_model2.default.find({}, { title: 1 }).populate("tags").sort({ createTime: -1 }).limit(size).skip(skip).catch(function (err) {
                            ctx.throw(500, '服务器内部错误');
                        });

                    case 11:
                        articles = _context2.sent;
                        _context2.next = 14;
                        return _article_model2.default.count().catch(function (err) {
                            _this.throw(500, '服务器内部错误');
                        });

                    case 14:
                        allNum = _context2.sent;
                        _context2.next = 24;
                        break;

                    case 17:
                        // console.log(tagArr)
                        _tag = tag.split(';');
                        _context2.next = 20;
                        return _article_model2.default.find({
                            tags: { "$in": _tag }
                        }).populate("tags").sort({ createTime: -1 }).limit(size).skip(skip).catch(function (err) {
                            ctx.throw(500, '服务器内部错误');
                        });

                    case 20:
                        articles = _context2.sent;
                        _context2.next = 23;
                        return _article_model2.default.find({
                            tags: { "$in": _tag }
                        }).count().catch(function (err) {
                            ctx.throw(500, '服务器内部错误');
                        });

                    case 23:
                        allNum = _context2.sent;

                    case 24:
                        allPage = Math.ceil(allNum / size);

                        ctx.body = {
                            code: 200,
                            articles: articles,
                            allPage: allPage
                        };

                        return _context2.abrupt('return', { articles: articles, allPage: allPage });

                    case 27:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getAllArticles(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var getAllPublishArticles = exports.getAllPublishArticles = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx) {
        var _this2 = this;

        var tag, page, limit, skip, articles, allPage, allNum, tagArr;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        tag = ctx.query.tag;
                        page = +ctx.query.page;
                        limit = +ctx.query.limit || 10;
                        skip = 0;
                        articles = void 0;
                        allPage = void 0;
                        allNum = void 0;

                        if (!(tag && typeof tag != 'array')) {
                            _context3.next = 9;
                            break;
                        }

                        return _context3.abrupt('return', ctx.body = {
                            code: 501,
                            message: '参数错误'
                        });

                    case 9:

                        if (page !== 0) {
                            skip = limit * (page - 1);
                        }

                        if (!(!tag || tag.length)) {
                            _context3.next = 19;
                            break;
                        }

                        _context3.next = 13;
                        return _article_model2.default.find({
                            publish: true
                        }).populate("tags").sort({ createTime: -1 }).limit(limit).skip(skip).catch(function (err) {
                            ctx.throw(500, '服务器内部错误');
                        });

                    case 13:
                        articles = _context3.sent;
                        _context3.next = 16;
                        return _article_model2.default.find({
                            publish: true
                        }).count().catch(function (err) {
                            _this2.throw(500, '服务器内部错误');
                        });

                    case 16:
                        allNum = _context3.sent;
                        _context3.next = 26;
                        break;

                    case 19:
                        tagArr = tag.split(',');
                        // console.log(tagArr)

                        _context3.next = 22;
                        return _article_model2.default.find({
                            tags: { "$in": tagArr },
                            publish: true
                        }).populate("tags").sort({ createTime: -1 }).limit(limit).skip(skip).catch(function (err) {
                            ctx.throw(500, '服务器内部错误');
                        });

                    case 22:
                        articles = _context3.sent;
                        _context3.next = 25;
                        return _article_model2.default.find({
                            tags: { "$in": tagArr }
                        }).count().catch(function (err) {
                            ctx.throw(500, '服务器内部错误');
                        });

                    case 25:
                        allNum = _context3.sent;

                    case 26:

                        allPage = Math.ceil(allNum / limit);

                        ctx.body = {
                            success: true,
                            articles: articles,
                            allPage: allPage
                        };

                        return _context3.abrupt('return', { articles: articles, allPage: allPage });

                    case 29:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function getAllPublishArticles(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

var modifyArticle = exports.modifyArticle = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(ctx) {
        var id, postData, article;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        // console.log(ctx.request.body)
                        id = ctx.params.id;
                        postData = ctx.request.body;

                        if (!(postData.title == '')) {
                            _context4.next = 4;
                            break;
                        }

                        return _context4.abrupt('return', ctx.body = {
                            code: 400,
                            message: "标题不能为空"
                        });

                    case 4:
                        if (!(postData.content == '')) {
                            _context4.next = 6;
                            break;
                        }

                        return _context4.abrupt('return', ctx.body = {
                            code: 400,
                            message: "文章内容不能为空"
                        });

                    case 6:
                        if (!(postData.htmlContent == '')) {
                            _context4.next = 8;
                            break;
                        }

                        return _context4.abrupt('return', ctx.body = {
                            code: 400,
                            message: "HTML文本为空"
                        });

                    case 8:
                        _context4.next = 10;
                        return _article_model2.default.findByIdAndUpdate(id, { $set: postData }).catch(function (err) {
                            if (err.name === 'CastError') {
                                ctx.throw(400, '文章不存在');
                            } else {
                                ctx.throw(500, '服务器内部错误');
                            }
                        });

                    case 10:
                        article = _context4.sent;

                        ctx.body = {
                            code: 200,
                            message: '保存成功'
                        };

                    case 12:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function modifyArticle(_x4) {
        return _ref4.apply(this, arguments);
    };
}();

var getArticle = exports.getArticle = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ctx) {
        var id, article;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        id = ctx.params.id;

                        if (id) {
                            _context5.next = 3;
                            break;
                        }

                        return _context5.abrupt('return', ctx.body = {
                            code: 400,
                            message: "请求参数错误"
                        });

                    case 3:
                        _context5.next = 5;
                        return _article_model2.default.findById(id).populate("tags").catch(function (err) {
                            if (err.name === 'CastError') {
                                return ctx.body = {
                                    code: 400,
                                    message: "文章不存在或已删除"
                                };
                            } else {
                                return ctx.body = {
                                    code: 500,
                                    message: "服务器内部错误"
                                };
                            }
                        });

                    case 5:
                        article = _context5.sent;


                        ctx.body = {
                            code: 200,
                            article: article
                        };

                        return _context5.abrupt('return', ctx.body);

                    case 8:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function getArticle(_x5) {
        return _ref5.apply(this, arguments);
    };
}();

var deleteArticle = exports.deleteArticle = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(ctx) {
        var id, article;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        id = ctx.params.id;
                        _context6.next = 3;
                        return _article_model2.default.findByIdAndRemove(id).catch(function (err) {
                            if (err.name === 'CastError') {
                                ctx.throw(400, 'id不存在');
                            } else {
                                ctx.throw(500, '服务器内部错误');
                            }
                        });

                    case 3:
                        article = _context6.sent;

                        ctx.body = {
                            code: 200,
                            message: '删除成功'
                        };

                    case 5:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function deleteArticle(_x6) {
        return _ref6.apply(this, arguments);
    };
}();

var publishArticle = exports.publishArticle = function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(ctx) {
        var _this3 = this;

        var id, article;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        id = ctx.params.id;
                        _context7.next = 3;
                        return _article_model2.default.findByIdAndUpdate(id, { $set: { publish: true } }).catch(function (err) {
                            if (err.name === 'CastError') {
                                _this3.throw(400, 'id不存在');
                            } else {
                                _this3.throw(500, '服务器内部错误');
                            }
                        });

                    case 3:
                        article = _context7.sent;

                        ctx.body = {
                            success: true
                        };

                    case 5:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));

    return function publishArticle(_x7) {
        return _ref7.apply(this, arguments);
    };
}();

var notPublishArticle = exports.notPublishArticle = function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(ctx) {
        var _this4 = this;

        var id, article;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        id = ctx.params.id;
                        _context8.next = 3;
                        return _article_model2.default.findByIdAndUpdate(id, { $set: { publish: false } }).catch(function (err) {
                            if (err.name === 'CastError') {
                                _this4.throw(400, 'id不存在');
                            } else {
                                _this4.throw(500, '服务器内部错误');
                            }
                        });

                    case 3:
                        article = _context8.sent;

                        ctx.body = {
                            success: true
                        };

                    case 5:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));

    return function notPublishArticle(_x8) {
        return _ref8.apply(this, arguments);
    };
}();

var _article_model = __webpack_require__(44);

var _article_model2 = _interopRequireDefault(_article_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllTags = exports.createTag = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var createTag = exports.createTag = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var tagName, tag, newTag, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        tagName = ctx.request.body.name;

                        if (!(tagName == "")) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt("return", ctx.body = {
                            code: 400,
                            message: "标签名不能为空"
                        });

                    case 3:
                        _context.next = 5;
                        return _tag_model2.default.findOne({ name: tagName }).catch(function (err) {
                            ctx.throw(500, '服务器错误');
                        });

                    case 5:
                        tag = _context.sent;

                        if (!(tag !== null)) {
                            _context.next = 8;
                            break;
                        }

                        return _context.abrupt("return", ctx.body = {
                            code: 200,
                            tag: tag
                        });

                    case 8:
                        newTag = new _tag_model2.default({
                            name: tagName
                        });
                        _context.next = 11;
                        return newTag.save().catch(function (err) {
                            ctx.throw(500, '服务器错误');
                        });

                    case 11:
                        result = _context.sent;


                        ctx.body = {
                            code: 200,
                            tag: result
                        };

                    case 13:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function createTag(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getAllTags = exports.getAllTags = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
        var tags;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _tag_model2.default.find().catch(function (err) {
                            ctx.throw(500, '服务器内部错误');
                        });

                    case 2:
                        tags = _context2.sent;


                        ctx.body = {
                            code: 200,
                            tags: tags
                        };

                        return _context2.abrupt("return", tags);

                    case 5:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getAllTags(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var _tag_model = __webpack_require__(48);

var _tag_model2 = _interopRequireDefault(_tag_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPhotoes = exports.fileUpload = exports.uploadToQiniu = undefined;

var _assign = __webpack_require__(49);

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(13);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var uploadToQiniu = exports.uploadToQiniu = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var req, res, busboy, buf, nowTime, config, formUploader, putExtra, params;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        req = ctx.req, res = ctx.res;
                        busboy = new _busboy2.default({ headers: req.headers }), buf = Buffer.alloc(0);
                        nowTime = +new Date();
                        config = new _qiniu2.default.conf.Config();
                        // 空间对应的机房

                        config.zone = _qiniu2.default.zone.Zone_z0;
                        config.useCdnDomain = true;

                        formUploader = new _qiniu2.default.form_up.FormUploader(config);
                        putExtra = new _qiniu2.default.form_up.PutExtra();
                        params = {};
                        return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                            busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
                                console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);

                                file.on('data', function (data) {
                                    console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
                                    buf = Buffer.concat([buf, data]);
                                });

                                file.on('end', function () {
                                    console.log('File [' + fieldname + '] Finished');
                                    var time = +new Date();
                                    var key = params.prefix ? '' + params.prefix + (0, _md2.default)(time) : (0, _md2.default)(time);
                                    // 获取上传token
                                    var UPLOAD_TOKEN = getToken(params.bucket || null);

                                    formUploader.put(UPLOAD_TOKEN, key, buf, putExtra, function (respErr, respBody, respInfo) {
                                        if (respErr) {
                                            // throw respErr;
                                            resolve((0, _extends3.default)({
                                                code: 500
                                            }, respErr));
                                        }
                                        if (respInfo.statusCode == 200) {
                                            console.log('respBody200', respBody);
                                            resolve({
                                                code: 200,
                                                data: (0, _extends3.default)({
                                                    filename: filename
                                                }, respBody)
                                            });
                                        } else {
                                            console.log('respInfo', respInfo.statusCode);
                                            console.log('respBody', respBody);
                                            resolve({
                                                code: 200,
                                                data: (0, _extends3.default)({
                                                    filename: filename
                                                }, respBody)
                                            });
                                        }
                                    });
                                });
                            });

                            busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
                                console.log('Field [' + fieldname + ']: value: ' + _util2.default.inspect(val));
                                params[fieldname] = val;
                            });

                            req.pipe(busboy);
                        }));

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function uploadToQiniu(_x) {
        return _ref.apply(this, arguments);
    };
}();

var fileUpload = exports.fileUpload = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
        var result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return uploadToQiniu(ctx);

                    case 2:
                        result = _context2.sent;


                        ctx.body = result;

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function fileUpload(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var getPhotoes = exports.getPhotoes = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx) {
        var params, bucket, defaultOpts, options, mac, config, bucketManager, result;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        params = ctx.query;
                        bucket = params.bucket || 'hynal-com';
                        defaultOpts = {
                            limit: 10,
                            prefix: 'photo/'
                        };
                        options = (0, _assign2.default)(defaultOpts, params);
                        mac = new _qiniu2.default.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);
                        config = new _qiniu2.default.conf.Config();
                        //config.useHttpsDomain = true;

                        config.zone = _qiniu2.default.zone.Zone_z0;
                        bucketManager = new _qiniu2.default.rs.BucketManager(mac, config);
                        _context3.next = 10;
                        return new _promise2.default(function (resolve, reject) {
                            bucketManager.listPrefix(bucket, options, function (err, respBody, respInfo) {
                                if (err) {
                                    console.log(err);
                                    ctx.throw(500, err);
                                }
                                if (respInfo.statusCode == 200) {
                                    //如果这个nextMarker不为空，那么还有未列举完毕的文件列表，下次调用listPrefix的时候，
                                    //指定options里面的marker为这个值
                                    var nextMarker = respBody.marker;
                                    var commonPrefixes = respBody.commonPrefixes;
                                    resolve({
                                        code: 200,
                                        data: respBody
                                    });
                                } else {
                                    resolve({
                                        code: 400,
                                        data: respBody
                                    });
                                }
                            });
                        });

                    case 10:
                        result = _context3.sent;


                        ctx.body = result;

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function getPhotoes(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

var _qiniu = __webpack_require__(50);

var _qiniu2 = _interopRequireDefault(_qiniu);

var _busboy = __webpack_require__(51);

var _busboy2 = _interopRequireDefault(_busboy);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _util = __webpack_require__(52);

var _util2 = _interopRequireDefault(_util);

var _md = __webpack_require__(18);

var _md2 = _interopRequireDefault(_md);

var _photo_ctrl = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Config$upload = _config2.default.upload,
    ACCESS_KEY = _Config$upload.ACCESS_KEY,
    SECRET_KEY = _Config$upload.SECRET_KEY;


function getToken(bucket) {
    var _bucket = bucket || 'hynal-com';

    var options = {
        scope: _bucket,
        expires: 120 * 60 // 秒
    };

    var mac = new _qiniu2.default.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);
    var putPolicy = new _qiniu2.default.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);

    // return {
    //     token: uploadToken,
    //     expires: + new Date() + 120 * 60 * 1000
    // }

    return uploadToken;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPhotoes = exports.addPhoto = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var addPhoto = exports.addPhoto = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var postData, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        postData = ctx.request.body;
                        _context.next = 3;
                        return _photo_model2.default.create(postData).catch(function (err) {
                            console.log('[Server ERROR]', err);
                            ctx.throw(500, '服务器错误');
                        });

                    case 3:
                        result = _context.sent;


                        ctx.body = {
                            code: 200,
                            photoes: result
                        };

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function addPhoto(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getPhotoes = exports.getPhotoes = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
        var query, page, size, skip, photoes, allNum;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        query = ctx.query, page = +query.page || 0, size = +query.size || 10, skip = 0;


                        if (page !== 0) {
                            skip = size * (page - 1);
                        }

                        _context2.next = 4;
                        return _photo_model2.default.find().limit(size).skip(skip).catch(function (err) {
                            return ctx.throw(500, err);
                        });

                    case 4:
                        photoes = _context2.sent;
                        _context2.next = 7;
                        return _photo_model2.default.count().catch(function (err) {
                            return ctx.throw(500, err);
                        });

                    case 7:
                        allNum = _context2.sent;


                        ctx.body = {
                            code: 200,
                            photoes: photoes,
                            allPage: Math.ceil(allNum / size)
                        };

                    case 9:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getPhotoes(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var _photo_model = __webpack_require__(53);

var _photo_model2 = _interopRequireDefault(_photo_model);

var _qiniu_ctrl = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(13);

var _promise2 = _interopRequireDefault(_promise);

var _koa = __webpack_require__(29);

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = __webpack_require__(30);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _koaStatic = __webpack_require__(31);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaViews = __webpack_require__(32);

var _koaViews2 = _interopRequireDefault(_koaViews);

var _path = __webpack_require__(14);

var _path2 = _interopRequireDefault(_path);

var _webpack = __webpack_require__(11);

var _webpack2 = _interopRequireDefault(_webpack);

var _koaWebpackMiddleware = __webpack_require__(33);

var _webpackDev = __webpack_require__(34);

var _webpackDev2 = _interopRequireDefault(_webpackDev);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _router = __webpack_require__(40);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = new _koa2.default();
// import session from 'koa-session-minimal';
// import mySqlSession from 'koa-mysql-session';

var compile = (0, _webpack2.default)(_webpackDev2.default);

// // 配置存储session信息的mysql
// let store = new mySqlSession({
//     user: _Config.database.USERNAME,
//     password: _Config.database.PASSWORD,
//     database: _Config.database.DATABASE,
//     host: _Config.database.HOST,
// });

// // 存放sessionId的cookie配置
// let cookie = {
//     maxAge: '', // cookie有效时长
//     expires: '', // cookie失效时间
//     path: '', // 写cookie所在的路径
//     domain: '', // 写cookie所在的域名
//     httpOnly: '', // 是否只用于http请求中获取
//     overwrite: '', // 是否允许重写
//     secure: '',
//     sameSite: '',
//     signed: '',

// };

// // 使用session中间件
// App.use(session({
//     key: 'USER_SID',
//     store: store,
// }));

_mongoose2.default.Promise = _promise2.default;
_mongoose2.default.connect(_config2.default.mongodb.url, _config2.default.mongodbSecret);
_mongoose2.default.connection.on('error', console.error);

App.use((0, _koaWebpackMiddleware.devMiddleware)(compile, {
    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: _webpackDev2.default.output.publicPath,

    // options for formating the statistics
    stats: {
        colors: true
    }
}));

App.use((0, _koaWebpackMiddleware.hotMiddleware)(compile, {
    // log: console.log,
    // path: '/__webpack_hmr',
    // heartbeat: 10 * 1000
}));

// 配置服务端模板渲染引擎中间件
App.use((0, _koaViews2.default)(_path2.default.join(__dirname, '../output/views'), {
    extension: 'html',
    map: { html: 'ejs' }
}));

// 配置静态资源加载中间件
App.use((0, _koaStatic2.default)(_path2.default.join(__dirname, '../output/')));

// 使用ctx.body解析中间件
App.use((0, _koaBodyparser2.default)());

// 路由
App.use(_router2.default.routes()).use(_router2.default.allowedMethods());

// 404
App.use(pageNotFound());

App.listen(_config2.default.port, function () {
    console.log('\n[node-koa-test] start-quick is starting at port 8080');
});

function pageNotFound() {
    var _this = this;

    return function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
            var response;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            response = ctx.response;

                            if (response.status == 404) {
                                ctx.render('404');
                            }

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("koa-views");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("koa-webpack-middleware");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(35);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var merge = __webpack_require__(36);
var webpack = __webpack_require__(11);
var baseWebpackConfig = __webpack_require__(37);
var serverWebpackConfig = __webpack_require__(66);

module.exports = [merge(baseWebpackConfig, {
    devtool: 'source-map',
    plugins: [new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: (0, _stringify2.default)('development')
        }
    }), new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
}), serverWebpackConfig];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var webpack = __webpack_require__(11);
var path = __webpack_require__(14);
var ExtractTextPlugin = __webpack_require__(38);
var sourcePath = path.join(__dirname, '../web');
var outputPath = path.join(__dirname, '../output/dist/');

module.exports = {
    context: sourcePath,
    entry: {
        admin: ['eventsource-polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', '../web/page/admin/index.js'],
        blog: ['eventsource-polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', '../web/page/blog/index.js'],
        vendor: ['react', 'react-dom', 'axios', 'classnames', 'antd']
    },
    output: {
        path: outputPath,
        publicPath: '/output/dist/',
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react-hmre', 'react'],
                    cacheDirectory: true
                }
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader']
            })
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /.(gif|jpg|png)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[name].[hash:8].[ext]'
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: 'font/[name].[hash:8].[ext]'
                }
            }]
        }, {
            test: /*require.resolve*/(39),
            use: [{
                loader: 'expose-loader',
                options: '$'
            }, {
                loader: 'expose-loader',
                options: 'Zepto'
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [sourcePath, 'node_modules'],
        alias: {
            Components: path.join(__dirname, '../web/components/')
        }
    },
    plugins: [new ExtractTextPlugin('css/[name].css'), new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor'],
        minChunks: Infinity,
        filename: 'js/[name].js'
    })]
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = __webpack_require__(12);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _api = __webpack_require__(41);

var _api2 = _interopRequireDefault(_api);

var _page = __webpack_require__(54);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = new _koaRouter2.default();

Router.use('/api', _api2.default.routes(), _api2.default.allowedMethods());
Router.use('/', _page2.default.routes());

// module.exports = Router;
exports.default = Router;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaRouter = __webpack_require__(12);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _verify = __webpack_require__(16);

var _user_ctr = __webpack_require__(42);

var _article_ctr = __webpack_require__(19);

var _common_ctr = __webpack_require__(45);

var _tags_ctr = __webpack_require__(21);

var _qiniu_ctrl = __webpack_require__(22);

var _photo_ctrl = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = new _koaRouter2.default();

var _Api = Router.get('/signout', function (ctx) {
    ctx.session = null;
    ctx.body = {
        code: 200,
        message: '登出成功'
    };
}).get('/get/article', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return getArticles(ctx.request.query);

                    case 2:
                        result = _context.sent;


                        ctx.body = result;

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}()).get("/get/alltags", _tags_ctr.getAllTags).get("/get/all/articles", _article_ctr.getAllArticles).get('/get/article/:id', _article_ctr.getArticle).get("/one", _common_ctr.getOneContent).get("/get/photoes", _photo_ctrl.getPhotoes).delete('/article/:id', _verify.apiVerify, _article_ctr.deleteArticle).post('/singup', _user_ctr.singUp).post('/signin', _user_ctr.signIn).post('/create/tag', _verify.apiVerify, _tags_ctr.createTag).post('/create/article', _verify.apiVerify, _article_ctr.createArticle).post('/update/article/:id', _verify.apiVerify, _article_ctr.modifyArticle).post('/fileupload', _verify.apiVerify, _qiniu_ctrl.fileUpload).post('/add/photo', _verify.apiVerify, _photo_ctrl.addPhoto);

// module.exports = _Api;
exports.default = _Api;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signIn = exports.singUp = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * 注册操作
 * @param   {obejct} ctx 上下文对象
 */

var singUp = exports.singUp = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var formData, existOne, newUser;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        formData = ctx.request.body;
                        _context.next = 3;
                        return _user_model2.default.find({
                            $or: [{
                                username: formData.userName
                            }, {
                                email: formData.email
                            }]
                        }).exec();

                    case 3:
                        existOne = _context.sent;

                        if (!(existOne.length == 0)) {
                            _context.next = 10;
                            break;
                        }

                        newUser = new _user_model2.default({
                            name: '',
                            username: formData.userName,
                            password: (0, _md2.default)(formData.password).toUpperCase(),
                            email: formData.email,
                            avatar: '',
                            createTime: new Date()
                        });
                        _context.next = 8;
                        return newUser.save().then(function (res) {
                            ctx.body = {
                                code: 200,
                                message: '注册成功'
                            };
                        }).catch(function (err) {
                            ctx.throw(500, err);
                        });

                    case 8:
                        _context.next = 11;
                        break;

                    case 10:
                        ctx.body = {
                            code: 501,
                            message: '用户名或邮箱已注册'
                        };

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function singUp(_x) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * 登录操作
 * @param  {obejct} ctx 上下文对象
 */


var signIn = exports.signIn = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
        var formData, user, exp, token;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        formData = ctx.request.body;
                        _context2.next = 3;
                        return _user_model2.default.findOne({
                            username: formData.userName
                        }).exec();

                    case 3:
                        user = _context2.sent;


                        if (user) {
                            if (formData.password === user.password) {
                                exp = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
                                token = _jsonwebtoken2.default.sign({
                                    uid: user._id,
                                    name: user.name,
                                    exp: exp
                                }, _config2.default.jwt.secret);


                                ctx.cookies.set('access_token', token, {
                                    maxAge: 24 * 60 * 60 * 1000,
                                    expires: exp,
                                    httpOnly: false, // 是否只用于http请求中获取
                                    overwrite: false // 是否允许重写
                                });

                                ctx.body = {
                                    code: 200,
                                    uid: user._id,
                                    name: user.name,
                                    token: token
                                };
                            } else {
                                ctx.body = {
                                    code: 400,
                                    message: '密码错误'
                                };
                            }
                        } else {
                            ctx.body = {
                                code: 404,
                                message: '用户不存在'
                            };
                        }

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function signIn(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var _user_model = __webpack_require__(43);

var _user_model2 = _interopRequireDefault(_user_model);

var _md = __webpack_require__(18);

var _md2 = _interopRequireDefault(_md);

var _jsonwebtoken = __webpack_require__(17);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    avatar: String,
    email: String,
    createTime: String
});

module.exports = _mongoose2.default.model('User', UserSchema);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = __webpack_require__(20);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');

var Schema = _mongoose2.default.Schema;

var ArticleSchema = new Schema({
    title: String,
    content: String,
    htmlContent: String,
    abstract: String,
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    publish: {
        type: Boolean,
        default: false
    },
    createTime: {
        type: Date
    },
    lastEditTime: {
        type: Date,
        default: Date.now
    }
});

ArticleSchema.set('toJSON', { getters: true, virtuals: true });
ArticleSchema.set('toObject', { getters: true, virtuals: true });

ArticleSchema.path('createTime').get(function (v) {
    return (0, _moment2.default)(v).format('lll');
});
ArticleSchema.path('lastEditTime').get(function (v) {
    return (0, _moment2.default)(v).format('lll');
});

module.exports = _mongoose2.default.model('Article', ArticleSchema);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOneContent = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getOneContent = exports.getOneContent = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        result = {
                            code: 200,
                            message: '',
                            data: []
                        };
                        _context.next = 3;
                        return _superagent2.default.get("http://wufazhuce.com").then(function (res) {
                            if (!res) {
                                result = {
                                    code: 500,
                                    message: err,
                                    data: []
                                };
                            }
                            var $ = _cheerio2.default.load(res.text);

                            var data = [];
                            $('#carousel-one .item').each(function (idx, element) {
                                var $element = $(element);

                                data.push({
                                    imgUrl: $element.find('.fp-one-imagen').attr('src'),
                                    text: $element.find('.fp-one-cita a').text()
                                });
                            });

                            result['data'] = data;
                        });

                    case 3:

                        ctx.body = result;

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getOneContent(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _superagent = __webpack_require__(46);

var _superagent2 = _interopRequireDefault(_superagent);

var _cheerio = __webpack_require__(47);

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var TagSchema = new Schema({
    name: {
        type: String,
        default: ''
    }
}, {
    toJSON: {
        getters: true,
        virtuals: true
    },
    toObject: {
        getters: true,
        virtuals: true
    }
});

module.exports = _mongoose2.default.model('Tag', TagSchema);

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("qiniu");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("busboy");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = __webpack_require__(20);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');

var Schema = _mongoose2.default.Schema;
var PhotoSchema = new Schema({
    name: String,
    key: String,
    desc: String,
    like: {
        type: Number,
        default: 0
    },
    createTime: {
        type: Date,
        default: Date.now
    }
});

PhotoSchema.path('createTime').get(function (v) {
    return (0, _moment2.default)(v).format('lll');
});

module.exports = _mongoose2.default.model('Photo', PhotoSchema);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaRouter = __webpack_require__(12);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _fs = __webpack_require__(15);

var _fs2 = _interopRequireDefault(_fs);

var _verify = __webpack_require__(16);

var _tags_ctr = __webpack_require__(21);

var _article_ctr = __webpack_require__(19);

var _server = __webpack_require__(55);

var _server2 = _interopRequireDefault(_server);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(56);

var _App = __webpack_require__(57);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = new _koaRouter2.default();

var render = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ServerData, ctx) {
        var html;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        html = _server2.default.renderToString(_react2.default.createElement(
                            _reactRouter.StaticRouter,
                            { context: {}, location: ctx.request.url },
                            _react2.default.createElement(_App2.default, { InitData: ServerData })
                        ));
                        _context.next = 3;
                        return ctx.render('blog', {
                            html: html,
                            ServerData: ServerData
                        });

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function render(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _Page = Router.get('/', function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
        var tags, _ref3, articles, allPage, ServerData, html;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _tags_ctr.getAllTags)(ctx);

                    case 2:
                        tags = _context2.sent;
                        _context2.next = 5;
                        return (0, _article_ctr.getAllArticles)(ctx);

                    case 5:
                        _ref3 = _context2.sent;
                        articles = _ref3.articles;
                        allPage = _ref3.allPage;
                        ServerData = { tags: tags, articles: articles, allPage: allPage, curTagId: ctx.query.tag };
                        html = _server2.default.renderToString(_react2.default.createElement(
                            _reactRouter.StaticRouter,
                            { context: {}, location: ctx.request.url },
                            _react2.default.createElement(_App2.default, { InitData: ServerData })
                        ));
                        _context2.next = 12;
                        return ctx.render('blog', {
                            html: html,
                            ServerData: ServerData
                        });

                    case 12:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}()).get('article/:id', function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx, next) {
        var ServerData, html;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:

                        if (!ctx.params.id) ctx.redirect('/');

                        _context3.next = 3;
                        return (0, _article_ctr.getArticle)(ctx);

                    case 3:
                        ServerData = _context3.sent;
                        html = _server2.default.renderToString(_react2.default.createElement(
                            _reactRouter.StaticRouter,
                            { context: {}, location: ctx.request.url },
                            _react2.default.createElement(_App2.default, { InitData: ServerData })
                        ));
                        _context3.next = 7;
                        return ctx.render('blog', {
                            html: html,
                            ServerData: ServerData
                        });

                    case 7:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
    };
}()).get('admin', _verify.pageVerify, function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(ctx, next) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return ctx.render('admin', {
                            title: '博客后台'
                        });

                    case 2:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function (_x7, _x8) {
        return _ref5.apply(this, arguments);
    };
}()).get('admin/*', _verify.pageVerify, function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ctx, next) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return ctx.render('admin', {
                            title: '博客后台'
                        });

                    case 2:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function (_x9, _x10) {
        return _ref6.apply(this, arguments);
    };
}());

// module.exports = _Page;
exports.default = _Page;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _create = __webpack_require__(58);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _Articles = __webpack_require__(59);

var _Articles2 = _interopRequireDefault(_Articles);

var _Article = __webpack_require__(60);

var _Article2 = _interopRequireDefault(_Article);

var _Header = __webpack_require__(61);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(65);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FadingRoute = function FadingRoute(_ref) {
    var Component = _ref.component,
        path = _ref.path,
        other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'path']);
    return _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: path, render: function render(props) {
            return _react2.default.createElement(Component, other);
        } });
};

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

        _this.getQuery = function (key) {
            var search = window.location.search,
                ret = (0, _create2.default)(null);

            if (typeof search !== 'string') {
                return key ? null : ret;
            }

            search = search.trim().replace(/^[?#&]/, '');

            if (!search) {
                return key ? null : ret;
            }

            search.split('&').forEach(function (param) {
                var parts = param.replace(/\+/g, ' ').split('=');
                var key = parts.shift();
                var val = parts.length > 0 ? parts.join('=') : undefined;

                val = val === undefined ? null : decodeURIComponent(val);

                ret[decodeURIComponent(key)] = val;
            });

            return key ? ret[key] : ret;
        };

        _this.state = {
            minHeight: '100%'
        };
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                minHeight: window.document && document.documentElement.clientHeight
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var minHeight = this.state.minHeight;
            var InitData = this.props.InitData;

            return _react2.default.createElement(
                'div',
                { className: 'blog-layout', style: { minHeight: minHeight } },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(FadingRoute, (0, _extends3.default)({ path: '/', component: _Articles2.default }, InitData, { getQuery: this.getQuery })),
                _react2.default.createElement(FadingRoute, (0, _extends3.default)({ path: '/article/:id', component: _Article2.default }, InitData, { getQuery: this.getQuery })),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/create");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

var _classnames = __webpack_require__(27);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Articles = function (_Component) {
    (0, _inherits3.default)(Articles, _Component);

    function Articles(props) {
        (0, _classCallCheck3.default)(this, Articles);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Articles.__proto__ || (0, _getPrototypeOf2.default)(Articles)).call(this, props));

        _this.getArticles = function (tagid) {
            if (tagid != _this.state.curTagId) _axios2.default.get('/api/get/all/articles', {
                params: {
                    tag: tagid || ''
                }
            }).then(function (res) {
                var resData = res.data;
                _this.setState({
                    articles: resData.articles,
                    curTagId: tagid
                });
            });
        };

        var articles = props.articles,
            tags = props.tags,
            curTagId = props.curTagId,
            allPage = props.allPage;

        _this.state = {
            articles: articles,
            tags: tags,
            curTagId: curTagId,
            allPage: allPage
        };
        return _this;
    }

    (0, _createClass3.default)(Articles, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                articles = _state.articles,
                tags = _state.tags,
                curTagId = _state.curTagId;

            return _react2.default.createElement(
                'div',
                { className: 'blog-articles-layout' },
                _react2.default.createElement(
                    'div',
                    { className: 'one' },
                    _react2.default.createElement('img', { src: 'http://image.wufazhuce.com/FoBEubfSGAroMoMdI_jx0nH0gh7y' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'text' },
                        '\u957F\u5927\u4E86\u4E00\u4E9B\u7684\u6211\u4EEC\uFF0C\u5F00\u59CB\u61C2\u5F97\u4E0D\u80FD\u518D\u8FD9\u6837\u8F7B\u6613\u54ED\u6CE3\uFF0C\u4E5F\u62E5\u6709\u4E86\u66F4\u590D\u6742\u7684\u60C5\u611F\uFF0C\u5B66\u7740\u5728\u5404\u79CD\u8BF4\u4E0D\u6E05\u539F\u56E0\u7684\u884C\u4E3A\u91CC\u4F5C\u51FA\u6289\u62E9\u3002\u90A3\u4E00\u5929\uFF0C\u6211\u4EEC\u4E5F\u9677\u5165\u4E86\u9009\u62E9\u7684\u56F0\u5883\uFF0C\u4F46\u6211\u4EEC\u5BF9\u8FD9\u79CD\u8FF7\u5931\u6BEB\u65E0\u5BDF\u89C9\u3002'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'blog-tags' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: { pathname: '/' }, onClick: function onClick() {
                                _this2.getArticles();
                            }, className: (0, _classnames2.default)("tag", { 'tag-active': !curTagId }) },
                        '\u6240\u6709\u6587\u7AE0'
                    ),
                    tags && tags.length ? tags.map(function (tag) {
                        return _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: { pathname: '/', search: '?tag=' + tag.id }, onClick: function onClick() {
                                    _this2.getArticles(tag.id);
                                }, className: (0, _classnames2.default)("tag", { 'tag-active': curTagId == tag.id }), key: tag.id },
                            tag.name
                        );
                    }) : null
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'blog-articles-list' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        articles && articles.length ? articles.map(function (article, index) {
                            return _react2.default.createElement(
                                'li',
                                { className: 'article-tiem', key: article.id },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/article/' + article.id },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'article-num' },
                                        index + 1
                                    ),
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        article.title
                                    )
                                )
                            );
                        }) : null
                    )
                )
            );
        }
    }]);
    return Articles;
}(_react.Component);

exports.default = Articles;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function (_Component) {
    (0, _inherits3.default)(Article, _Component);

    function Article(props) {
        (0, _classCallCheck3.default)(this, Article);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this, props));

        var article = props.article;

        _this.state = {
            article: article
        };
        console.log('Article', _this.state);
        return _this;
    }

    (0, _createClass3.default)(Article, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (!this.state.article) {
                _axios2.default.get('/api/get/article/' + this.props.param.id).then(function (res) {
                    var resData = res.data;
                    _this2.setState({
                        articles: resData.article
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'blog-article' },
                _react2.default.createElement(
                    'article',
                    null,
                    _react2.default.createElement(
                        'h2',
                        { 'class': 'article-title' },
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'em',
                                null,
                                article.title
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'article-desc' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u53D1\u5E03\u65F6\u95F4: ',
                            article.createTime
                        ),
                        article && article.tags.length ? _react2.default.createElement(
                            'span',
                            { className: 'ml' },
                            'article.tags.map( tag => tag.name + \' \')'
                        ) : null
                    ),
                    _react2.default.createElement('div', { className: 'article-content' })
                )
            );
        }
    }]);
    return Article;
}(_react.Component);

exports.default = Article;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(62);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
    return _react2.default.createElement(
        'header',
        { className: 'blog-header clearfix' },
        _react2.default.createElement(
            'span',
            { className: 'logo' },
            '\u6D6E\u751F\u8BB0'
        ),
        _react2.default.createElement(_Icon2.default, { type: 'menu', className: 'menu fr' })
    );
};

exports.default = Header;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(63);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(64);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(27);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Icons
 *
 */
var Icon = function (_React$Component) {
    (0, _inherits3.default)(Icon, _React$Component);

    function Icon() {
        (0, _classCallCheck3.default)(this, Icon);
        return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
    }

    (0, _createClass3.default)(Icon, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                type = _props.type,
                size = _props.size,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['type', 'size', 'className']);


            var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, 'icon-' + type, type !== 'loading'), (0, _defineProperty3.default)(_classNames, 'icon-small', size === 'small'), (0, _defineProperty3.default)(_classNames, 'icon-large', size === 'large'), (0, _defineProperty3.default)(_classNames, 'icon-spin', type === 'loading'), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

            return _react2.default.createElement('i', (0, _extends3.default)({}, others, { className: cls }));
        }
    }]);
    return Icon;
}(_react2.default.Component);

Icon.propTypes = {

    type: _propTypes2.default.string,
    size: _propTypes2.default.string
};
Icon.defaultProps = {
    type: 'success',
    size: 'small'
};
exports.default = Icon;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
    return _react2.default.createElement(
        'footer',
        { className: 'blog-footer tc' },
        '2017 Fushengji, All rights reserved'
    );
};

exports.default = Footer;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nodeExternals = __webpack_require__(67);
var path = __webpack_require__(14);
var sourcePath = path.join(__dirname, '../server');
var outputPath = path.join(__dirname, '../output/dist/');

module.exports = {
    context: sourcePath,
    entry: '../server/index.js',
    output: {
        path: outputPath,
        filename: 'js/server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    externals: nodeExternals(),
    devtool: 'source-map'
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map