import './articles.less';
import Axios from 'axios';
class _Articles {
    getArticles () {
        Axios.get('/api/get/all/articles')
            .then( res => {
                // let html = articleTpl({article: res.data.article});
                document.getElementById('blog_content').innerHTML = html;
            })
    }

    articleDetail(id) {
        Axios.get(`/api/get/article/${id}`)
            .then( res=> {
                let html = articleTpl({article: res.data.article});

                document.getElementById('blog_content').innerHTML = html;
            })
    }
}
let Articles = new _Articles();
export default Articles;