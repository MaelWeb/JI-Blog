import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup, CSSTransitionGroup } from 'react-transition-group';
import Axios from 'axios';
import ScrollToTop from '../../../components/ScrollToTop';
import Articles from '../Articles';
import Article from '../Article';
import Photoes from '../Photoes';
import About from '../About';
import Travel from '../Travel';
import Books from '../Books';
import Header from '../Header';
import Footer from '../Footer';
// import Wechat from '../Util/wechat';

class App extends Component {
    constructor(props) {
        super(props);
        const { InitData } = props;
        this.state = {
            InitData,
            reflow: false
        };
    }

    componentDidMount() {
        Axios.post('/api/push/baidu', {
            url: window.location.href
        });
        // const { location: {pathname} } = this.props,
        //         reg = /article\//g;

        // !reg.test(pathname) && Wechat.configShare({
        //     title: '记小栈',
        //     desc: '游走在技术与艺术的边缘地带，偶是一枚前端攻城狮！',
        //     link: window.location.href,
        //     imgUrl: 'https://cdn.liayal.com/image/touch-icon-iphone-retina.png'
        // })
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.props.location !== prevProps.location)) {
            window.scrollTo(0, 0);

            // const { location: {pathname} } = this.props,
            //     reg = /article\//g;

            // !reg.test(pathname) && Wechat.configShare({
            //     title: '记小栈',
            //     desc: '游走在技术与艺术的边缘地带，偶是一枚前端攻城狮！',
            //     link: window.location.href,
            //     imgUrl: 'https://cdn.liayal.com/image/touch-icon-iphone-retina.png'
            // })
        }

        Axios.post('/api/push/baidu', {
            url: window.location.href
        });
    }

    render() {
        const { minHeight, InitData, reflow } = this.state;
        const { location, match } = this.props;
        const currentKey = location.pathname.split('/')[1] || '/';
        const timeout = { enter: 400, exit: 350 };
        return (
        <div className="blog-layout">
            <Header location={location} />
            <TransitionGroup className="page-main" component='main' id="main" >
                <CSSTransition key={currentKey} timeout={timeout} classNames="slide" appear>
                    <Switch location={location}>
                        <Route path="/" exact={true} render={ props=> (<Articles {...props} {...InitData} />) } />
                        <Route path="/article/:id" render={ props=> (<Article {...props} {...InitData} />) } />
                        <Route path="/photoes" render={ props=> (<Photoes {...props} {...InitData} />) }  />
                        <Route path="/about" render={ props=> (<About {...props} />) }  />
                        <Route path="/travel" render={ props=> (<Travel {...props} {...InitData} />) } />
                        <Route path="/books" render={ props=> (<Books {...props} {...InitData} />) } />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <ScrollToTop />
            <Footer />
        </div>
        )
    }
}

export default withRouter(App);