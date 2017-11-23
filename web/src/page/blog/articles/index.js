import './articles.less';
import Axios from 'axios';

export default class Articles {
    getArticlesByTag () {
        Axios.get('/api/get/all/articles')
    }
}