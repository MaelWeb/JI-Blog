import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import Axios from 'axios';
import classNames from 'classnames';

export default class Articles extends Component {
    constructor(props) {
        super(props);
        const { articles, tags, curTagId, allNum, page, banners, allPage } = props;
        this.state = {
            articles,
            tags,
            curTagId,
            allNum,
            page,
            banners,
            allPage
        };
    }

    static defaultProps = {
        articles: [],
        tags: [],
        banners: [],
        allPage: 0,
        curTagId: null
    }

    componentDidMount() {
        const { articles, tags, banners } = this.state;

        if (!articles.length || !tags.length || !banners.length) {
            this.getArticles(1, null);
            this.getAllTags();
            this.getBanners();
        }
    }

    getArticles = (page, tagid)=> {
        Axios.get('/api/get/publish/articles', {
            params: {
                tag: tagid || null,
                category: 'DEFAULT',
                page
            }
        })
        .then( res => {
            let resData = res.data;
            this.setState({
                articles: resData.articles,
                curTagId: tagid,
                allNum: resData.allNum,
                page: resData.page
            })
        })
    }

    getBanners() {
        Axios.get('/api/get/banners', {
            params: {
                page: 'HOME'
            }
        })
        .then( res => {
            let resData = res.data;
            this.setState({
                banners: resData.banners
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

    changePage = (page, pageSize) => {
        this.getArticles(page, this.state.curTagId)
    }

    showBanners() {
        const { banners } = this.state;
        let bannerDom = [];

        if (banners.length == 1)
            return (
                <div className="banners">
                    <div className="banner-item" style={ {backgroundImage: `url(${banners[0].url})`} }><a href={banners[0].href ? banners[0].href : "javascript:void(0);"} >
                        <div className="text"><p className='nowrapmulti'>{banners[0].text}</p></div>
                    </a></div>
                </div>
            )

        if (banners.length == 2)
            return (
                <div className="banners banners-two clearfix">
                    <div className="banner-item fl" style={ {backgroundImage: `url(${banners[0].url})`} } ><a href={banners[0].href ? banners[0].href : "javascript:void(0);"} >
                        <img src={banners[0].url} hidden/>
                        <div className="text"><p className='nowrapmulti'>{banners[0].text}</p></div>
                    </a></div>
                    <div className="banner-item fr" style={ {backgroundImage: `url(${banners[1].url})`} }><a href={banners[1].href ? banners[1].href : "javascript:void(0);"} >
                        <img src={banners[1].url} hidden/>
                        <div className="text"><p className='nowrapmulti'>{banners[1].text}</p></div>
                    </a></div>
                </div>
            )

        if (banners.length == 3)
            return (
                <div className="banners banners-three clearfix">
                    <div className="left-col banner-item fl" style={ {backgroundImage: `url(${banners[0].url})`} } ><a href={banners[0].href ? banners[0].href : "javascript:void(0);"} >
                        <img src={banners[0].url} hidden/>
                        <div className="text"><p className='nowrapmulti'>{banners[0].text}</p></div>
                    </a></div>
                    <div className="right-col fr">
                        <div className="banner-item" style={ {backgroundImage: `url(${banners[1].url})`} }><a href={banners[1].href ? banners[1].href : "javascript:void(0);"} >
                            <img src={banners[1].url} hidden/>
                            <div className="text"><p className='nowrapmulti'>{banners[1].text}</p></div>
                        </a></div>
                        <div className="banner-item" style={ {backgroundImage: `url(${banners[2].url})`} }><a href={banners[2].href ? banners[2].href : "javascript:void(0);"} >
                            <img src={banners[2].url} hidden/>
                            <div className="text"><p className='nowrapmulti'>{banners[2].text}</p></div>
                        </a></div>
                    </div>
                </div>
            )
    }

    render() {
        const { articles, tags, curTagId, allNum, page, allPage } = this.state;
        return (
            <div className="blog-articles-layout">
                { this.showBanners() }
                <div className="blog-tags">
                    <Link to={{pathname: '/'}} onClick={ () => { this.getArticles(1, null) } } className={ classNames("tag", {'tag-active': !curTagId}) } >所有文章</Link>
                    { tags && tags.length ? tags.map( tag => (tag.count > 0) && <Link to={{pathname: '/', search: `?tag=${tag.id}`}} onClick={ () => { this.getArticles(1, tag.id) } } className={ classNames("tag", {'tag-active': curTagId == tag.id}) } key={tag.id} >{tag.name}</Link>) : null}
                </div>
                <div className="blog-articles-list">
                    <ul>
                        {articles && articles.length ? articles.map( (article, index)=> <li className="article-tiem" key={article.id}><Link to={`/article/${article.id}`} >
                            <span className="article-num">{( index + 1)}</span>
                            <h3 className='nowrapmulti'>{article.title}</h3>
                        </Link></li>) : null}
                    </ul>
                </div>
                { allPage > 1 ? <Pagination size="small" total={allNum} current={page} onChange={ this.changePage } /> : null}
            </div>
        )
    }
}