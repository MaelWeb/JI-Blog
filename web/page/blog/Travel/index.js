import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import Axios from 'axios';
import Moment from 'moment';

export default class Travel extends Component {
    constructor(props) {
        super(props)
        const {travels, allNum, page, allPage } = props;
        this.state = {
            travels,
            allNum,
            page,
            allPage,
            isLoading: false
        }
    }

    static defaultProps = {
        travels: [],
        page: 0,
        allPage: 0
    }

    componentDidMount() {
        this.headerDom = ReactDOM.findDOMNode(this.refs.travelHeader);
        this.traveLayoutDom = ReactDOM.findDOMNode(this);
        this.blogNavDom = document.getElementById('IdNav');

        this.blogNavDom.classList.add('blog-travel-header');


        window.addEventListener("scroll", this.onscroll, false)
        const {travels} = this.state;

        if (!travels.length) {
            this.getArticles(1);
        }
    }

    onscroll = (e) => {
        e = e || window.event;
        let _scrollTop = window.pageYOffset
                || (document.documentElement && document.documentElement.scrollTop)
                || document.body.scrollTop
                || 0;;
        if (_scrollTop >= (this.headerDom.offsetHeight - this.blogNavDom.offsetHeight)) {
            this.blogNavDom.classList.remove('blog-travel-header');
        } else {
            this.blogNavDom.classList.add('blog-travel-header');
        }

        const { page, allPage } = this.state;
        if ( (_scrollTop + document.documentElement.clientHeight) > (this.traveLayoutDom.offsetHeight - 100) ) {
            (page < allPage) && this.getArticles(page + 1);
        }
    }

    componentWillUnmount() {
        this.blogNavDom.classList.remove('blog-travel-header');
        window.removeEventListener("scroll", this.onscroll);
    }

    getArticles = (_page) => {
        if ( this.state.isLoading ) return;
        this.setState({
            isLoading: true
        });
        Axios.get('/api/get/publish/articles', {
            params: {
                category: 'TRAVEL',
                page: _page,
            }
        })
        .then(res => {
            let resData = res.data;
            this.setState(preState => {
                let articles = preState.travels.concat(resData.articles);
                return {
                    travels: articles,
                    allNum: resData.allNum,
                    page: resData.page,
                    allPage: resData.allPage,
                    isLoading: false
                }
            })
        });
    }


    render() {
        const { travels, isLoading } = this.state;
        return (
            <div className="blog-travel-layout">
                <div className="traverl-header" ref='travelHeader' style={{backgroundImage: `url(${ travels[0] && travels[0].banner ? travels[0].banner : "//ozrrmt7n9.bkt.clouddn.com/12027196.jpg" })`} }><Link to={`/article/${travels[0] && travels[0].id}`} >
                    <img src={ travels[0] && travels[0].banner ? travels[0].banner : "//ozrrmt7n9.bkt.clouddn.com/12027196.jpg" } alt="" hidden />
                    {travels[0] ? <div className="aticle-info">
                        <p className="small"><span>游记</span></p>
                        <h2>{ travels[0] ? travels[0].title : ''}</h2>
                        <p className="sub-title">{ travels[0] ? travels[0].abstract : '' }</p>
                    </div>: null}
                </Link></div>
                <div className="middle-text tc">
                    <h2>我从旅行中获得乐趣</h2>
                    <p>摄影是一种神奇的记录：照片记录了时间、风景、人物；可回放照片时才发现，原来它还记录了按下快门时的感触、思绪、心事……也许这就是为什么明明看到的是一张风景，却会让你想起谁</p>
                </div>
                <Masonry className="travel-article-list">
                    { travels.length ? travels.map( (article, index) => {
                        return index != 0 ? (
                                <div className="article-item"  key={article.id} ><Link to={`/article/${article.id}`} >
                                    <img src={article.banner || '//ozrrmt7n9.bkt.clouddn.com/14506926.jpg'} alt=""/>
                                    <p className="article-title">{article.title} <small>{ Moment(article.createTime).format('MM月DD日')}</small></p>
                                </Link></div>
                        ) : null
                    }) : null }
                </Masonry>
                { isLoading ? <p className="loading">加载中...</p> : null}
            </div>
        )
    }
}