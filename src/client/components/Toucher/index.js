/*
 * react toucher (移动端手势库)
 *
 * 支持事件：singleTap(轻击), doubleTap(双击), longTap(长按), swipeUp(上划), swipeRight(右划), swipeDown(下划), swipeleft(左划)
 *
 * Use: <Toucher onSwipeLeft={ this.swipeLeft.bind(this) } ></Toucher>
 *
 * create by mael
 */
import React from 'react';
import { findDOMNode } from 'react-dom';

export default class Toucher extends React.Component {
    constructor(props) {
        super(props);

        // 轻击开始时间
        this.touchStartTime = 0;

        // 记录上一次点击时间
        this.lastTouchTime = 0;

        // 记录初始轻击的位置
        this.x1, this.y1, this.x2, this.y2;

        // 轻击事件的延时器
        this.touchDelay;

        // 测试长按事件的延时器
        this.longTap;

        // 记录当前事件是否已为等待结束的状态
        this.isActive = false;
        // 记录有坐标信息的事件
        this.eventMark = null;

        // 事件堆
        this._events = {};
    }

    componentDidMount() {
        this.DOM = findDOMNode(this);
        this._events = this.props;
        this.eventListener();
    }

    eventListener() {
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

    actionOver(e) {
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
    event_callback(name, e) {
    // 优先使用自定义的touches（目前是为了解决touchEnd无touches的问题）
        var touches = e.plugTouches || e.touches;

        const touch = touches.length ? touches[0] : {};

        var newE = {
            type: name,
            target: this.DOM,
      pageX: touch.pageX,
            pageY: touch.pageY,
      clientX: touch.clientX || 0,
            clientY: touch.clientY || 0,
    };
        // 为swipe事件增加交互初始位置及移动距离
        if (name.match(/^onSwipe/) && e.plugStartPosition) {
            newE.startX = e.plugStartPosition.pageX;
            newE.startY = e.plugStartPosition.pageY;
            newE.moveX = newE.pageX - newE.startX;
            newE.moveY = newE.pageY - newE.startY;
        }
        // 执行绑定事件的回调，并记录返回值
        // var call_result = fn.call(dom, newE);
        const call_result = this._events[name](newE);
        // 若返回false，阻止浏览器默认事件
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
    EMIT(eventName, e) {
        this._events = this._events || this.props;
        // 事件堆无该事件，结束触发
        if (!this._events[eventName]) {
            return;
        }

        // 从事件源：target开始向上冒泡
        var target = e.target;
        while (1) {
            // 若已经冒泡至顶，检测顶级绑定，结束冒泡
            if (target == this.DOM || !target) {
                let callback = this._events[eventName];
                this.event_callback(eventName, e);
                return;
            }

            // 向上冒泡
            target = target.parentNode;
        }
    }

    isSingleTap() {
        this.actionOver();
        this.EMIT('onSingleTap', this.eventMark);
    }

    touchStart(e) {
        if (!e.touches) return;
        // 缓存事件
        this.eventMark = e;
        this.x1 = e.touches[0].pageX;
        this.y1 = e.touches[0].pageY;
        this.x2 = 0;
        this.y2 = 0;
        this.isActive = true;
        this.touchStartTime = new Date();
        this.EMIT('onSwipeStart', e);
        // 检测是否为长按
        clearTimeout(this.longTap);

        const _this = this;
        this.longTap = setTimeout(() => {
      _this.actionOver(e);
      // 断定此次事件为长按事件
      _this.EMIT("onLongTap", e);
    }, 500);
    }

    touchend(e) {
    // touchend中，拿不到坐标位置信息，故使用全局保存下数据
        e.plugStartPosition = this.eventMark.plugStartPosition;
        e.plugTouches = this.eventMark.touches;
        this.EMIT('onSwipeEnd', e);
        if (!this.isActive) {
            return;
        }
        var now = new Date();
        // 若未监听doubleTap，直接响应
        if (!this._events.doubleTap || this._events.doubleTap.length == 0) {
            this.isSingleTap();
        } else if (now - this.lastTouchTime > 200) {
            // 延迟响应
            this.touchDelay = setTimeout(this.isSingleTap, 190);
        } else {
            clearTimeout(this.touchDelay);
            this.actionOver(e);
            // 断定此次事件为连续两次轻击事件
            this.EMIT('onDoubleTap', eventMark);
        }
        this.lastTouchTime = now;
    }

    touchmove(e) {
        if (!e.touches) return;
        // 缓存事件
        this.eventMark = e;
        // 在原生事件基础上记录初始位置（为swipe事件增加参数传递）
        e.plugStartPosition = {
            pageX: this.x1,
            pageY: this.y1
        };

        // 断定此次事件为移动事件
        this.EMIT('onSwipe', e);
        if (!this.isActive) {
            return;
        }
        this.x2 = e.touches[0].pageX;
        this.y2 = e.touches[0].pageY;
        if (Math.abs(this.x1 - this.x2) > 2 || Math.abs(this.y1 - this.y2) > 2) {
            // 断定此次事件为移动手势
            var direction = this.swipeDirection(this.x1, this.x2, this.y1, this.y2);
            this.EMIT('onSwipe' + direction, e);
        } else {
            // 断定此次事件为轻击事件
            this.isSingleTap();
        }
        this.actionOver(e);
    }

    swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
            ? x1 - x2 > 0
                ? 'Left'
                : 'Right'
            : y1 - y2 > 0
                ? 'Up'
                : 'Down';
    }

    render() {
        const { children, className, style, ...others } = this.props;
        return (
            <div className={className} style={style}>{ children }</div>
        );
    }
}
