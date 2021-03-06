import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Moment from 'dayjs';
import { getImgSrcSet } from '../Util';

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
            <div className="blog-travel-layout ">
                <div className="traverl-header header-banner" ref='travelHeader'><Link to={`/article/${travels[0] && travels[0].id}`} >
                    <img className="img-object-fit" src={ travels[0] && travels[0].banner ? travels[0].banner : "//cdn.liayal.com/12027196.jpg" } alt="" srcSet={getImgSrcSet(travels[0] && travels[0].banner, 375)} />
                    {travels[0] ? <div className="aticle-info">
                        <p className="small"><span>游记</span></p>
                        <h2>{ travels[0] ? travels[0].title : ''}</h2>
                        <p className="sub-title">{ travels[0] ? travels[0].abstract : '' }</p>
                    </div>: null}
                </Link></div>
                <div className="middle-text tc ">
                    <h2>我从旅行中获得乐趣</h2>
                    <p>一个人，一条路，人在途中，心随景动，从起点，到尽头，也许快乐，或有时孤独，如果心在远方，只需勇敢前行，梦想自会引路，有多远，走多远，把足迹连成生命线。</p>
                </div>
                <div className="travel-article-list ">
                    { travels.length ? travels.map( (article, index) => {
                        return index != 0 ? (
                                <div className="article-item"  key={article.id} ><Link to={`/article/${article.id}`} >
                                    <img src={ `${article.banner}?imageMogr2/auto-orient/thumbnail/1024x/strip/interlace/1/quality/80/` || '//cdn.liayal.com/14506926.jpg'} alt="" srcSet={getImgSrcSet(article.banner, 180)}/>
                                    <div className="article-info">
                                        <p className="article-title">{article.title} <small>{ Moment(article.createTime).format('MM月DD日')}</small></p>
                                        <p className="article-abstract ellipsis">{article.abstract}</p>
                                    </div>
                                </Link></div>
                        ) : null
                    }) : null }
                </div>
                { isLoading ? <p className="loading">加载中...</p> : null}
            </div>
        )
    }
}