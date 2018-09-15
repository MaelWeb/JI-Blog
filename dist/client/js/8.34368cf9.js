(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "../node_modules/fbjs/lib/emptyFunction.js":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/fbjs/lib/emptyFunction.js from dll-reference react_54951f66 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react_54951f66 */ "dll-reference react_54951f66"))(111);

/***/ }),

/***/ "../node_modules/fbjs/lib/invariant.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/fbjs/lib/invariant.js from dll-reference react_54951f66 ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react_54951f66 */ "dll-reference react_54951f66"))(112);

/***/ }),

/***/ "./page/blog/Message/index.js":
/*!************************************!*\
  !*** ./page/blog/Message/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "../node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _pagination = __webpack_require__(/*! antd/lib/pagination */ "../node_modules/antd/lib/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

var _axios = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _classnames = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _CommentInput = __webpack_require__(/*! ../../../components/CommentInput */ "./components/CommentInput/index.js");

var _CommentInput2 = _interopRequireDefault(_CommentInput);

var _message = __webpack_require__(/*! ./message.js */ "./page/blog/Message/message.js");

var _message2 = _interopRequireDefault(_message);

var _reactMasonryComponent = __webpack_require__(/*! react-masonry-component */ "../node_modules/react-masonry-component/lib/index.js");

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _UI = __webpack_require__(/*! ../../../components/UI */ "./components/UI/index.js");

var _Icon = __webpack_require__(/*! ../../../components/Icon */ "./components/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _Util = __webpack_require__(/*! ../Util */ "./page/blog/Util/index.js");

var _Emoji = __webpack_require__(/*! ../../../components/Emoji */ "./components/Emoji/index.js");

var _Emoji2 = _interopRequireDefault(_Emoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Message: {
        displayName: 'Message'
    }
};

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Message/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Message/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2(_UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var emojiStyle = {
    height: 20
};

var PageSize = 10;

var Message = _wrapComponent('Message')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(Message, _Component);

    function Message(props) {
        (0, _classCallCheck3.default)(this, Message);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).call(this, props));

        _initialiseProps.call(_this);

        var messageBanners = props.messageBanners,
            comments = props.comments,
            allPage = props.allPage,
            page = props.page,
            allNum = props.allNum,
            newComments = props.newComments;

        _this.state = {
            messageBanners: messageBanners,
            comments: comments,
            newComments: newComments,
            allNum: allNum,
            allPage: allPage,
            page: page,
            showUserInfo: false,
            isShowReplyModal: false,
            reply: null,
            commentCont: null
        };
        return _this;
    }

    (0, _createClass3.default)(Message, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.headerDom = _reactDom2.default.findDOMNode(this.refs.mressageHeader);
            this.messageLayoutDom = _reactDom2.default.findDOMNode(this);
            this.blogNavDom = document.getElementById('IdNav');

            this.blogNavDom.classList.add('blog-message-header');

            window.addEventListener("scroll", this.onscroll, false);

            if (!this.state.comments.length) {
                _axios2.default.get('/api/one').then(function (res) {
                    _this2.setState({
                        messageBanners: res.data.data
                    });
                });

                this.getComments(1);
            }
            _axios2.default.get('/api/get/comments', {
                params: {
                    page: 1,
                    size: 15
                }
            }).then(function (res) {
                var resData = res.data;
                _this2.setState({
                    newComments: resData.comments
                });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.blogNavDom.classList.remove('blog-message-header');
            window.removeEventListener("scroll", this.onscroll);
        }
    }, {
        key: 'getComments',
        value: function getComments(page) {
            var _this3 = this;

            _axios2.default.get('/api/get/comments', {
                params: {
                    articleid: "message666",
                    page: page,
                    size: PageSize
                }
            }).then(function (res) {
                var resData = res.data;
                _this3.setState({
                    comments: resData.comments,
                    page: resData.page,
                    allPage: resData.allPage,
                    allNum: resData.allNum
                });
            });
        }
    }, {
        key: 'saveComment',
        value: function saveComment(data) {
            var _this4 = this;

            var comments = this.state.comments;
            _axios2.default.post('/api/create/comment', (0, _extends3.default)({}, data, { articleid: "message666" })).then(function (res) {
                var resdata = res.data;
                if (resdata.code == 200) {
                    comments.unshift(resdata.comment);
                    data.reply ? _this4.refs.replyInput.clearTextarea() : _this4.refs.commentInput.clearTextarea();
                    _this4.setState({
                        showUserInfo: false,
                        isShowReplyModal: false,
                        reply: null,
                        comments: comments,
                        commentCont: null
                    });
                } else {
                    _UI.Toast.warn(resdata.message);
                }
            }).catch(function (err) {
                _UI.Toast.warn('发布失败');
            });
        }
    }, {
        key: 'getDateDom',
        value: function getDateDom() {
            var day = new Date().toDateString(),
                dayArray = day.split(" ");

            return _react3.default.createElement(
                'div',
                { className: 'blog-message-widget-date' },
                _react3.default.createElement(
                    'strong',
                    null,
                    dayArray[2]
                ),
                _react3.default.createElement(
                    'small',
                    null,
                    dayArray[1],
                    ' ',
                    dayArray[3]
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _state = this.state,
                messageBanners = _state.messageBanners,
                comments = _state.comments,
                showUserInfo = _state.showUserInfo,
                isShowReplyModal = _state.isShowReplyModal,
                reply = _state.reply,
                allPage = _state.allPage,
                allNum = _state.allNum,
                page = _state.page,
                newComments = _state.newComments;

            var randomIndex = Math.floor(Math.random() * (messageBanners.length - 1)) + 1,
                header = messageBanners[randomIndex] || {};
            return _react3.default.createElement(
                'div',
                { className: 'blog-message-layout ' },
                _react3.default.createElement(
                    'div',
                    { className: 'blog-message-header header-banner', style: { backgroundImage: 'url(//cdn.liayal.com/banner/pexels-photo-1096848.jpeg)' }, ref: 'mressageHeader' },
                    _react3.default.createElement(
                        'div',
                        { className: 'blog-message-header-input' },
                        _react3.default.createElement(_CommentInput2.default, { exportComment: this.exportComment, placeholder: header.text, ref: 'commentInput' })
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'blog-message-body clearfix' },
                    _react3.default.createElement(
                        'div',
                        { className: 'blog-message-list-wrap fl' },
                        _react3.default.createElement(
                            'div',
                            { className: 'blog-message-list' },
                            _react3.default.createElement(_Icon2.default, { className: 'blog-message-icon', type: 'message' }),
                            comments.length ? comments.map(function (comment, index) {
                                return !comment.isRemove && _react3.default.createElement(_message2.default, { key: index, comment: comment, replyComent: _this5.showReplyModal, isFloatRight: !!(index % 2 != 0) });
                            }) : null,
                            allPage > 1 ? _react3.default.createElement(_pagination2.default, { size: 'small', total: allNum, current: page, defaultPageSize: PageSize, onChange: this.changePage }) : null
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'blog-message-other fr' },
                        _react3.default.createElement(
                            'div',
                            { className: 'blog-message-widget-box' },
                            _react3.default.createElement(
                                'div',
                                { className: 'blog-message-widget-one' },
                                _react3.default.createElement('img', { src: messageBanners[0] ? messageBanners[0].imgUrl : 'http://image.wufazhuce.com/Fu1qjJjsQ_wZ_3BR-utNJwUIGY-P', alt: '' }),
                                _react3.default.createElement(
                                    'div',
                                    { className: 'blog-message-widget-footer' },
                                    _react3.default.createElement(
                                        'p',
                                        { className: 'blog-message-widget-txt' },
                                        messageBanners[0] ? messageBanners[0].text : '懂的人会懂，感动的人会感动，无关的人，敬请错过。'
                                    ),
                                    this.getDateDom()
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: 'blog-message-widget-up' },
                            _react3.default.createElement(
                                'h5',
                                null,
                                '\u6700\u8FD1\u8BC4\u8BBA'
                            ),
                            _react3.default.createElement(
                                'ul',
                                { className: 'blog-message-widge-list' },
                                newComments.length ? newComments.map(function (comment) {
                                    return _react3.default.createElement(
                                        'li',
                                        null,
                                        _react3.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: comment.articleid != "message666" ? '/article/' + comment.articleid : '#' + comment.id },
                                            _react3.default.createElement(
                                                'h6',
                                                null,
                                                comment.user.name,
                                                _react3.default.createElement(
                                                    'small',
                                                    null,
                                                    (0, _Util.getTimeString)(comment.createTime)
                                                )
                                            ),
                                            _react3.default.createElement(
                                                _Emoji2.default,
                                                { style: emojiStyle },
                                                _react3.default.createElement(
                                                    'p',
                                                    null,
                                                    comment.commentCont
                                                )
                                            )
                                        )
                                    );
                                }) : null
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'comment-modal', hidden: !showUserInfo, style: { zIndex: 5 }, ref: 'UserModal' },
                    _react3.default.createElement(
                        'div',
                        { className: 'comment-user-modal-form' },
                        _react3.default.createElement('img', { src: '//cdn.liayal.com/image/logo.png', alt: '' }),
                        _react3.default.createElement('input', { type: 'text', name: 'name', placeholder: '\u6635\u79F0(\u5FC5\u586B)', ref: 'userName' }),
                        _react3.default.createElement('input', { type: 'text', autoComplete: 'email', name: 'email', placeholder: 'xxxx@qq.com(\u5FC5\u586B)', ref: 'userEamil' }),
                        _react3.default.createElement('input', { type: 'text', name: 'site', placeholder: 'www.yourblog.com', ref: 'userSite' }),
                        _react3.default.createElement(
                            'div',
                            { className: 'btns' },
                            _react3.default.createElement(
                                'button',
                                { onClick: this.commentCancle },
                                '\u53D6\u6D88'
                            ),
                            _react3.default.createElement(
                                'button',
                                { onClick: this.commentSubmit },
                                '\u786E\u8BA4'
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'comment-modal', hidden: !isShowReplyModal, ref: 'ReplyModal' },
                    _react3.default.createElement(
                        'div',
                        { className: 'comment-reply-from' },
                        _react3.default.createElement(
                            'h6',
                            { className: 'tl' },
                            '\u56DE\u590D\uFF1A',
                            reply && reply.user.name,
                            ' ',
                            _react3.default.createElement(_Icon2.default, { type: 'close-x comment-close', onClick: this.closeReplyModal })
                        ),
                        _react3.default.createElement(_CommentInput2.default, { exportComment: this.exportComment, ref: 'replyInput' })
                    )
                )
            );
        }
    }]);
    return Message;
}(_react2.Component), _class.defaultProps = {
    comments: [],
    messageBanners: [],
    newComments: [],
    allNum: 0,
    allPage: 0,
    page: 0
}, _class.defaultPropTypes = {
    comments: _propTypes2.default.array,
    messageBanners: _propTypes2.default.array,
    newComments: _propTypes2.default.array
}, _initialiseProps = function _initialiseProps() {
    var _this6 = this;

    this.onscroll = function (e) {
        e = e || window.event;
        var _scrollTop = window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop || 0;;
        if (_scrollTop >= _this6.headerDom.offsetHeight - _this6.blogNavDom.offsetHeight) {
            _this6.blogNavDom.classList.remove('blog-message-header');
        } else {
            _this6.blogNavDom.classList.add('blog-message-header');
        }
    };

    this.changePage = function (page, pageSize) {
        _this6.getComments(page);
    };

    this.exportComment = function (commentCont) {
        var reply = _this6.state.reply;

        var user = /access\_token/g.test(document.cookie) ? {
            name: '记小栈',
            email: 'mael.liang@live.com',
            site: 'https://www.liayal.com',
            avatar: 'https://cdn.liayal.com/image/logo_min.png'
        } : window.localStorage.getItem('_liayal_user');

        if (!commentCont) return _UI.Toast.info('你倒是写点什么啊！');

        if (user && commentCont) {
            _this6.saveComment({
                user: typeof user == 'string' ? JSON.parse(user) : user,
                reply: reply ? reply.id : null,
                commentCont: commentCont
            });
        } else if (commentCont) {
            _this6.setState({
                showUserInfo: true,
                commentCont: commentCont
            });
        }
    };

    this.commentSubmit = function () {
        var name = _this6.refs.userName.value,
            email = _this6.refs.userEamil.value,
            site = _this6.refs.userSite.value,
            emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;
        var _state2 = _this6.state,
            reply = _state2.reply,
            commentCont = _state2.commentCont;


        if (!email || !name) return _UI.Toast.info('填一下昵称和邮箱呗！');

        if (!emailReg.test(email)) return _UI.Toast.info('邮箱格式不正确呀！');

        window.localStorage.setItem('_liayal_user', (0, _stringify2.default)({ name: name, email: email, site: site }));

        _this6.saveComment({
            user: { name: name, email: email, site: site },
            reply: reply ? reply.id : null,
            commentCont: commentCont
        });
    };

    this.commentCancle = function () {
        _this6.setState({
            showUserInfo: false
        });
    };

    this.showReplyModal = function (comment) {
        _this6.setState({
            isShowReplyModal: true,
            reply: comment
        });
    };

    this.closeReplyModal = function () {
        _this6.setState({
            isShowReplyModal: false
        });
    };
}, _temp));

exports.default = Message;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./page/blog/Message/message.js":
/*!**************************************!*\
  !*** ./page/blog/Message/message.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _class, _temp;

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = __webpack_require__(/*! ../../../components/Icon */ "./components/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _Emoji = __webpack_require__(/*! ../../../components/Emoji */ "./components/Emoji/index.js");

var _Emoji2 = _interopRequireDefault(_Emoji);

var _classnames = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Util = __webpack_require__(/*! ../Util */ "./page/blog/Util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    MessageItem: {
        displayName: 'MessageItem'
    }
};

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Message/message.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Message/message.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2(_UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var emojiStyle = {
    height: 20
};

var MessageItem = _wrapComponent('MessageItem')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(MessageItem, _Component);

    function MessageItem(props) {
        (0, _classCallCheck3.default)(this, MessageItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MessageItem.__proto__ || (0, _getPrototypeOf2.default)(MessageItem)).call(this, props));

        _this.replyComent = function () {
            var comment = _this.props.comment;


            _this.props.replyComent(comment);
        };

        _this.state = {};

        return _this;
    }

    (0, _createClass3.default)(MessageItem, [{
        key: 'randomClassName',
        value: function randomClassName() {
            var classArray = ['blog-message-item-default', 'blog-message-item-ffcdac', 'blog-message-item-fcd474'];

            var random = parseInt(Math.random() * 3);

            return classArray[random];
        }
    }, {
        key: 'render',
        value: function render() {
            var _ClassNames;

            var _props = this.props,
                className = _props.className,
                comment = _props.comment,
                isFloatRight = _props.isFloatRight;

            var randomClass = this.randomClassName();
            return _react3.default.createElement(
                'div',
                { className: (0, _classnames2.default)('blog-message-item', (_ClassNames = {}, (0, _defineProperty3.default)(_ClassNames, className, className), (0, _defineProperty3.default)(_ClassNames, randomClass, randomClass), _ClassNames)) },
                _react3.default.createElement(
                    'div',
                    { className: 'blog-message-item-box clearfix' },
                    _react3.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)("blog-message-item-box-avatar", { fl: !isFloatRight, fr: isFloatRight }) },
                        comment.user && comment.user.avatar ? _react3.default.createElement(
                            'div',
                            { className: 'avatar-img' },
                            _react3.default.createElement('img', { src: comment.user.avatar, alt: '' })
                        ) : _react3.default.createElement(_Icon2.default, { type: 'avatar' })
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)("blog-message-item-body", { fl: !isFloatRight, fr: isFloatRight }) },
                        _react3.default.createElement(
                            'p',
                            { className: 'blog-message-item-user' },
                            comment.user.name,
                            _react3.default.createElement(
                                'small',
                                null,
                                (0, _Util.getTimeString)(comment.createTime)
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: 'blog-message-item-text', onClick: this.replyComent },
                            comment.reply ? _react3.default.createElement(
                                _Emoji2.default,
                                { style: emojiStyle },
                                _react3.default.createElement(
                                    'blockquote',
                                    { className: 'nowrapmulti' },
                                    '@',
                                    comment.reply.user.name,
                                    ': ',
                                    comment.reply.commentCont
                                )
                            ) : null,
                            _react3.default.createElement(
                                _Emoji2.default,
                                { style: emojiStyle },
                                _react3.default.createElement(
                                    'p',
                                    null,
                                    comment.commentCont
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return MessageItem;
}(_react2.Component), _class.defaultProps = {
    className: '',
    comment: {},
    isFloatRight: false,
    replyComent: function replyComent() {}
}, _class.propTypes = {
    className: _propTypes2.default.string,
    comment: _propTypes2.default.object,
    isFloatRight: _propTypes2.default.bool,
    replyComent: _propTypes2.default.func
}, _temp));

exports.default = MessageItem;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=8.34368cf9.js.map