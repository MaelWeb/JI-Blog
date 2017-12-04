import React, { Component } from 'react';
import Axios from 'axios';
import Moment from 'moment';
import Icon from '../../../components/Icon';

Moment.locale('zh-cn');

export default class Article extends Component {
    constructor(props) {
        super(props);
        const { article } = props;
        this.state = {
            article
        };
    }

    componentDidMount() {
        const { match: {params} } = this.props;
        if (!this.state.article) {
            Axios.get(`/api/get/article/${params.id}`)
            .then( res => {
                let resData = res.data;
                this.setState({
                    article: resData.article
                })
            })
        }
    }

    render() {
        const { article } = this.state;
        let _article = article || {};
        return (
            <div className="blog-article">
                <article className='blog-article-body'>
                    <h2 className="article-title"><p><em>{_article.title}</em></p></h2>
                    <p className="article-desc">
                        <span>发布时间: {Moment(_article.createTime).format('LL')}</span>
                        { _article.tags && _article.tags.length ? <span className="ml">标签：{_article.tags.map( tag => tag.name + ' ')}</span> : null }
                    </p>
                    <div className="article-content" dangerouslySetInnerHTML={ {__html: _article.htmlContent} } />
                </article>
                <article className="blog-comment">
                    <div className="comment-input clearfix">
                        <textarea name="" rows="4"></textarea>
                        <button>发布</button>
                    </div>

                    <div className="comment-list">
                        <div className="comment-item clearfix">
                            <div className="comment-avatar fl"><Icon type='avatar-code' /></div>
                            <div className="comment-body fl">
                                <h6>浮生记<small>34分钟前</small></h6>
                                <blockquote>@mael: 你到时过来试一试呀</blockquote>
                                <p>我就是试试</p>
                            </div>
                        </div>
                        <div className="comment-item clearfix">
                            <div className="comment-avatar fl"><Icon type='avatar-code' /></div>
                            <div className="comment-body fl">
                                <h6>浮生记<small>34分钟前</small></h6>
                                <blockquote>@mael: 你到时过来试一试呀</blockquote>
                                <p>我就是试试</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}