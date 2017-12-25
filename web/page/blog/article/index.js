import React, { Component } from 'react';
import Axios from 'axios';
import Moment from 'moment';
import Icon from '../../../components/Icon';
import Comments from '../Comments';

Moment.locale('zh-cn');

export default class Article extends Component {
    constructor(props) {
        super(props);
        const { article, comments } = props;
        this.state = {
            article,
            comments
        };
    }

    componentWillMount() {
        const { match: {params} } = this.props;
        const { article } = this.state;
        if (!article || article.id != params.id) {
            Axios.get(`/api/get/article/${params.id}`)
                .then( res => {
                    let resData = res.data;
                    this.setState({
                        article: resData.article
                    })
                })

            Axios.get(`/api/get/comments?articleid=${params.id}`)
                .then( res => {
                    let resData = res.data;
                    this.setState({
                        comments: resData.comments
                    })
                })
        }
    }

    render() {
        const { article, comments } = this.state;
        const { match: {params} } = this.props;
        let _article = article || {};
        return (
            <div className="blog-article">
                <article className='blog-article-body'>
                    <h2 className="article-title"><p><em>{_article.title}</em></p></h2>
                    <p className="article-desc">
                        <span><Icon type='date' /> {Moment(_article.createTime).format('LL')}</span>
                        { _article.tags && _article.tags.length ? <span className="ml"><Icon type='cc-tag' /> {_article.tags.map( tag => tag.name + ' ')}</span> : null }
                        <span className="ml"><Icon type='visit' /> {_article.visited || 0}</span>
                    </p>
                    <div className="article-content" dangerouslySetInnerHTML={ {__html: _article.htmlContent} } />
                </article>
                <Comments articleid={params.id} comments={comments} />
            </div>
        )
    }
}