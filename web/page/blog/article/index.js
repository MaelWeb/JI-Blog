import React, { Component } from 'react';
import Axios from 'axios';

export default class Article extends Component {
    constructor(props) {
        super(props);
        const { article } = props;
        this.state = {
            article
        };
    }

    componentWillMount() {
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

        this.props.setHeaderClass('blog-article-header');

    }

    componentWillUnmount() {
        this.props.setHeaderClass(null);
    }

    render() {
        const { article } = this.state;
        let _article = article || {};
        return (
            <div className="blog-article">
                <article>
                    <h2 className="article-title"><p><em>{_article.title}</em></p></h2>
                    <p className="article-desc">
                        <span>发布时间: {_article.createTime}</span>
                        { _article.tags && _article.tags.length ? <span className="ml">标签：{_article.tags.map( tag => tag.name + ' ')}</span> : null }
                    </p>
                    <div className="article-content" dangerouslySetInnerHTML={ {__html: _article.htmlContent} } />
                </article>
            </div>
        )
    }
}