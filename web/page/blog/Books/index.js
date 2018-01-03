import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Measure from 'react-measure';

export default class Books extends Component {
    constructor(props) {
        super(props)
        const {books, allNum, page, allPage } = props;
        this.state = {
            books,
            allNum,
            page,
            allPage,
            isLoading: false
        }
    }

    static defaultProps = {
        books: [],
        page: 0,
        allPage: 0
    }

    componentDidMount() {



        window.addEventListener("scroll", this.onscroll, false)
        const {books} = this.state;

        // if (!books.length) {
        //     this.getArticles(1);
        // }
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

    }

    componentWillUnmount() {
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
        const { books, isLoading, width } = this.state;
        return (
            <div className="blog-books-layout clearfix">
                <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width  })}>
                    {
                        ({ measureRef  }) => {
                            let widthStyle = {width: "100%"};
                            if (width >= 480){
                              widthStyle = {width: "50%"};
                            }
                            if (width >= 1024){
                              widthStyle = {width: "33.33%"};
                            }
                            if (width >= 1824){
                              widthStyle = {width: "20%"};
                            }
                            return <div ref={measureRef} className="books-list">
                              <div className="blog-books-item" style={ widthStyle } >
                                    <div className="books-wrap clearfix">
                                        <div className="cover">
                                            <img src="http://p1hx4ytu8.bkt.clouddn.com/books/42956666.jpg" alt=""/>
                                        </div>
                                        <div className="info">
                                            <h4 className="title">心意相通</h4>
                                            <p className="author">章叶良</p>
                                            <p className="intro">一部城市奇幻架构下的温情社会派推理小说，章叶良推理小说三部曲收官之作。</p>
                                            <div className="btn">
                                                <a href="" className="read-btn">试读</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-books-item" style={ widthStyle } >
                                    <div className="books-wrap clearfix">
                                        <div className="cover">
                                            <img src="http://p1hx4ytu8.bkt.clouddn.com/books/42956666.jpg" alt=""/>
                                        </div>
                                        <div className="info">
                                            <h4 className="title">心意相通</h4>
                                            <p className="author">章叶良</p>
                                            <p className="intro">一部城市奇幻架构下的温情社会派推理小说，章叶良推理小说三部曲收官之作。</p>
                                            <div className="btn">
                                                <a href="" className="read-btn">试读</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-books-item" style={ widthStyle } >
                                    <div className="books-wrap clearfix">
                                        <div className="cover">
                                            <img src="http://p1hx4ytu8.bkt.clouddn.com/books/42956666.jpg" alt=""/>
                                        </div>
                                        <div className="info">
                                            <h4 className="title">心意相通</h4>
                                            <p className="author">章叶良</p>
                                            <p className="intro">一部城市奇幻架构下的温情社会派推理小说，章叶良推理小说三部曲收官之作。</p>
                                            <div className="btn">
                                                <a href="" className="read-btn">试读</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    }
                </Measure>
                { isLoading ? <p className="loading">加载中...</p> : null}
            </div>
        )
    }
}