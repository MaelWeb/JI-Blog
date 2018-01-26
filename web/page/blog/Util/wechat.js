import Axios from 'axios';
class WeChat {
    constructor() {

    }

    isWeixinBrowser() {
        return /micromessenger/i.test(navigator.userAgent.toLowerCase());
    }

    loadJs() {
        return new Promise((resolve, reject) => {
            if (window.wx) {
                resolve(true);
            } else {
                let script = document.createElement("script");
                script.onload = () => {
                    resolve(true);
                };
                script.onerror = () => {
                    reject();
                };
                script.src = 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js';
                document.body.appendChild(script);
            }
        });
    }

    fetchConfig() {
        return Axios.get('/api/wechatconfig', {
                params: {
                    url: window.location.href
                }
            })
            .then(res => {
                let resData = res.data;

                if (resData.code == 200) return resData.data;

                return null;
            })
    }

    async configShare(params) {
        if (!this.isWeixinBrowser()) return;
        await this.loadJs();
        let configData = await this.fetchConfig();

        if (configData) {
            window.wx.config({
                debug: false,
                appId: configData.appId,
                timestamp: configData.timestamp,
                nonceStr: configData.noncestr,
                signature: configData.signature,
                jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
            });

            window.wx.ready(() => {
                window.wx.onMenuShareAppMessage({
                    ...params
                });
                window.wx.onMenuShareTimeline({
                    ...params
                });
            })
        }
    }
}

let _Wechat = new WeChat();

export default _Wechat;