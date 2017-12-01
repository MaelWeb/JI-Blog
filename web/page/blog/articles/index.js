import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import classNames from 'classnames';

export default class Articles extends Component {
    constructor(props) {
        super(props);
        const { articles, tags, curTagId } = props;
        this.state = {
            articles,
            tags,
            curTagId
        };
    }

    componentDidMount() {
        const { articles, tags } = this.state;

        if (!articles || !tags) {
            this.getArticles();
            this.getAllTags();
        }
    }

    getArticles = (tagid)=> {
        if ( !this.state.curTagId || (tagid != this.state.curTagId))
            Axios.get('/api/get/publish/articles', {
                params: {
                    tag: tagid || ''
                }
            })
            .then( res => {
                let resData = res.data;
                this.setState({
                    articles: resData.articles,
                    curTagId: tagid
                })
            })
    }

    getAllTags = () => {
        Axios.get('/api/get/alltags')
            .then( res => {
                let resData = res.data;
                this.setState({
                    tags: resData.tags
                })
            })
    }

    render() {
        const { articles, tags, curTagId } = this.state;
        return (
            <div className="blog-articles-layout">
                <div className="one">
                    <img src="http://image.wufazhuce.com/FoBEubfSGAroMoMdI_jx0nH0gh7y" />
                    <div className="text"><p className='nowrapmulti'>长大了一些的我们，开始懂得不能再这样轻易哭泣，也拥有了更复杂的情感，学着在各种说不清原因的行为里作出抉择。那一天，我们也陷入了选择的困境，但我们对这种迷失毫无察觉。</p></div>
                </div>
                <div className="blog-tags">
                    <Link to={{pathname: '/'}} onClick={ () => { this.getArticles() } } className={ classNames("tag", {'tag-active': !curTagId}) } >所有文章</Link>
                    { tags && tags.length ? tags.map( tag => <Link to={{pathname: '/', search: `?tag=${tag.id}`}} onClick={ () => { this.getArticles(tag.id) } } className={ classNames("tag", {'tag-active': curTagId == tag.id}) } key={tag.id} >{tag.name}</Link>) : null}
                </div>
                <div className="blog-articles-list">
                    <ul>
                        {articles && articles.length ? articles.map( (article, index)=> <li className="article-tiem" key={article.id}><Link to={`/article/${article.id}`} >
                            <span className="article-num">{( index + 1)}</span>
                            <h3 className='nowrapmulti'>{article.title}</h3>
                        </Link></li>) : null}
                    </ul>
                </div>
            </div>
        )
    }
}