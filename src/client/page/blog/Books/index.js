import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { getImgSrcSet } from '../Util';

export default class Books extends Component {
    constructor(props) {
        super(props)
        const {books, allNum, page, allPage, banner } = props;
        this.state = {
            books,
            allNum,
            page,
            allPage,
            banner,
            isLoading: false,
        }
    }

    static defaultProps = {
        books: [],
        page: 0,
        allPage: 0,
        banner: {
            text: ['这个世界上的每样东西都生死未定，都充满了风险，那些不接受风险的人，那些不了解命运的人，在角落里日渐衰落。', '我忽然明白为什么我没能拥有尼诺，而莉拉能够拥有他。我不能追随那些真实的感情，我无法使自己打破陈规旧矩，我没有莉拉那么强烈的情感，她可以不顾一切去享受那一天一夜。'],
            author: '新名字的故事'
        }
    }

    componentDidMount() {
        this.bookLayoutDom = ReactDOM.findDOMNode(this);
        this.headerDom = ReactDOM.findDOMNode(this.refs.bookHeader);
        this.blogNavDom = document.getElementById('IdNav');

        window.addEventListener("scroll", this.onscroll, false)
        const {books} = this.state;

        if (!books.length) {
            this.getBooks(1);
            this.getBanners();
        }
    }

    onscroll = (e) => {
        e = e || window.event;
        let _scrollTop = window.pageYOffset
                || (document.documentElement && document.documentElement.scrollTop)
                || document.body.scrollTop
                || 0;

        const { page, allPage } = this.state;
        if ( (_scrollTop + document.documentElement.clientHeight) > (this.bookLayoutDom.offsetHeight - 200) ) {
            (page < allPage) && this.getBooks(page + 1);
        }

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onscroll);
    }

    getBooks = (_page) => {
        if ( this.state.isLoading ) return;
        this.setState({
            isLoading: true
        });
        Axios.get('/api/get/books', {
            params: {
                page: _page,
            }
        })
        .then(res => {
            let resData = res.data;
            this.setState(preState => {
                let books = preState.books.concat(resData.books);
                return {
                    books,
                    allNum: resData.allNum,
                    page: resData.page,
                    allPage: resData.allPage,
                    isLoading: false
                }
            })
        });
    }

    getBanners() {
        Axios.get('/api/get/banners', {
            params: {
                page: 'BOOK'
            }
        })
        .then( res => {
            let resData = res.data;
            this.setState({
                banner: resData.banners[0]
            })
        })
    }


    render() {
        const { books, isLoading, banner } = this.state;
        return (
            <div className="blog-books-layout clearfix ">
                <div className="blog-books-header" ref='bookHeader' >
                    <img src="//cdn.liayal.com/image/books_banner.jpg?imageMogr2/auto-orient/thumbnail/1024x/strip/interlace/1/quality/80/" srcSet={ getImgSrcSet('//cdn.liayal.com/image/books_banner.jpg', 375) } alt=""/>
                    <div className="text-wrap">
                        <p><span style={{background: "#B6BABD"}} >{banner.text[0]}</span>{banner.text[1]}</p>
                        <div className='tr author'><a href={ banner.href || "javascript:void(0);"} >—— 《{banner.author}》</a></div>
                    </div>
                </div>

                <div className="middle-text tc ">
                    <h2>杂而不精的读者</h2>
                    <p>当我需要安静的时候，我想要一本书；当我安静的时候，我更想要一本书。不喜欢任何香水味，却惟独喜欢书香味。一本书，就是一个世界。躲进这个世界之中，就可以和当下的一切烦恼与琐碎隔离开来。</p>
                </div>

                <div className="books-list clearfix ">
                    {books.length ? books.map( book =>
                        <div className="blog-books-item" key={book.id} >
                        <div className="books-wrap clearfix">
                            <div className="cover">
                                <img src={book.img} srcSet={ getImgSrcSet(book.img, 100) } alt=""/>
                            </div>
                            <div className="info">
                                <h4 className="title">{book.title}</h4>
                                <p className="author">{book.author}</p>
                                <p className="intro">{book.desc}</p>
                                { book.href ? <div className="btn">
                                    <a href={ book.href } className="read-btn">试读</a>
                                </div> : null}
                            </div>
                            {book.isReading ? <span className='reading'>Reading</span> : null}
                        </div>
                    </div>
                    ) : null}
                </div>
                { isLoading ? <p className="loading">加载中...</p> : null}
            </div>
        )
    }
}