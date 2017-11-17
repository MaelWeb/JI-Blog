webpackHotUpdate(0,{

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(43);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _tabs = __webpack_require__(705);

var _tabs2 = _interopRequireDefault(_tabs);

var _index = __webpack_require__(48);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(49);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(50);

var _index6 = _interopRequireDefault(_index5);

var _class, _temp;

__webpack_require__(717);

var _md = __webpack_require__(1225);

var _md2 = _interopRequireDefault(_md);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = __webpack_require__(258);

var _axios2 = _interopRequireDefault(_axios);

var _resigteForm = __webpack_require__(737);

var _resigteForm2 = _interopRequireDefault(_resigteForm);

var _loginForm = __webpack_require__(787);

var _loginForm2 = _interopRequireDefault(_loginForm);

var _funy = __webpack_require__(788);

var _funy2 = _interopRequireDefault(_funy);

__webpack_require__(789);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Login: {
        displayName: 'Login'
    }
};

var _UsersMaelLiangWorkspaceNodeKoaTestNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/mael.liang/Workspace/node-koa-test/web/src/page/admin/Login/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersMaelLiangWorkspaceNodeKoaTestNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/mael.liang/Workspace/node-koa-test/web/src/page/admin/Login/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMaelLiangWorkspaceNodeKoaTestNode_modulesReactTransformHmrLibIndexJs2(_UsersMaelLiangWorkspaceNodeKoaTestNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var TabPane = _tabs2.default.TabPane;

var Login = _wrapComponent('Login')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login(props) {
        (0, _classCallCheck3.default)(this, Login);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.refs.loginForm.validateFields(function (err, values) {
                if (!err) {
                    values.password = (0, _md2.default)(values.password).toUpperCase();
                    _axios2.default.post('/api/signin', values).then(function (res) {
                        var result = res.data;
                        if (result.code !== 200) {
                            _this.context.showMessage(result.message);
                        } else {
                            _this.props.history.push('/');
                        }
                    }).catch(function (error) {
                        _this.context.showMessage('系统错误，请稍后再试');
                    });
                }
            });
        };

        _this.handleRegisterSubmit = function (e) {
            e.preventDefault();
            _this.refs.registeForm.validateFields(function (err, values) {
                if (!err) {
                    _axios2.default.post('/api/singup', values).then(function (res) {
                        var result = res.data;

                        if (result.code != 200) {
                            _this.context.showMessage(result.message);
                        } else {
                            _this.props.history.push('/login');
                        }
                    }).catch(function (error) {
                        _this.context.showMessage('系统错误，请稍后再试');
                    });
                }
            });
        };

        _this.state = {
            one: []
        };

        return _this;
    }

    (0, _createClass3.default)(Login, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _axios2.default.get('/api/one').then(function (res) {
                _this2.setState({
                    one: res.data.data
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var match = this.props.match;
            var one = this.state.one;

            return _react3.default.createElement(
                'div',
                { className: 'login-layout', style: { minHeight: document.body.clientHeight } },
                _react3.default.createElement(
                    'div',
                    { className: 'login-wrap' },
                    _react3.default.createElement(
                        'p',
                        { className: 'jitang tl' },
                        _react3.default.createElement(
                            'span',
                            null,
                            'M'
                        ),
                        '\u7ED9\u81EA\u5DF1\u4E00\u6B21\u6587\u827A\u7684\u673A\u4F1A'
                    ),
                    _react3.default.createElement(
                        _tabs2.default,
                        { tabPosition: 'left', defaultActiveKey: match.path || '/login' },
                        _react3.default.createElement(
                            TabPane,
                            { tab: '\u767B\u5F55', key: '/login' },
                            _react3.default.createElement(_loginForm2.default, { handleSubmit: this.handleSubmit, ref: 'loginForm' }),
                            _react3.default.createElement(_funy2.default, { data: one })
                        ),
                        _react3.default.createElement(
                            TabPane,
                            { tab: '\u6CE8\u518C', key: '/registe' },
                            _react3.default.createElement(_resigteForm2.default, { handleRegisterSubmit: this.handleRegisterSubmit, ref: 'registeForm' }),
                            _react3.default.createElement(_funy2.default, { data: one })
                        )
                    )
                )
            );
        }
    }]);
    return Login;
}(_react2.Component), _class.contextTypes = {
    showMessage: _propTypes2.default.func
}, _temp));

exports.default = Login;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)(module)))

/***/ })

})
//# sourceMappingURL=0.4635a6b3a66b830fdb49.hot-update.js.map