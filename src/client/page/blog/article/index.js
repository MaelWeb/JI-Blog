import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Moment from 'dayjs';
import Icon from '../../../components/Icon';
import Comments from '../Comments';
import ClassNames from 'classnames';
import ArticleLoading from './article-loading';

const WEIBOKEY = '';
export default class Article extends Component {
    constructor(props) {
        super(props);
        const { article, commentsData } = props;

        this.state = {
            article,
            commentsData
        };

    }

    static defaultProps = {
        commentsData: {}
    };

    static defaultPropTypes = {
        commentsData: PropTypes.object
    };

    componentWillMount() {
        const { match: { params } } = this.props;
        const { article } = this.state;
        if (!article || article.id != params.id) {
            Axios.get(`/api/get/article/${params.id}`, {
                    params: {
                        filter: "web"
                    }
                })
                .then(res => {
                    let resData = res.data;
                    document.title = `${resData.article.title}  - 「JI · 记小栈」`;
                    this.setState({
                        article: resData.article
                    });
                })

            Axios.get(`/api/get/comments?articleid=${params.id}`)
                .then(res => {
                    let resData = res.data;
                    this.setState({
                        commentsData: resData
                    })
                })
        }
    }

    componentDidMount() {
        const { article } = this.state;
        if (article) {
            document.title = `${article.title}  - 「JI · 记小栈」`;
        }
    }

    commentDidUpdate() {
        console.log(11);
    }

    render() {
        let { article, commentsData } = this.state;
        const { match: { params } } = this.props;
        let _article = article || {};
        let cls = ClassNames('blog-article-layout', {
            [`blog-article-${_article.category && _article.category.toLocaleLowerCase()}`]: _article.category
        });
        return (
            <div className={cls} >
            <div className="blog-article-layout-wrap">
                <h2 className="article-title"><p>
                    <em>{_article.title}</em>
                </p></h2>
                { article ? <article className='blog-article-body'>
                    {/** _article.category != "TRAVEL" ? <h2 className="article-title"><p><em>{_article.title}</em></p></h2> : null **/}
                    <div className="article-content" dangerouslySetInnerHTML={ {__html: _article.htmlContent } } />
                    <div className='article-tips'>
                        <p className="article-desc">
                            <span>写于 {Moment(_article.createTime).format('YYYY年MM月DD日')}</span>
                            { _article.tags && _article.tags.length ? <span className="ml"><Icon type='cc-tag' /> {_article.tags.map( tag => tag.name + ' ')}</span> : null }
                            <span className="ml"><Icon type='visit' /> {_article.visited || 0}</span>
                        </p>
                        <p>如非特别注明，文章皆为原创。</p>
                        <p><b>转载请注明出处：</b> <a href={`https://www.liayal.com/article/${_article.id}`}>{`https://www.liayal.com/article/${_article.id}`}</a></p>
                        <p className='article-ad'>寒冬时节，我司依然招人，感兴趣点<a href='https://www.liayal.com/article/5c6d0889c0ab13505eeefab1'>这里</a></p>
                    </div>
                </article> : <ArticleLoading />}
                <section className='article-share-box'>
                    <a href={`https://service.weibo.com/share/share.php?url=${encodeURIComponent(`https://www.liayal.com/article/${_article.id}`)}&title=${encodeURIComponent(_article.title)}&pic=${encodeURIComponent(_article.banner || '')}&appkey=${WEIBOKEY}` } className="share-icon" title="share on weibo">
                        <Icon type="weibo" />
                    </a>
                    <a href={ `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${encodeURIComponent(`https://www.liayal.com/article/${_article.id}`)}&title=${encodeURIComponent(_article.title)}&desc=${encodeURIComponent(_article.abstract)}&summary=${encodeURIComponent(_article.abstract)}&site=${encodeURIComponent('//hynal.com')}` } className="share-icon" title="share on qzone">
                        <Icon type="qzone" />
                    </a>
                    <a href={ `http://shuo.douban.com/!service/share?href=${encodeURIComponent(`https://www.liayal.com/article/${_article.id}`)}&name=${encodeURIComponent(_article.title)}&text=${encodeURIComponent(_article.abstract)}&image=${encodeURIComponent(_article.banner || '')}&starid=0&aid=0&style=11` } className="share-icon" title="share on douban">
                        <Icon type="douban" />
                    </a>
                </section>
                <Comments articleid={params.id} commentsData={commentsData} />
            </div></div>
        )
    }
}