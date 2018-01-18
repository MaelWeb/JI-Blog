import Superagent from 'superagent';
import Cheerio from 'cheerio';

export async function getOneContent(ctx) {
    let result = {
        code: 200,
        message: '',
        data:[]
    };

    await Superagent.get("http://wufazhuce.com")
        .then(function(res) {
            if (!res) {
                result = {
                    code: 500,
                    message: err,
                    data: []
                };
            }
            let $ = Cheerio.load(res.text);

            let data = [];
            $('#carousel-one .item').each(function(idx, element) {
                let $element = $(element);

                data.push({
                    imgUrl: $element.find('.fp-one-imagen').attr('src'),
                    text: $element.find('.fp-one-cita a').text()
                })
            });

            result['data'] = data;
        });

    ctx.body = result;
    return result;
}


export async function pushToBaidu(ctx) {
    const postData = ctx.request.body;
    let result = {
        success: 0,
        message: '',
    };

    await Superagent.post(`http://data.zz.baidu.com/urls?site=www.liayal.com&token=kdDIO6Gl2EqQOofj`)
        .send(postData.url)
        .then(function (res ){
            result = res.text;
        });

    ctx.body = result;
    return result;
}