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

}