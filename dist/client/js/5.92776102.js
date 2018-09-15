(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!******************************************************************************************************************************!*\
  !*** delegated ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js from dll-reference react_54951f66 ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react_54951f66 */ "dll-reference react_54951f66"))(102);

/***/ }),

/***/ "../node_modules/node-libs-browser/node_modules/process/browser.js":
/*!*********************************************************************************************************************!*\
  !*** delegated ./node_modules/node-libs-browser/node_modules/process/browser.js from dll-reference common_54951f66 ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference common_54951f66 */ "dll-reference common_54951f66"))(121);

/***/ }),

/***/ "../node_modules/warning/browser.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/warning/browser.js from dll-reference react_54951f66 ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react_54951f66 */ "dll-reference react_54951f66"))(4);

/***/ }),

/***/ "./page/blog/Articles/index.js":
/*!*************************************!*\
  !*** ./page/blog/Articles/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pagination = __webpack_require__(/*! antd/lib/pagination */ "../node_modules/antd/lib/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

var _axios = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _classnames = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Articles: {
        displayName: 'Articles'
    }
};

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Articles/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Articles/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2(_UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var PageSize = 20;

var Articles = _wrapComponent('Articles')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(Articles, _Component);

    function Articles(props) {
        (0, _classCallCheck3.default)(this, Articles);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Articles.__proto__ || (0, _getPrototypeOf2.default)(Articles)).call(this, props));

        _initialiseProps.call(_this);

        var articles = props.articles,
            tags = props.tags,
            curTagId = props.curTagId,
            allNum = props.allNum,
            page = props.page,
            banners = props.banners,
            allPage = props.allPage;

        _this.state = {
            articles: articles,
            tags: tags,
            curTagId: curTagId,
            allNum: allNum,
            page: page,
            banners: banners,
            allPage: allPage
        };
        return _this;
    }

    (0, _createClass3.default)(Articles, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _state = this.state,
                articles = _state.articles,
                tags = _state.tags,
                banners = _state.banners;


            if (!articles.length || !tags.length || !banners.length) {
                this.getArticles(1, null);
                this.getAllTags();
                this.getBanners();
            }
        }
    }, {
        key: 'getBanners',
        value: function getBanners() {
            var _this2 = this;

            _axios2.default.get('/api/get/banners', {
                params: {
                    page: 'HOME'
                }
            }).then(function (res) {
                var resData = res.data;
                _this2.setState({
                    banners: resData.banners
                });
            });
        }
    }, {
        key: 'showBanners',
        value: function showBanners() {
            var banners = this.state.banners;

            var bannerDom = [];

            if (banners.length == 1) return _react3.default.createElement(
                'div',
                { className: 'banners' },
                _react3.default.createElement(
                    'div',
                    { className: 'banner-item', style: { backgroundImage: 'url(' + banners[0].url + ')' } },
                    _react3.default.createElement(
                        'a',
                        { href: banners[0].href ? banners[0].href : "javascript:void(0);" },
                        _react3.default.createElement(
                            'div',
                            { className: 'text' },
                            _react3.default.createElement(
                                'p',
                                { className: 'ellipsis' },
                                banners[0].text
                            )
                        )
                    )
                )
            );

            if (banners.length == 2) return _react3.default.createElement(
                'div',
                { className: 'banners banners-two clearfix' },
                _react3.default.createElement(
                    'div',
                    { className: 'banner-item fl', style: { backgroundImage: 'url(' + banners[0].url + ')' } },
                    _react3.default.createElement(
                        'a',
                        { href: banners[0].href ? banners[0].href : "javascript:void(0);" },
                        _react3.default.createElement('img', { src: banners[0].url, hidden: true }),
                        _react3.default.createElement(
                            'div',
                            { className: 'text' },
                            _react3.default.createElement(
                                'p',
                                { className: 'ellipsis' },
                                banners[0].text
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'banner-item fr', style: { backgroundImage: 'url(' + banners[1].url + ')' } },
                    _react3.default.createElement(
                        'a',
                        { href: banners[1].href ? banners[1].href : "javascript:void(0);" },
                        _react3.default.createElement('img', { src: banners[1].url, hidden: true }),
                        _react3.default.createElement(
                            'div',
                            { className: 'text' },
                            _react3.default.createElement(
                                'p',
                                { className: 'ellipsis' },
                                banners[1].text
                            )
                        )
                    )
                )
            );

            if (banners.length == 3) return _react3.default.createElement(
                'div',
                { className: 'banners banners-three clearfix' },
                _react3.default.createElement(
                    'div',
                    { className: 'left-col banner-item fl', style: { backgroundImage: 'url(' + banners[0].url + ')' } },
                    _react3.default.createElement(
                        'a',
                        { href: banners[0].href ? banners[0].href : "javascript:void(0);" },
                        _react3.default.createElement('img', { src: banners[0].url, hidden: true }),
                        _react3.default.createElement(
                            'div',
                            { className: 'text' },
                            _react3.default.createElement(
                                'p',
                                { className: 'ellipsis' },
                                banners[0].text
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'right-col fr' },
                    _react3.default.createElement(
                        'div',
                        { className: 'banner-item', style: { backgroundImage: 'url(' + banners[1].url + ')' } },
                        _react3.default.createElement(
                            'a',
                            { href: banners[1].href ? banners[1].href : "javascript:void(0);" },
                            _react3.default.createElement('img', { src: banners[1].url, hidden: true }),
                            _react3.default.createElement(
                                'div',
                                { className: 'text' },
                                _react3.default.createElement(
                                    'p',
                                    { className: 'ellipsis' },
                                    banners[1].text
                                )
                            )
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'banner-item', style: { backgroundImage: 'url(' + banners[2].url + ')' } },
                        _react3.default.createElement(
                            'a',
                            { href: banners[2].href ? banners[2].href : "javascript:void(0);" },
                            _react3.default.createElement('img', { src: banners[2].url, hidden: true }),
                            _react3.default.createElement(
                                'div',
                                { className: 'text' },
                                _react3.default.createElement(
                                    'p',
                                    { className: 'ellipsis' },
                                    banners[2].text
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state2 = this.state,
                articles = _state2.articles,
                tags = _state2.tags,
                curTagId = _state2.curTagId,
                allNum = _state2.allNum,
                page = _state2.page,
                allPage = _state2.allPage;

            return _react3.default.createElement(
                'div',
                { className: 'blog-articles-layout ' },
                this.showBanners(),
                _react3.default.createElement(
                    'div',
                    { className: 'blog-tags' },
                    _react3.default.createElement(
                        _reactRouterDom.Link,
                        { to: { pathname: '/' }, onClick: function onClick() {
                                _this3.getArticles(1, null);
                            }, className: (0, _classnames2.default)("tag", { 'tag-active': !curTagId }) },
                        '\u6240\u6709\u6587\u7AE0'
                    ),
                    tags && tags.length ? tags.map(function (tag) {
                        return tag.count > 0 && _react3.default.createElement(
                            _reactRouterDom.Link,
                            { to: { pathname: '/', search: '?tag=' + tag.id }, onClick: function onClick() {
                                    _this3.getArticles(1, tag.id);
                                }, className: (0, _classnames2.default)("tag", { 'tag-active': curTagId == tag.id }), key: tag.id },
                            tag.name
                        );
                    }) : null
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'blog-articles-list' },
                    _react3.default.createElement(
                        'ul',
                        null,
                        articles && articles.length ? articles.map(function (article, index) {
                            return _react3.default.createElement(
                                'li',
                                { className: 'article-tiem', key: article.id },
                                _react3.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/article/' + article.id },
                                    _react3.default.createElement(
                                        'span',
                                        { className: 'article-num' },
                                        index + 1
                                    ),
                                    _react3.default.createElement(
                                        'h3',
                                        { className: 'nowrapmulti' },
                                        article.title
                                    )
                                )
                            );
                        }) : null
                    )
                ),
                allPage > 1 ? _react3.default.createElement(_pagination2.default, { size: 'small', total: allNum, current: page, defaultPageSize: PageSize, onChange: this.changePage }) : null
            );
        }
    }]);
    return Articles;
}(_react2.Component), _class.defaultProps = {
    articles: [],
    tags: [],
    banners: [],
    allPage: 0,
    curTagId: null
}, _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.getArticles = function (page, tagid) {
        _axios2.default.get('/api/get/publish/articles', {
            params: {
                tag: tagid || null,
                category: 'DEFAULT',
                page: page,
                pageSize: PageSize
            }
        }).then(function (res) {
            var resData = res.data;
            _this4.setState({
                articles: resData.articles,
                curTagId: tagid,
                allNum: resData.allNum,
                page: resData.page,
                allPage: resData.allPage
            });
        });
    };

    this.getAllTags = function () {
        _axios2.default.get('/api/get/alltags').then(function (res) {
            var resData = res.data;
            _this4.setState({
                tags: resData.tags
            });
        });
    };

    this.changePage = function (page, pageSize) {
        _this4.getArticles(page, _this4.state.curTagId);
    };
}, _temp));

exports.default = Articles;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=5.92776102.js.map