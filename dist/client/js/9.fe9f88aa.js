(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "../node_modules/react-measure/lib/Measure.js":
/*!****************************************************!*\
  !*** ../node_modules/react-measure/lib/Measure.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withContentRect = __webpack_require__(/*! ./with-content-rect */ "../node_modules/react-measure/lib/with-content-rect.js");

var _withContentRect2 = _interopRequireDefault(_withContentRect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Measure = (0, _withContentRect2.default)()(function Measure(_ref) {
  var measure = _ref.measure,
      measureRef = _ref.measureRef,
      contentRect = _ref.contentRect,
      children = _ref.children;

  return children({ measure: measure, measureRef: measureRef, contentRect: contentRect });
});

Measure.displayName = 'Measure';
Measure.propTypes.children = _propTypes2.default.func;

exports.default = Measure;

/***/ }),

/***/ "../node_modules/react-measure/lib/get-content-rect.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-measure/lib/get-content-rect.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getContentRect(node, types) {
  var calculations = {};

  if (types.indexOf('client') > -1) {
    calculations.client = {
      top: node.clientTop,
      left: node.clientLeft,
      width: node.clientWidth,
      height: node.clientHeight
    };
  }

  if (types.indexOf('offset') > -1) {
    calculations.offset = {
      top: node.offsetTop,
      left: node.offsetLeft,
      width: node.offsetWidth,
      height: node.offsetHeight
    };
  }

  if (types.indexOf('scroll') > -1) {
    calculations.scroll = {
      top: node.scrollTop,
      left: node.scrollLeft,
      width: node.scrollWidth,
      height: node.scrollHeight
    };
  }

  if (types.indexOf('bounds') > -1) {
    var rect = node.getBoundingClientRect();
    calculations.bounds = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  }

  if (types.indexOf('margin') > -1) {
    var styles = getComputedStyle(node);
    calculations.margin = {
      top: parseInt(styles.marginTop),
      right: parseInt(styles.marginRight),
      bottom: parseInt(styles.marginBottom),
      left: parseInt(styles.marginLeft)
    };
  }

  return calculations;
}

exports.default = getContentRect;

/***/ }),

/***/ "../node_modules/react-measure/lib/get-types.js":
/*!******************************************************!*\
  !*** ../node_modules/react-measure/lib/get-types.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTypes;
var types = ['client', 'offset', 'scroll', 'bounds', 'margin'];

function getTypes(props) {
  var allowedTypes = [];
  types.forEach(function (type) {
    if (props[type]) {
      allowedTypes.push(type);
    }
  });
  return allowedTypes;
}

/***/ }),

/***/ "../node_modules/react-measure/lib/react-measure.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-measure/lib/react-measure.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withContentRect = exports.default = undefined;

var _Measure = __webpack_require__(/*! ./Measure */ "../node_modules/react-measure/lib/Measure.js");

var _Measure2 = _interopRequireDefault(_Measure);

var _withContentRect = __webpack_require__(/*! ./with-content-rect */ "../node_modules/react-measure/lib/with-content-rect.js");

var _withContentRect2 = _interopRequireDefault(_withContentRect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Measure2.default;
exports.withContentRect = _withContentRect2.default;

/***/ }),

/***/ "../node_modules/react-measure/lib/with-content-rect.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-measure/lib/with-content-rect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = __webpack_require__(/*! resize-observer-polyfill */ "../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _getTypes = __webpack_require__(/*! ./get-types */ "../node_modules/react-measure/lib/get-types.js");

var _getTypes2 = _interopRequireDefault(_getTypes);

var _getContentRect = __webpack_require__(/*! ./get-content-rect */ "../node_modules/react-measure/lib/get-content-rect.js");

var _getContentRect2 = _interopRequireDefault(_getContentRect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withContentRect(types) {
  return function (WrappedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(WithContentRect, _Component);

      function WithContentRect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WithContentRect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithContentRect.__proto__ || Object.getPrototypeOf(WithContentRect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          contentRect: {
            entry: {},
            client: {},
            offset: {},
            scroll: {},
            bounds: {},
            margin: {}
          }
        }, _this.measure = function (entries) {
          var contentRect = (0, _getContentRect2.default)(_this._node, types || (0, _getTypes2.default)(_this.props));

          if (entries) {
            contentRect.entry = entries[0].contentRect;
          }

          _this.setState({ contentRect: contentRect });

          if (typeof _this.props.onResize === 'function') {
            _this.props.onResize(contentRect);
          }
        }, _this._handleRef = function (node) {
          if (_this._resizeObserver) {
            if (node) {
              _this._resizeObserver.observe(node);
            } else {
              _this._resizeObserver.disconnect(_this._node);
            }
          }
          _this._node = node;

          if (typeof _this.props.innerRef === 'function') {
            _this.props.innerRef(node);
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(WithContentRect, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this._resizeObserver = new _resizeObserverPolyfill2.default(this.measure);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this._resizeObserver && this._node) {
            this._resizeObserver.disconnect(this._node);
          }
          this._resizeObserver = null;
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              innerRef = _props.innerRef,
              onResize = _props.onResize,
              props = _objectWithoutProperties(_props, ['innerRef', 'onResize']);

          return (0, _react.createElement)(WrappedComponent, _extends({}, props, {
            measureRef: this._handleRef,
            measure: this.measure,
            contentRect: this.state.contentRect
          }));
        }
      }]);

      return WithContentRect;
    }(_react.Component), _class.propTypes = {
      client: _propTypes2.default.bool,
      offset: _propTypes2.default.bool,
      scroll: _propTypes2.default.bool,
      bounds: _propTypes2.default.bool,
      margin: _propTypes2.default.bool,
      innerRef: _propTypes2.default.func,
      onResize: _propTypes2.default.func
    }, _temp2;
  };
}

exports.default = withContentRect;

/***/ }),

/***/ "../node_modules/react-photo-gallery/dist/react-photo-gallery.es.js":
/*!**************************************************************************!*\
  !*** ../node_modules/react-photo-gallery/dist/react-photo-gallery.es.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ "../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");




var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var imgWithClick = { cursor: 'pointer' };

var Photo = function Photo(_ref) {
  var index = _ref.index,
      onClick = _ref.onClick,
      photo = _ref.photo,
      margin = _ref.margin,
      direction = _ref.direction,
      top = _ref.top,
      left = _ref.left;

  var imgStyle = { margin: margin };
  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  var handleClick = function handleClick(event) {
    onClick(event, { photo: photo, index: index });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', _extends({
    style: onClick ? _extends({}, imgStyle, imgWithClick) : imgStyle
  }, photo, {
    onClick: onClick ? handleClick : null
  }));
};

var photoPropType = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])
});

Photo.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  photo: photoPropType.isRequired,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  top: function top(props) {
    if (props.direction === 'column' && typeof props.top !== 'number') {
      return new Error('top is a required number when direction is set to `column`');
    }
  },
  left: function left(props) {
    if (props.direction === 'column' && typeof props.left !== 'number') {
      return new Error('left is a required number when direction is set to `column`');
    }
  },
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

function round(value, decimals) {
  if (!decimals) decimals = 0;
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

// return two decimal places rounded number
function ratio(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return round(width / height, 2);
}

// takes the Gallery's photos array, width of the container,
// margin between photos Gallery prop, and columns Gallery prop.
// calculates, sizes based on columns and returns the photos array
// with new height/width props in each object
function computeSizes(_ref2) {
  var photos = _ref2.photos,
      columns = _ref2.columns,
      width = _ref2.width,
      margin = _ref2.margin;

  if (!width) {
    return [];
  }
  // divide photos over rows, max cells based on `columns`
  // effectively resulting in [[0, 1, 2], [3, 4, 5], [6, 7]]
  var rows = photos.reduce(function (acc, cell, idx) {
    var row = Math.floor(idx / columns);
    acc[row] = acc[row] ? [].concat(toConsumableArray(acc[row]), [cell]) : [cell]; // eslint-disable-line no-param-reassign
    return acc;
  }, []);
  // calculate total ratio of each row, and adjust each cell height and width
  // accordingly.
  var ratios = [];
  var rowsWithSizes = rows.map(function (row, rowIndex) {
    var totalRatio = row.reduce(function (result, photo) {
      return result + ratio(photo);
    }, 0);
    var rowWidth = width - row.length * (margin * 2);

    // save total ratio of each row
    if (rowIndex !== rows.length - 1) ratios.push(totalRatio);

    // assign height
    // 3 scenarios...
    //  if its a regular row where row.length === columns
    //    rowWidth / totalRatio
    //  if columns > row.length
    //    if !lastRow
    //      use the average aspect ratio of previous rows
    //    else (all photos are on a single row)
    //      ...
    var height = row.length === columns ? rowWidth / totalRatio : photos.length < columns ? rowWidth / totalRatio * (row.length / columns) : rowWidth / (ratios.reduce(function (acc, item) {
      return acc + item;
    }, 0) / (rows.length - 1));

    return row.map(function (photo) {
      return _extends({}, photo, {
        height: round(height, 1),
        width: round(height * ratio(photo), 1)
      });
    });
  });
  return rowsWithSizes.reduce(function (acc, row) {
    return [].concat(toConsumableArray(acc), toConsumableArray(row));
  }, []);
}
function computeSizesColumns(_ref3) {
  var photos = _ref3.photos,
      columns = _ref3.columns,
      width = _ref3.width,
      margin = _ref3.margin;

  // calculate each colWidth based on total width and column amount
  var colWidth = (width - margin * 2 * columns) / columns;

  // map through each photo to assign adjusted height and width based on colWidth
  var photosWithSizes = photos.map(function (photo) {
    var newHeight = photo.height / photo.width * colWidth;
    return _extends({}, photo, {
      width: round(colWidth, 1),
      height: round(newHeight, 1)
    });
  });

  // store all possible left positions
  // and current top positions for each column
  var colLeftPositions = [];
  var colCurrTopPositions = [];
  for (var i = 0; i < columns; i++) {
    colLeftPositions[i] = round(i * (colWidth + margin * 2), 1);
    colCurrTopPositions[i] = 0;
  }

  // map through each photo, then reduce thru each "column"
  // find column with the smallest height and assign to photo's 'top'
  // update that column's height with this photo's height
  var photosPositioned = photosWithSizes.map(function (photo) {
    var smallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item < colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);

    photo.top = colCurrTopPositions[smallestCol];
    photo.left = colLeftPositions[smallestCol];
    colCurrTopPositions[smallestCol] = colCurrTopPositions[smallestCol] + photo.height + margin * 2;

    // store the tallest col to use for gallery height because of abs positioned elements
    var tallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item > colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);
    photo.containerHeight = colCurrTopPositions[tallestCol];
    return photo;
  });
  return photosPositioned;
}

var Gallery = function (_React$Component) {
  inherits(Gallery, _React$Component);

  function Gallery() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Gallery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      containerWidth: 0
    }, _this.handleClick = function (event, _ref2) {
      var index = _ref2.index;
      var _this$props = _this.props,
          photos = _this$props.photos,
          onClick = _this$props.onClick;

      onClick(event, {
        index: index,
        photo: photos[index],
        previous: photos[index - 1] || null,
        next: photos[index + 1] || null
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Gallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.observer = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](function (entries) {
        // only do something if width changes
        var newWidth = entries[0].contentRect.width;
        if (_this2.state.containerWidth !== newWidth) {
          _this2.setState({ containerWidth: Math.floor(newWidth) });
        }
      });
      this.observer.observe(this._gallery);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.observer.disconnect();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var containerWidth = this.state.containerWidth;
      // no containerWidth until after first render with refs, skip calculations and render nothing
      if (!containerWidth) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { ref: function ref(c) {
          return _this3._gallery = c;
        } });
      var _props$ImageComponent = this.props.ImageComponent,
          ImageComponent = _props$ImageComponent === undefined ? Photo : _props$ImageComponent;
      // subtract 1 pixel because the browser may round up a pixel

      var _props = this.props,
          margin = _props.margin,
          onClick = _props.onClick,
          direction = _props.direction;
      var columns = this.props.columns;

      // set default breakpoints if user doesn't specify columns prop

      if (columns === undefined) {
        columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;
      }
      var photos = this.props.photos;
      var width = containerWidth - 1;
      var galleryStyle = void 0,
          thumbs = void 0;

      if (direction === 'row') {
        galleryStyle = { display: 'flex', flexWrap: 'wrap', flexDirection: 'row' };
        thumbs = computeSizes({ width: width, columns: columns, margin: margin, photos: photos });
      }
      if (direction === 'column') {
        galleryStyle = { position: 'relative' };
        thumbs = computeSizesColumns({ width: width, columns: columns, margin: margin, photos: photos });
        galleryStyle.height = thumbs[thumbs.length - 1].containerHeight;
      }
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'react-photo-gallery--gallery' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { ref: function ref(c) {
              return _this3._gallery = c;
            }, style: galleryStyle },
          thumbs.map(function (photo, index) {
            var left = photo.left,
                top = photo.top,
                containerHeight = photo.containerHeight,
                rest = objectWithoutProperties(photo, ['left', 'top', 'containerHeight']);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageComponent, {
              key: photo.key || photo.src,
              margin: margin,
              index: index,
              photo: rest,
              direction: direction,
              left: left,
              top: top,
              onClick: onClick ? _this3.handleClick : null
            });
          })
        )
      );
    }
  }]);
  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Gallery.propTypes = {
  photos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(photoPropType).isRequired,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  ImageComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

Gallery.defaultProps = {
  margin: 2,
  direction: 'row'
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);


/***/ })

}]);
//# sourceMappingURL=9.fe9f88aa.js.map