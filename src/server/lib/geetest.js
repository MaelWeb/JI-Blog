import SuperAgent from 'superagent';
import crypto from "crypto";
import config from "../config";
import pkg from '../../../package.json';

const defaultConfig = {
    PROTOCOL: 'http://',
    API_SERVER: 'api.geetest.com',
    VALIDATE_PATH: '/validate.php',
    REGISTER_PATH: '/register.php',
    TIMEOUT: 2000,
    NEW_CAPTCHA: true,
    JSON_FORMAT: 1
};

const md5 = function(str) {
    return crypto
        .createHash('md5')
        .update(String(str))
        .digest('hex');
};
const randint = function(from, to) {
    // range: from ~ to
    return Math.floor(Math.random() * (to - from + 1) + from);
};

class GeeTest {
    constructor(config) {
        if (typeof config.geetest_id !== 'string') {
            throw new Error('Geetest ID Required');
        }
        if (typeof config.geetest_key !== 'string') {
            throw new Error("Geetest KEY Required");
        }
        if (typeof config.protocol === 'string') {
            this.PROTOCOL = config.protocol;
        }
        if (typeof config.api_server === 'string') {
            this.API_SERVER = config.api_server;
        }
        if (typeof config.timeout === 'number') {
            this.TIMEOUT = config.timeout;
        }

        this.geetest_id = config.geetest_id;
        this.geetest_key = config.geetest_key;
    }

    register(data) {
        data = data || {};
        return SuperAgent.get(
            defaultConfig.PROTOCOL
        + defaultConfig.API_SERVER
        + defaultConfig.REGISTER_PATH,
        )
            .query({
                gt: this.geetest_id,
                json_format: defaultConfig.JSON_FORMAT,
                sdk: 'Node_' + pkg.version,
                client_type: data.client_type || 'unknown',
                ip_address: data.ip_address || 'unknown'
            })
            .timeout({
                deadline: this.TIMEOUT
            })
            .then(res => {
        let resData = {};
        try {
          resData = JSON.parse(res.text);
        } catch (e) {}
        if (res.status != 200 || !resData.challenge) {
          const challenge = this._make_challenge();
          return {
            code: 201,
            data: {
              gt: this.geetest_id,
              new_captcha: defaultConfig.NEW_CAPTCHA,
              challenge,
            },
          };
        }
        const challenge = md5(resData.challenge + this.geetest_key);
                return {
                    code: 200,
          data: {
                        gt: this.geetest_id,
            new_captcha: defaultConfig.NEW_CAPTCHA,
                        challenge,
                    },
                };
      });
    }

    _validate(fallback, result, callback) {
        var challenge = result.challenge || result.geetest_challenge;
        const validate = result.validate || result.geetest_validate;
        let seccode = result.seccode || result.geetest_seccode;
        if (fallback) {
            if (md5(challenge) === validate) {
                callback(null, true);
            } else {
                callback(null, false);
            }
        } else {
            const hash = `${this.geetest_key}geetest${challenge}`;
            if (validate === md5(hash)) {
                request(
                    {
                        url: this.PROTOCOL + this.API_SERVER + this.VALIDATE_PATH,
                        method: 'POST',
                        timeout: this.TIMEOUT,
                        json: true,
                        form: {
                            gt: this.geetest_id,
                            seccode: seccode,
                            json_format: this.JSON_FORMAT
                        },
                    },
                    (err, res, data) => {
            if (err || !data || !data.seccode) {
              callback(err);
            } else {
              callback(null, data.seccode === md5(seccode));
            }
          }
                );
            } else {
                callback(null, false);
            }
        }
    }

    _make_challenge() {
        const rnd1 = randint(0, 90);
        var rnd2 = randint(0, 90);
        var md5_str1 = md5(rnd1);
        const md5_str2 = md5(rnd2);
        return md5_str1 + md5_str2.slice(0, 2);
    }
}

const _GeeTest = new GeeTest({
    geetest_id: config.geetest.ID,
    geetest_key: config.geetest.KEY
});

export default _GeeTest;
