import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/UI/pagination';
import Axios from 'axios';
import classNames from 'classnames';

const PageSize = 2;
export default class Articles extends Component {
    constructor(props) {
        super(props);
        const { articles, curTagId, allNum, page, banners, allPage } = props;
        this.state = {
            articles,
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

        if (!articles.length || !banners.length) {
            this.getArticles(1, null);
            // this.getAllTags();
            this.getBanners();
        }
    }

    getArticles = (page, tagid)=> {
        Axios.get('/api/get/publish/articles', {
            params: {
                tag: tagid || null,
                category: 'DEFAULT',
                page,
                pageSize: PageSize
            }
        })
        .then( res => {
            let resData = res.data;
            this.setState({
                articles: resData.articles,
                curTagId: tagid,
                allNum: resData.allNum,
                page: resData.page,
                allPage: resData.allPage
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
            });
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

    changePage = (page) => {
        this.getArticles(page, this.state.curTagId)
    }

    showBanners() {
        const { banners } = this.state;
        let bannerDom = [];

        if (banners.length == 1)
            return (
                <div className="banners">
                    <div className="banner-item" style={ {backgroundImage: `url(${banners[0].url})`} }><a target="_blank" href={banners[0].href ? banners[0].href : "javascript:void(0);"} >
                        <div className="text"><p className='ellipsis'>{banners[0].text}</p></div>
                    </a></div>
                </div>
            )

        if (banners.length == 2)
            return (
                <div className="banners banners-two clearfix">
                    <div className="banner-item fl" style={ {backgroundImage: `url(${banners[0].url})`} } ><a target="_blank" href={banners[0].href ? banners[0].href : "javascript:void(0);"} >
                        <img src={banners[0].url} hidden/>
                        <div className="text"><p className='ellipsis'>{banners[0].text}</p></div>
                    </a></div>
                    <div className="banner-item fr" style={ {backgroundImage: `url(${banners[1].url})`} }><a target="_blank" href={banners[1].href ? banners[1].href : "javascript:void(0);"} >
                        <img src={banners[1].url} hidden/>
                        <div className="text"><p className='ellipsis'>{banners[1].text}</p></div>
                    </a></div>
                </div>
            )

        if (banners.length == 3)
            return (
                <div className="banners banners-three clearfix">
                    <div className="left-col banner-item fl" style={ {backgroundImage: `url(${banners[0].url})`} } ><a target="_blank" href={banners[0].href ? banners[0].href : "javascript:void(0);"} >
                        <img src={banners[0].url} hidden/>
                        <div className="text"><p className='ellipsis'>{banners[0].text}</p></div>
                    </a></div>
                    <div className="right-col fr">
                        <div className="banner-item" style={ {backgroundImage: `url(${banners[1].url})`} }><a target="_blank" href={banners[1].href ? banners[1].href : "javascript:void(0);"} >
                            <img src={banners[1].url} hidden/>
                            <div className="text"><p className='ellipsis'>{banners[1].text}</p></div>
                        </a></div>
                        <div className="banner-item" style={ {backgroundImage: `url(${banners[2].url})`} }><a target="_blank" href={banners[2].href ? banners[2].href : "javascript:void(0);"} >
                            <img src={banners[2].url} hidden/>
                            <div className="text"><p className='ellipsis'>{banners[2].text}</p></div>
                        </a></div>
                    </div>
                </div>
            )
    }

    render() {
        let { articles, tags, curTagId, allNum, page, allPage } = this.state;
        return (
            <div className="blog-articles-layout ">
                { this.showBanners() }
                <div className="blog-tags">
                    <Link to={{pathname: '/'}}  className={ classNames("tag", {'tag-active': !curTagId}) } >所有文章</Link>
                    {/* tags && tags.length ? tags.map( tag => (tag.count > 0) && <Link to={{pathname: '/', search: `?tag=${tag.id}`}} onClick={ () => { this.getArticles(1, tag.id) } } className={ classNames("tag", {'tag-active': curTagId == tag.id}) } key={tag.id} >{tag.name}</Link>) : null */}
                </div>
                <div className="blog-articles-list">
                    <ul>
                        {articles && articles.length ? articles.map( (article, index)=> <li className="article-tiem" key={article.id}><Link target="_blank" to={`/article/${article.id}`} >
                            <span className="article-num">{( index + 1)}</span>
                            <h3 className='nowrapmulti'>{article.title}</h3>
                        </Link></li>) : null}
                    </ul>
                </div>
                { allPage > 1 ? <Pagination size="small" count={allPage} current={page} pageSize={PageSize} onChange={ this.changePage } /> : null}
            </div>
        )
    }
}