(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./page/blog/Books/index.js":
/*!**********************************!*\
  !*** ./page/blog/Books/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _index = __webpack_require__(/*! ../node_modules/redbox-react/lib/index.js */ "../node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../node_modules/react-transform-catch-errors/lib/index.js */ "../node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ../node_modules/react-transform-hmr/lib/index.js */ "../node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _class, _temp, _initialiseProps;

var _reactDom = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

var _axios = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Books: {
        displayName: 'Books'
    }
};

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Books/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Books/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2(_UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Books = _wrapComponent('Books')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(Books, _Component);

    function Books(props) {
        (0, _classCallCheck3.default)(this, Books);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Books.__proto__ || (0, _getPrototypeOf2.default)(Books)).call(this, props));

        _initialiseProps.call(_this);

        var books = props.books,
            allNum = props.allNum,
            page = props.page,
            allPage = props.allPage,
            banner = props.banner;

        _this.state = {
            books: books,
            allNum: allNum,
            page: page,
            allPage: allPage,
            banner: banner,
            isLoading: false
        };
        return _this;
    }

    (0, _createClass3.default)(Books, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.bookLayoutDom = _reactDom2.default.findDOMNode(this);
            this.headerDom = _reactDom2.default.findDOMNode(this.refs.bookHeader);
            this.blogNavDom = document.getElementById('IdNav');

            window.addEventListener("scroll", this.onscroll, false);
            var books = this.state.books;


            if (!books.length) {
                this.getBooks(1);
                this.getBanners();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener("scroll", this.onscroll);
        }
    }, {
        key: 'getBanners',
        value: function getBanners() {
            var _this2 = this;

            _axios2.default.get('/api/get/banners', {
                params: {
                    page: 'BOOK'
                }
            }).then(function (res) {
                var resData = res.data;
                _this2.setState({
                    banner: resData.banners[0]
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                books = _state.books,
                isLoading = _state.isLoading,
                banner = _state.banner;

            return _react3.default.createElement(
                'div',
                { className: 'blog-books-layout clearfix ' },
                _react3.default.createElement(
                    'div',
                    { className: 'blog-books-header', ref: 'bookHeader' },
                    _react3.default.createElement('img', { src: '//cdn.liayal.com/image/books_banner.jpg', alt: '' }),
                    _react3.default.createElement(
                        'div',
                        { className: 'text-wrap' },
                        _react3.default.createElement(
                            'p',
                            null,
                            _react3.default.createElement(
                                'span',
                                { style: { background: "#B6BABD" } },
                                banner.text[0]
                            ),
                            banner.text[1]
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: 'tr author' },
                            _react3.default.createElement(
                                'a',
                                { href: banner.href || "javascript:void(0);", target: '_blank' },
                                '\u2014\u2014 \u300A',
                                banner.author,
                                '\u300B'
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'middle-text tc ' },
                    _react3.default.createElement(
                        'h2',
                        null,
                        '\u6742\u800C\u4E0D\u7CBE\u7684\u8BFB\u8005'
                    ),
                    _react3.default.createElement(
                        'p',
                        null,
                        '\u5F53\u6211\u9700\u8981\u5B89\u9759\u7684\u65F6\u5019\uFF0C\u6211\u60F3\u8981\u4E00\u672C\u4E66\uFF1B\u5F53\u6211\u5B89\u9759\u7684\u65F6\u5019\uFF0C\u6211\u66F4\u60F3\u8981\u4E00\u672C\u4E66\u3002\u4E0D\u559C\u6B22\u4EFB\u4F55\u9999\u6C34\u5473\uFF0C\u5374\u60DF\u72EC\u559C\u6B22\u4E66\u9999\u5473\u3002\u4E00\u672C\u4E66\uFF0C\u5C31\u662F\u4E00\u4E2A\u4E16\u754C\u3002\u8EB2\u8FDB\u8FD9\u4E2A\u4E16\u754C\u4E4B\u4E2D\uFF0C\u5C31\u53EF\u4EE5\u548C\u5F53\u4E0B\u7684\u4E00\u5207\u70E6\u607C\u4E0E\u7410\u788E\u9694\u79BB\u5F00\u6765\u3002'
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'books-list clearfix ' },
                    books.length ? books.map(function (book) {
                        return _react3.default.createElement(
                            'div',
                            { className: 'blog-books-item', key: book.id },
                            _react3.default.createElement(
                                'div',
                                { className: 'books-wrap clearfix' },
                                _react3.default.createElement(
                                    'div',
                                    { className: 'cover' },
                                    _react3.default.createElement('img', { src: book.img, alt: '' })
                                ),
                                _react3.default.createElement(
                                    'div',
                                    { className: 'info' },
                                    _react3.default.createElement(
                                        'h4',
                                        { className: 'title' },
                                        book.title
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        { className: 'author' },
                                        book.author
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        { className: 'intro' },
                                        book.desc
                                    ),
                                    book.href ? _react3.default.createElement(
                                        'div',
                                        { className: 'btn' },
                                        _react3.default.createElement(
                                            'a',
                                            { href: book.href, className: 'read-btn' },
                                            '\u8BD5\u8BFB'
                                        )
                                    ) : null
                                ),
                                book.isReading ? _react3.default.createElement(
                                    'span',
                                    { className: 'reading' },
                                    'Reading'
                                ) : null
                            )
                        );
                    }) : null
                ),
                isLoading ? _react3.default.createElement(
                    'p',
                    { className: 'loading' },
                    '\u52A0\u8F7D\u4E2D...'
                ) : null
            );
        }
    }]);
    return Books;
}(_react2.Component), _class.defaultProps = {
    books: [],
    page: 0,
    allPage: 0,
    banner: {
        text: ['这个世界上的每样东西都生死未定，都充满了风险，那些不接受风险的人，那些不了解命运的人，在角落里日渐衰落。', '我忽然明白为什么我没能拥有尼诺，而莉拉能够拥有他。我不能追随那些真实的感情，我无法使自己打破陈规旧矩，我没有莉拉那么强烈的情感，她可以不顾一切去享受那一天一夜。'],
        author: '新名字的故事'
    }
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onscroll = function (e) {
        e = e || window.event;
        var _scrollTop = window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop || 0;

        var _state2 = _this3.state,
            page = _state2.page,
            allPage = _state2.allPage;

        if (_scrollTop + document.documentElement.clientHeight > _this3.bookLayoutDom.offsetHeight - 200) {
            page < allPage && _this3.getBooks(page + 1);
        }
    };

    this.getBooks = function (_page) {
        if (_this3.state.isLoading) return;
        _this3.setState({
            isLoading: true
        });
        _axios2.default.get('/api/get/books', {
            params: {
                page: _page
            }
        }).then(function (res) {
            var resData = res.data;
            _this3.setState(function (preState) {
                var books = preState.books.concat(resData.books);
                return {
                    books: books,
                    allNum: resData.allNum,
                    page: resData.page,
                    allPage: resData.allPage,
                    isLoading: false
                };
            });
        });
    };
}, _temp));

exports.default = Books;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=10.61527456.js.map