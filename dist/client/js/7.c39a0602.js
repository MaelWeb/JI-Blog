(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./components/ImageGallery/index.js":
/*!******************************************!*\
  !*** ./components/ImageGallery/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

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

var _reactDom = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Toucher = __webpack_require__(/*! ../Toucher */ "./components/Toucher/index.js");

var _Toucher2 = _interopRequireDefault(_Toucher);

var _Icon = __webpack_require__(/*! ../Icon */ "./components/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    ImageGallery: {
        displayName: 'ImageGallery'
    }
};

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/components/ImageGallery/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/components/ImageGallery/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2(_UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var ImageGallery = _wrapComponent('ImageGallery')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(ImageGallery, _Component);

    function ImageGallery(props) {
        (0, _classCallCheck3.default)(this, ImageGallery);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ImageGallery.__proto__ || (0, _getPrototypeOf2.default)(ImageGallery)).call(this, props));

        _this.preventDefault = function (e) {
            e.preventDefault();
        };

        _this.close = function () {
            _this.setState({
                isShow: false
            });
        };

        _this._onSliding = function () {
            var isTransitioning = _this.state.isTransitioning;

            window.setTimeout(function () {
                if (isTransitioning) {
                    _this.setState({ isTransitioning: !isTransitioning });
                }
            }, _this.props.slideDuration);
        };

        _this.slideToIndex = function (index, event) {
            var _this$state = _this.state,
                currentIndex = _this$state.currentIndex,
                isTransitioning = _this$state.isTransitioning;


            if (!isTransitioning) {

                var slideCount = _this.props.images.length - 1;
                var nextIndex = index;

                if (index < 0) {
                    nextIndex = slideCount;
                } else if (index > slideCount) {
                    nextIndex = 0;
                }

                _this.setState({
                    previousIndex: currentIndex,
                    currentIndex: nextIndex,
                    isTransitioning: nextIndex !== currentIndex,
                    offsetPercentage: 0,
                    style: {
                        transition: 'all ' + _this.props.slideDuration + 'ms ease-out'
                    }
                }, _this._onSliding);
            }
        };

        _this.slideLeft = function (event) {
            _this.slideToIndex(_this.state.currentIndex - 1, event);
        };

        _this.slideRight = function (event) {
            _this.slideToIndex(_this.state.currentIndex + 1, event);
        };

        _this._getSlideStyle = function (index) {
            var _this$state2 = _this.state,
                currentIndex = _this$state2.currentIndex,
                offsetPercentage = _this$state2.offsetPercentage;
            var images = _this.props.images;

            var baseTranslateX = -100 * currentIndex;
            var totalSlides = images.length - 1;

            // calculates where the other slides belong based on currentIndex
            var translateX = baseTranslateX + index * 100 + offsetPercentage;

            if (images.length > 2) {
                if (currentIndex === 0 && index === totalSlides) {
                    // make the last slide the slide before the first
                    translateX = -100 + offsetPercentage;
                } else if (currentIndex === totalSlides && index === 0) {
                    // make the first slide the slide after the last
                    translateX = 100 + offsetPercentage;
                }
            }

            // Special case when there are only 2 images with infinite on
            if (images.length === 2) {
                translateX = _this._getTranslateXForTwoSlide(index);
            }

            var translate = 'translate(' + translateX + '%, 0)';

            return {
                WebkitTransform: translate,
                MozTransform: translate,
                msTransform: translate,
                OTransform: translate,
                transform: translate
            };
        };

        _this.state = {
            currentIndex: props.startIndex,
            offsetPercentage: 0,
            isShow: false
        };
        return _this;
    }

    (0, _createClass3.default)(ImageGallery, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.startIndex >= nextProps.images.length) {
                this.setState({
                    currentIndex: 0,
                    isShow: nextProps.isShow
                });
            } else {
                this.setState({
                    currentIndex: nextProps.startIndex,
                    isShow: nextProps.isShow
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (_reactDom2.default.findDOMNode(this)) {
                this.dom = _reactDom2.default.findDOMNode(this);
                this.dom.addEventListener('touchmove', this.preventDefault);
            }
        }
    }, {
        key: '_shouldPushSlideOnInfiniteMode',
        value: function _shouldPushSlideOnInfiniteMode(index) {
            /*
              Push(show) slide if slide is the current slide, and the next slide
              OR
              The slide is going more than 1 slide left, or right, but not going from
              first to last and not going from last to first
              There is an edge case where if you go to the first or last slide, when they're
              not left, or right of each other they will try to catch up in the background
              so unless were going from first to last or vice versa we don't want the first
              or last slide to show up during our transition
            */
            return !this._slideIsTransitioning(index) || this._ignoreIsTransitioning() && !this._isFirstOrLastSlide(index);
        }
    }, {
        key: '_slideIsTransitioning',
        value: function _slideIsTransitioning(index) {
            /*
            returns true if the gallery is transitioning and the index is not the
            previous or currentIndex
            */
            var _state = this.state,
                isTransitioning = _state.isTransitioning,
                previousIndex = _state.previousIndex,
                currentIndex = _state.currentIndex;

            var indexIsNotPreviousOrNextSlide = !(index === previousIndex || index === currentIndex);
            return isTransitioning && indexIsNotPreviousOrNextSlide;
        }
    }, {
        key: '_isFirstOrLastSlide',
        value: function _isFirstOrLastSlide(index) {
            var totalSlides = this.props.images.length - 1;
            var isLastSlide = index === totalSlides;
            var isFirstSlide = index === 0;
            return isLastSlide || isFirstSlide;
        }
    }, {
        key: '_ignoreIsTransitioning',
        value: function _ignoreIsTransitioning() {
            /*
              Ignore isTransitioning because were not going to sibling slides
              e.g. center to left or center to right
            */
            var _state2 = this.state,
                previousIndex = _state2.previousIndex,
                currentIndex = _state2.currentIndex;

            var totalSlides = this.props.images.length - 1;
            // we want to show the in between slides transition
            var slidingMoreThanOneSlideLeftOrRight = Math.abs(previousIndex - currentIndex) > 1;
            var notGoingFromFirstToLast = !(previousIndex === 0 && currentIndex === totalSlides);
            var notGoingFromLastToFirst = !(previousIndex === totalSlides && currentIndex === 0);

            return slidingMoreThanOneSlideLeftOrRight && notGoingFromFirstToLast && notGoingFromLastToFirst;
        }
    }, {
        key: 'getSlides',
        value: function getSlides() {
            var _this2 = this;

            var slides = [];
            var images = this.props.images;
            var currentIndex = this.state.currentIndex;


            images.length && images.map(function (img, index) {
                if (_this2._shouldPushSlideOnInfiniteMode(index)) {
                    var slideStyle = _this2._getSlideStyle(index);
                    slides.push(_react3.default.createElement(
                        'div',
                        { className: 'image-gallery-slide', style: (0, _assign2.default)(slideStyle, _this2.state.style), key: index },
                        _react3.default.createElement('img', { src: img.src })
                    ));
                }
            });

            return slides;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state3 = this.state,
                isShow = _state3.isShow,
                currentIndex = _state3.currentIndex;
            var images = this.props.images;

            return _react3.default.createElement(
                'div',
                { className: 'mael-image-gallery', hidden: !isShow },
                _react3.default.createElement(_Icon2.default, { type: 'close', onClick: this.close }),
                _react3.default.createElement(
                    _Toucher2.default,
                    { className: 'image-gallery-swipe', onSwipeRight: this.slideLeft, onSwipeLeft: this.slideRight },
                    _react3.default.createElement(
                        'div',
                        { className: 'image-gallery-arrow arrow-left', onClick: this.slideLeft },
                        _react3.default.createElement(_Icon2.default, { type: 'bold-arrow-left' })
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'image-gallery-slides' },
                        this.getSlides()
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'image-gallery-arrow arrow-right', onClick: this.slideRight },
                        _react3.default.createElement(_Icon2.default, { type: 'bold-arrow-right' })
                    )
                ),
                _react3.default.createElement(
                    'p',
                    { className: 'image-index tc' },
                    currentIndex + 1,
                    '/',
                    images.length
                )
            );
        }
    }]);
    return ImageGallery;
}(_react2.Component), _class.propTypes = {
    startIndex: _propTypes2.default.number,
    images: _propTypes2.default.array,
    slideDuration: _propTypes2.default.number
}, _class.defaultProps = {
    startIndex: 0,
    images: [],
    slideDuration: 450
}, _temp));

exports.default = ImageGallery;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/Toucher/index.js":
/*!*************************************!*\
  !*** ./components/Toucher/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _reactDom = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Toucher: {
        displayName: 'Toucher'
    }
};

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/components/Toucher/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/components/Toucher/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2(_UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} /*
   * react toucher (移动端手势库)
   *
   * 支持事件：singleTap(轻击), doubleTap(双击), longTap(长按), swipeUp(上划), swipeRight(右划), swipeDown(下划), swipeleft(左划)
   *
   * Use: <Toucher onSwipeLeft={ this.swipeLeft.bind(this) } ></Toucher>
   *
   * create by mael
   */


var Toucher = _wrapComponent('Toucher')(function (_React$Component) {
    (0, _inherits3.default)(Toucher, _React$Component);

    function Toucher(props) {
        (0, _classCallCheck3.default)(this, Toucher);

        //轻击开始时间
        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Toucher.__proto__ || (0, _getPrototypeOf2.default)(Toucher)).call(this, props));

        _this2.touchStartTime = 0;

        //记录上一次点击时间
        _this2.lastTouchTime = 0;

        //记录初始轻击的位置
        _this2.x1, _this2.y1, _this2.x2, _this2.y2;

        //轻击事件的延时器
        _this2.touchDelay;

        //测试长按事件的延时器
        _this2.longTap;

        //记录当前事件是否已为等待结束的状态
        _this2.isActive = false;
        //记录有坐标信息的事件
        _this2.eventMark = null;

        // 事件堆
        _this2._events = {};
        return _this2;
    }

    (0, _createClass3.default)(Toucher, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.DOM = (0, _reactDom.findDOMNode)(this);
            this._events = this.props;
            this.eventListener();
        }
    }, {
        key: 'eventListener',
        value: function eventListener() {
            /**
             * 对开始手势的监听
             */
            this.DOM.addEventListener('touchstart', this.touchStart.bind(this));
            this.DOM.addEventListener('MSPointerDown', this.touchStart.bind(this));
            this.DOM.addEventListener('pointerdown', this.touchStart.bind(this));

            /**
             * 对手势结束的监听（轻击）
             */
            this.DOM.addEventListener('touchend', this.touchend.bind(this));
            this.DOM.addEventListener('MSPointerUp', this.touchend.bind(this));
            this.DOM.addEventListener('pointerup', this.touchend.bind(this));

            /**
             * 对移动手势的监听
             */
            this.DOM.addEventListener('touchmove', this.touchmove.bind(this));
            this.DOM.addEventListener('MSPointerMove', this.touchmove.bind(this));
            this.DOM.addEventListener('pointermove', this.touchmove.bind(this));

            /**
             * 对移动结束的监听
             */
            this.DOM.addEventListener('touchcancel', this.actionOver.bind(this));
            this.DOM.addEventListener('MSPointerCancel', this.actionOver.bind(this));
            this.DOM.addEventListener('pointercancel', this.actionOver.bind(this));
        }
    }, {
        key: 'actionOver',
        value: function actionOver(e) {
            this.isActive = false;
            clearTimeout(this.longTap);
            clearTimeout(this.touchDelay);
        }

        /**
         * 执行绑定的回调函数，并创建一个事件对象
         * @param[string]事件名
         * @param[function]被执行掉的函数
         * @param[object]指向的dom
         * @param[object]原生event对象
         */

    }, {
        key: 'event_callback',
        value: function event_callback(name, e) {
            //优先使用自定义的touches（目前是为了解决touchEnd无touches的问题）
            var touches = e.plugTouches || e.touches,
                touch = touches.length ? touches[0] : {},
                newE = {
                type: name,
                target: this.DOM,
                pageX: touch.pageX,
                pageY: touch.pageY,
                clientX: touch.clientX || 0,
                clientY: touch.clientY || 0
            };
            //为swipe事件增加交互初始位置及移动距离
            if (name.match(/^onSwipe/) && e.plugStartPosition) {
                newE.startX = e.plugStartPosition.pageX;
                newE.startY = e.plugStartPosition.pageY;
                newE.moveX = newE.pageX - newE.startX;
                newE.moveY = newE.pageY - newE.startY;
            }
            //执行绑定事件的回调，并记录返回值
            // var call_result = fn.call(dom, newE);
            var call_result = this._events[name](newE);
            //若返回false，阻止浏览器默认事件
            if (call_result == false) {
                e.preventDefault();
                e.stopPropagation();
            }
        }

        /**
         * @method 事件触发器
         * @description 根据事件最原始被触发的target，逐级向上追溯事件绑定
         *
         * @param string 事件名
         * @param object 原生事件对象
         */

    }, {
        key: 'EMIT',
        value: function EMIT(eventName, e) {
            this._events = this._events || this.props;
            //事件堆无该事件，结束触发
            if (!this._events[eventName]) {
                return;
            }

            //从事件源：target开始向上冒泡
            var target = e.target;
            while (1) {
                //若已经冒泡至顶，检测顶级绑定，结束冒泡
                if (target == this.DOM || !target) {
                    var callback = this._events[eventName];
                    this.event_callback(eventName, e);
                    return;
                }

                //向上冒泡
                target = target.parentNode;
            }
        }
    }, {
        key: 'isSingleTap',
        value: function isSingleTap() {
            this.actionOver();
            this.EMIT('onSingleTap', this.eventMark);
        }
    }, {
        key: 'touchStart',
        value: function touchStart(e) {
            if (!e.touches) return;
            //缓存事件
            this.eventMark = e;
            this.x1 = e.touches[0].pageX;
            this.y1 = e.touches[0].pageY;
            this.x2 = 0;
            this.y2 = 0;
            this.isActive = true;
            this.touchStartTime = new Date();
            this.EMIT('onSwipeStart', e);
            //检测是否为长按
            clearTimeout(this.longTap);

            var _this = this;
            this.longTap = setTimeout(function () {
                _this.actionOver(e);
                //断定此次事件为长按事件
                _this.EMIT('onLongTap', e);
            }, 500);
        }
    }, {
        key: 'touchend',
        value: function touchend(e) {
            //touchend中，拿不到坐标位置信息，故使用全局保存下数据
            e.plugStartPosition = this.eventMark.plugStartPosition;
            e.plugTouches = this.eventMark.touches;
            this.EMIT('onSwipeEnd', e);
            if (!this.isActive) {
                return;
            }
            var now = new Date();
            //若未监听doubleTap，直接响应
            if (!this._events.doubleTap || this._events.doubleTap.length == 0) {
                this.isSingleTap();
            } else if (now - this.lastTouchTime > 200) {
                //延迟响应
                this.touchDelay = setTimeout(this.isSingleTap, 190);
            } else {
                clearTimeout(this.touchDelay);
                this.actionOver(e);
                //断定此次事件为连续两次轻击事件
                this.EMIT('onDoubleTap', eventMark);
            }
            this.lastTouchTime = now;
        }
    }, {
        key: 'touchmove',
        value: function touchmove(e) {
            if (!e.touches) return;
            //缓存事件
            this.eventMark = e;
            //在原生事件基础上记录初始位置（为swipe事件增加参数传递）
            e.plugStartPosition = {
                pageX: this.x1,
                pageY: this.y1
            };

            //断定此次事件为移动事件
            this.EMIT('onSwipe', e);
            if (!this.isActive) {
                return;
            }
            this.x2 = e.touches[0].pageX;
            this.y2 = e.touches[0].pageY;
            if (Math.abs(this.x1 - this.x2) > 2 || Math.abs(this.y1 - this.y2) > 2) {
                //断定此次事件为移动手势
                var direction = this.swipeDirection(this.x1, this.x2, this.y1, this.y2);
                this.EMIT('onSwipe' + direction, e);
            } else {
                //断定此次事件为轻击事件
                this.isSingleTap();
            }
            this.actionOver(e);
        }
    }, {
        key: 'swipeDirection',
        value: function swipeDirection(x1, x2, y1, y2) {
            return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                style = _props.style,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'style']);

            return _react3.default.createElement(
                'div',
                { className: className, style: style },
                children
            );
        }
    }]);
    return Toucher;
}(_react3.default.Component));

exports.default = Toucher;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var IMG_URL =  false ? undefined : "//p1hx4ytu8.bkt.clouddn.com/";
var IMG_QUERY =  false ? undefined : "?imageView2/0/q/75|watermark/1/image/aHR0cDovL296cnJtdDduOS5ia3QuY2xvdWRkbi5jb20vaW1hZ2UvbG9nb193aGl0ZV9taW4ucG5n/dissolve/100/gravity/SouthEast/dx/10/dy/10|imageslim";

exports.IMG_URL = IMG_URL;
exports.IMG_QUERY = IMG_QUERY;

/***/ }),

/***/ "./page/blog/Photoes/imageItem.js":
/*!****************************************!*\
  !*** ./page/blog/Photoes/imageItem.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ImgLazy from '../../../components/ImgLazy';
// import Icon from '../../../components/Icon';

var ImageItem = function ImageItem(_ref) {
    var index = _ref.index,
        _onClick = _ref.onClick,
        photo = _ref.photo,
        margin = _ref.margin;

    return _react2.default.createElement(
        'div',
        { style: { margin: margin, width: photo.width }, className: 'photo-item tc', onClick: function onClick(e) {
                return _onClick(e, { index: index, photo: photo });
            } },
        _react2.default.createElement('img', { src: photo.src, width: photo.width, height: photo.height }),
        photo.desc ? _react2.default.createElement(
            'div',
            { className: 'photo-item-desc tc' },
            _react2.default.createElement(
                'p',
                null,
                photo.desc
            )
        ) : null
    );
};

exports.default = ImageItem;

/***/ }),

/***/ "./page/blog/Photoes/index.js":
/*!************************************!*\
  !*** ./page/blog/Photoes/index.js ***!
  \************************************/
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

var _axios = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _classnames = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPhotoGallery = __webpack_require__(/*! react-photo-gallery */ "../node_modules/react-photo-gallery/dist/react-photo-gallery.es.js");

var _reactPhotoGallery2 = _interopRequireDefault(_reactPhotoGallery);

var _reactMeasure = __webpack_require__(/*! react-measure */ "../node_modules/react-measure/lib/react-measure.js");

var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

var _ImageGallery = __webpack_require__(/*! ../../../components/ImageGallery */ "./components/ImageGallery/index.js");

var _ImageGallery2 = _interopRequireDefault(_ImageGallery);

var _imageItem = __webpack_require__(/*! ./imageItem.js */ "./page/blog/Photoes/imageItem.js");

var _imageItem2 = _interopRequireDefault(_imageItem);

var _Icon = __webpack_require__(/*! ../../../components/Icon */ "./components/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _config = __webpack_require__(/*! ../../../config/ */ "./config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Photo: {
        displayName: 'Photo'
    }
};

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Photoes/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/mael/workspace/JI-Blog/web/page/blog/Photoes/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersMaelWorkspaceJIBlogNode_modulesReactTransformHmrLibIndexJs2(_UsersMaelWorkspaceJIBlogNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Photo = _wrapComponent('Photo')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(Photo, _Component);

    function Photo(props) {
        (0, _classCallCheck3.default)(this, Photo);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Photo.__proto__ || (0, _getPrototypeOf2.default)(Photo)).call(this, props));

        _initialiseProps.call(_this);

        var photoes = props.photoes,
            page = props.page,
            allPage = props.allPage;

        var photoSrcs = _this.addSrc(photoes);
        _this.state = {
            photoes: photoSrcs,
            allPage: allPage,
            page: page,
            showPhotoView: false,
            currentPhotoIndex: 0,
            isShowImageGallery: false,
            imageGalleryIndex: 0,
            isLoading: false
        };
        return _this;
    }

    (0, _createClass3.default)(Photo, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var photoes = this.state.photoes;

            if (!photoes.length) this.getPhotos(1);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.photoLayoutDom = _reactDom2.default.findDOMNode(this);
            this.headerDom = _reactDom2.default.findDOMNode(this.refs.photoHeader);
            this.blogNavDom = document.getElementById('IdNav');

            this.blogNavDom.classList.add('blog-photoes-header');

            window.addEventListener("scroll", this.onscroll, false);
        }
    }, {
        key: 'getPhotos',
        value: function getPhotos(page) {
            var _this2 = this;

            if (this.state.isLoading) return;
            this.setState({
                isLoading: true
            });
            _axios2.default.get('/api/get/photoes', { params: { page: page } }).then(function (res) {
                var photoSrcs = _this2.addSrc(res.data.photoes);
                _this2.setState(function (preState) {
                    var photoes = preState.photoes.concat(photoSrcs);
                    return {
                        page: page,
                        photoes: photoes,
                        allPage: res.data.allPage,
                        isLoading: false
                    };
                });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener("scroll", this.onscroll);
            this.blogNavDom.classList.remove('blog-photoes-header');
        }
    }, {
        key: 'addSrc',
        value: function addSrc(allphoto) {
            var photoes = [],
                banner = [];
            if (allphoto && allphoto.length) {
                allphoto.map(function (photo) {
                    var newPho = {
                        src: '' + _config.IMG_URL + photo.key + _config.IMG_QUERY,
                        original: '' + _config.IMG_URL + photo.key + _config.IMG_QUERY,
                        thumbnail: '' + _config.IMG_URL + photo.key + _config.IMG_QUERY,
                        width: photo.width,
                        height: photo.height,
                        desc: photo.desc
                    };

                    photoes.push(newPho);
                });
            }

            return photoes;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                photoes = _state.photoes,
                width = _state.width,
                showPhotoView = _state.showPhotoView,
                currentPhotoIndex = _state.currentPhotoIndex,
                isShowImageGallery = _state.isShowImageGallery,
                imageGalleryIndex = _state.imageGalleryIndex,
                isLoading = _state.isLoading;

            return _react3.default.createElement(
                'div',
                { className: 'blog-photo-layout ' },
                _react3.default.createElement(
                    'section',
                    { className: 'photo-banner header-banner', ref: 'photoHeader', style: { backgroundImage: 'url(' + (photoes[0] && photoes[0].src || '//cdn.liayal.com/14506926.jpg') + ')' } },
                    _react3.default.createElement('img', { src: photoes[0] && photoes[0].src || '//cdn.liayal.com/14506926.jpg', alt: '' }),
                    _react3.default.createElement(
                        'div',
                        { className: 'photo-banner-info' },
                        _react3.default.createElement(
                            'p',
                            { className: 'small' },
                            _react3.default.createElement(
                                'span',
                                null,
                                '\u56FE\u8BB0'
                            )
                        ),
                        _react3.default.createElement(
                            'h2',
                            null,
                            photoes[0] && photoes[0].desc ? photoes[0].desc : '一起老去'
                        )
                    )
                ),
                _react3.default.createElement(
                    'section',
                    { className: 'middle-text tc ' },
                    _react3.default.createElement(
                        'h2',
                        null,
                        '\u6211\u4EE5\u4E00\u79CD\u7B28\u62D9\u7684\u65B9\u5F0F\u62CD\u7167'
                    ),
                    _react3.default.createElement(
                        'p',
                        null,
                        '\u6444\u5F71\u662F\u4E00\u79CD\u795E\u5947\u7684\u8BB0\u5F55\uFF1A\u7167\u7247\u8BB0\u5F55\u4E86\u65F6\u95F4\u3001\u98CE\u666F\u3001\u4EBA\u7269\uFF1B\u53EF\u56DE\u653E\u7167\u7247\u65F6\u624D\u53D1\u73B0\uFF0C\u539F\u6765\u5B83\u8FD8\u8BB0\u5F55\u4E86\u6309\u4E0B\u5FEB\u95E8\u65F6\u7684\u611F\u89E6\u3001\u601D\u7EEA\u3001\u5FC3\u4E8B\u2026\u2026\u4E5F\u8BB8\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u660E\u660E\u770B\u5230\u7684\u662F\u4E00\u5F20\u98CE\u666F\uFF0C\u5374\u4F1A\u8BA9\u4F60\u60F3\u8D77\u8C01'
                    )
                ),
                _react3.default.createElement(
                    _reactMeasure2.default,
                    { bounds: true, onResize: function onResize(contentRect) {
                            return _this3.setState({ width: contentRect.bounds.width });
                        } },
                    function (_ref) {
                        var measureRef = _ref.measureRef;

                        var columns = 2;
                        if (width >= 480) {
                            columns = 3;
                        }
                        if (width >= 1024) {
                            columns = 4;
                        }
                        if (width >= 1824) {
                            columns = 5;
                        }
                        return _react3.default.createElement(
                            'div',
                            { ref: measureRef, className: 'photo-list ' },
                            _react3.default.createElement(_reactPhotoGallery2.default, { photos: photoes.slice(1), margin: 4, columns: columns, ImageComponent: _imageItem2.default, onClick: _this3.selectPhoto })
                        );
                    }
                ),
                isLoading ? _react3.default.createElement(
                    'p',
                    { className: 'loading' },
                    '\u52A0\u8F7D\u4E2D...'
                ) : null,
                _react3.default.createElement(_ImageGallery2.default, { images: photoes.slice(1), isShow: isShowImageGallery, startIndex: imageGalleryIndex })
            );
        }
    }]);
    return Photo;
}(_react2.Component), _class.defaultProps = {
    photoes: [],
    page: 1,
    allPage: 0
}, _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.onscroll = function (e) {
        e = e || window.event;
        var _scrollTop = window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (_scrollTop >= _this4.headerDom.offsetHeight - _this4.blogNavDom.offsetHeight) {
            _this4.blogNavDom.classList.remove('blog-photoes-header');
        } else {
            _this4.blogNavDom.classList.add('blog-photoes-header');
        }

        var _state2 = _this4.state,
            page = _state2.page,
            allPage = _state2.allPage;

        if (_scrollTop + document.documentElement.clientHeight > _this4.photoLayoutDom.offsetHeight - 150) {
            page < allPage && _this4.getPhotos(page + 1);
        }
    };

    this.selectPhoto = function (e, data) {
        _this4.setState({
            isShowImageGallery: true,
            imageGalleryIndex: data.index
        });
    };
}, _temp));

exports.default = Photo;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=7.c39a0602.js.map