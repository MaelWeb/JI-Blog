import { tpl, position } from '../util';
// import './index.less';

const _tipsTpl = '<div class="toast toast-<%=type%> toast-dismissible tc" id="<%=id%>" >' +
        '<button type="button" class="close" hidden><span aria-hidden="true">×</span></button>' +
        '<%=content%>' +
        '</div>';


class Toast {
    constructor() {
        this.defaulOpts = {
            content: '',
            stayTime: 3000,
            type: 'info',
            callback: function() {}
        };

        this.toasts = [];
    }

    info(options) {
        let _options = typeof options === 'object' ? Object.assign({}, this.defaulOpts, options) : this.defaulOpts;

        if ( typeof options === 'string') {
            _options.content = options;
        }

        _options.type = 'info';
        _options.id = +new Date();

        this.creat(_options);
    }

    danger(options) {
        let _options = typeof options === 'object' ? Object.assign({}, this.defaulOpts, options) : this.defaulOpts;

        if ( typeof options === 'string') {
            _options.content = options;
        }

        _options.type = 'danger';
        _options.id = +new Date();

        this.creat(_options);
    }

    warn(options) {
        let _options = typeof options === 'object' ? Object.assign({}, this.defaulOpts, options) : this.defaulOpts;

        if ( typeof options === 'string') {
            _options.content = options;
        }

        _options.type = 'warning';
        _options.id = +new Date();

        this.creat(_options);
    }

    creat(options) {
        let html = tpl(_tipsTpl, options);
        document.body.insertAdjacentHTML('beforeend', html);

        let length = this.toasts.push(document.getElementById(options.id)),
            dom = this.toasts[length - 1];

        dom.classList.add('bouncein');
        position(dom, length, this.toasts);

        dom.closeTimeOut = setTimeout( () => {
            this.close(dom);
        }, options.stayTime);
    }

    close(el) {
        el.classList.add('fadeout');
        clearTimeout(el.closeTimeOut);
        setTimeout( () => {
            this.toasts = this.toasts.filter(t => t != el);
            el.parentNode.removeChild(el);
        }, 500)
    }
}

let _toast = new Toast();
export default _toast;