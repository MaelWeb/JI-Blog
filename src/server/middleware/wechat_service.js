import config from '../config/';
import Superagent from 'superagent';
import crypto from 'crypto';

const wechat = config.wechat;

class WeChatService {
    constructor() {
        this.accessToken = null;
        this.jsApiTicket = null;
    }

    async _getAccessToken() {
        let now = +new Date();
        if (!this.accessToken || this.accessToken.expiresTime < now) {
            await Superagent.get(`${wechat.host}/cgi-bin/token`)
                .query({
                    grant_type: 'client_credential',
                    appid: wechat.appId,
                    secret: wechat.secret
                })
                .then(res => {
                    let result = JSON.parse(res.text);
                    if (!result.errcode) {
                        this.accessToken = {
                            token: result.access_token,
                            expiresTime: +new Date() + (result.expires_in - 200)
                        }
                    }
                });

            return this.accessToken ? this.accessToken.token : '';
        }

        return this.accessToken.token;
    }

    async _getJsApiTicket() {
        let now = +new Date();
        let access_token = await this._getAccessToken();

        if (!access_token ) return null;

        if (!this.jsApiTicket || this.jsApiTicket.expiresTime < now) {
            await Superagent.get(`${wechat.host}/cgi-bin/ticket/getticket`)
                .query({
                    type: 'jsapi',
                    access_token
                })
                .then(res => {
                    let result = JSON.parse(res.text);
                    if (result.errcode == 0) {
                        this.jsApiTicket = {
                            ticket: result.ticket,
                            expiresTime: +new Date() + (result.expires_in - 200)
                        }
                    }
                })

            return this.jsApiTicket ? this.jsApiTicket.ticket : '';
        }

        return this.jsApiTicket.ticket;
    }

    toQueryString = (obj) => Object.keys(obj)
        .filter(key => key !== 'sign' && obj[key] !== undefined && obj[key] !== '')
        .sort()
        .map(key => key + '=' + obj[key])
        .join('&')


    generateNoncestr = (length = 16) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let noncestr = '',
            maxPos = chars.length;
        while (length--) noncestr += chars[Math.random() * maxPos | 0];
        return noncestr;
    }

    async getApiSignature(params) {
        params.jsapi_ticket =  await this._getJsApiTicket();

        if (!params.jsapi_ticket) return null;

        let signStr = this.toQueryString(params);

        //创建加密类型
        const hashCode = crypto.createHash('sha1');
        //对传入的字符串进行加密
        const sign = hashCode.update(signStr, 'utf8').digest('hex');
        //将 sha1 加密的签名字符串返回
        return sign;
    }
}

let _WeChatService = new WeChatService();

export default _WeChatService;