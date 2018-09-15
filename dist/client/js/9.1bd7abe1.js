(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "../node_modules/fbjs/lib/emptyFunction.js":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/fbjs/lib/emptyFunction.js from dll-reference react_fe0156c9 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react_fe0156c9 */ "dll-reference react_fe0156c9"))(33);

/***/ }),

/***/ "../node_modules/fbjs/lib/emptyObject.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/fbjs/lib/emptyObject.js from dll-reference react_fe0156c9 ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react_fe0156c9 */ "dll-reference react_fe0156c9"))(102);

/***/ }),

/***/ "../node_modules/fbjs/lib/invariant.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/fbjs/lib/invariant.js from dll-reference react_fe0156c9 ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react_fe0156c9 */ "dll-reference react_fe0156c9"))(61);

/***/ }),

/***/ "../node_modules/moment/moment.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/moment/moment.js from dll-reference common_fe0156c9 ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference common_fe0156c9 */ "dll-reference common_fe0156c9"))(57);

/***/ }),

/***/ "./page/blog/Travel/index.js":
/*!***********************************!*\
  !*** ./page/blog/Travel/index.js ***!
  \***********************************/
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

var _reactMasonryComponent = __webpack_require__(/*! react-masonry-component */ "../node_modules/react-masonry-component/lib/index.js");

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _axios = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Travel: {
        displayName: 'Travel'
    }
};

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Travel/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Travel/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2(_UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Travel = _wrapComponent('Travel')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(Travel, _Component);

    function Travel(props) {
        (0, _classCallCheck3.default)(this, Travel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Travel.__proto__ || (0, _getPrototypeOf2.default)(Travel)).call(this, props));

        _initialiseProps.call(_this);

        var travels = props.travels,
            allNum = props.allNum,
            page = props.page,
            allPage = props.allPage;

        _this.state = {
            travels: travels,
            allNum: allNum,
            page: page,
            allPage: allPage,
            isLoading: false
        };
        return _this;
    }

    (0, _createClass3.default)(Travel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.headerDom = _reactDom2.default.findDOMNode(this.refs.travelHeader);
            this.traveLayoutDom = _reactDom2.default.findDOMNode(this);
            this.blogNavDom = document.getElementById('IdNav');

            this.blogNavDom.classList.add('blog-travel-header');

            window.addEventListener("scroll", this.onscroll, false);
            var travels = this.state.travels;


            if (!travels.length) {
                this.getArticles(1);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.blogNavDom.classList.remove('blog-travel-header');
            window.removeEventListener("scroll", this.onscroll);
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                travels = _state.travels,
                isLoading = _state.isLoading;

            return _react3.default.createElement(
                'div',
                { className: 'blog-travel-layout ' },
                _react3.default.createElement(
                    'div',
                    { className: 'traverl-header header-banner', ref: 'travelHeader', style: { backgroundImage: 'url(' + (travels[0] && travels[0].banner ? travels[0].banner : "//cdn.liayal.com/12027196.jpg") + ')' } },
                    _react3.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/article/' + (travels[0] && travels[0].id) },
                        _react3.default.createElement('img', { src: travels[0] && travels[0].banner ? travels[0].banner : "//cdn.liayal.com/12027196.jpg", alt: '', hidden: true }),
                        travels[0] ? _react3.default.createElement(
                            'div',
                            { className: 'aticle-info' },
                            _react3.default.createElement(
                                'p',
                                { className: 'small' },
                                _react3.default.createElement(
                                    'span',
                                    null,
                                    '\u6E38\u8BB0'
                                )
                            ),
                            _react3.default.createElement(
                                'h2',
                                null,
                                travels[0] ? travels[0].title : ''
                            ),
                            _react3.default.createElement(
                                'p',
                                { className: 'sub-title' },
                                travels[0] ? travels[0].abstract : ''
                            )
                        ) : null
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'middle-text tc ' },
                    _react3.default.createElement(
                        'h2',
                        null,
                        '\u6211\u4ECE\u65C5\u884C\u4E2D\u83B7\u5F97\u4E50\u8DA3'
                    ),
                    _react3.default.createElement(
                        'p',
                        null,
                        '\u4E00\u4E2A\u4EBA\uFF0C\u4E00\u6761\u8DEF\uFF0C\u4EBA\u5728\u9014\u4E2D\uFF0C\u5FC3\u968F\u666F\u52A8\uFF0C\u4ECE\u8D77\u70B9\uFF0C\u5230\u5C3D\u5934\uFF0C\u4E5F\u8BB8\u5FEB\u4E50\uFF0C\u6216\u6709\u65F6\u5B64\u72EC\uFF0C\u5982\u679C\u5FC3\u5728\u8FDC\u65B9\uFF0C\u53EA\u9700\u52C7\u6562\u524D\u884C\uFF0C\u68A6\u60F3\u81EA\u4F1A\u5F15\u8DEF\uFF0C\u6709\u591A\u8FDC\uFF0C\u8D70\u591A\u8FDC\uFF0C\u628A\u8DB3\u8FF9\u8FDE\u6210\u751F\u547D\u7EBF\u3002'
                    )
                ),
                _react3.default.createElement(
                    _reactMasonryComponent2.default,
                    { className: 'travel-article-list ' },
                    travels.length ? travels.map(function (article, index) {
                        return index != 0 ? _react3.default.createElement(
                            'div',
                            { className: 'article-item', key: article.id },
                            _react3.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/article/' + article.id },
                                _react3.default.createElement('img', { src: article.banner || '//cdn.liayal.com/14506926.jpg', alt: '' }),
                                _react3.default.createElement(
                                    'p',
                                    { className: 'article-title' },
                                    article.title,
                                    ' ',
                                    _react3.default.createElement(
                                        'small',
                                        null,
                                        (0, _moment2.default)(article.createTime).format('MM月DD日')
                                    )
                                )
                            )
                        ) : null;
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
    return Travel;
}(_react2.Component), _class.defaultProps = {
    travels: [],
    page: 0,
    allPage: 0
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onscroll = function (e) {
        e = e || window.event;
        var _scrollTop = window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop || 0;;
        if (_scrollTop >= _this2.headerDom.offsetHeight - _this2.blogNavDom.offsetHeight) {
            _this2.blogNavDom.classList.remove('blog-travel-header');
        } else {
            _this2.blogNavDom.classList.add('blog-travel-header');
        }

        var _state2 = _this2.state,
            page = _state2.page,
            allPage = _state2.allPage;

        if (_scrollTop + document.documentElement.clientHeight > _this2.traveLayoutDom.offsetHeight - 100) {
            page < allPage && _this2.getArticles(page + 1);
        }
    };

    this.getArticles = function (_page) {
        if (_this2.state.isLoading) return;
        _this2.setState({
            isLoading: true
        });
        _axios2.default.get('/api/get/publish/articles', {
            params: {
                category: 'TRAVEL',
                page: _page
            }
        }).then(function (res) {
            var resData = res.data;
            _this2.setState(function (preState) {
                var articles = preState.travels.concat(resData.articles);
                return {
                    travels: articles,
                    allNum: resData.allNum,
                    page: resData.page,
                    allPage: resData.allPage,
                    isLoading: false
                };
            });
        });
    };
}, _temp));

exports.default = Travel;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=9.1bd7abe1.js.map