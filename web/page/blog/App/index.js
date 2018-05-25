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
import Message from '../Message';

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
        if (process.env.NODE_ENV == 'production') {
            Axios.post('/api/push/baidu', {
                url: window.location.href
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.props.location.pathname !== prevProps.location.pathname)) {
            window.scrollTo(0, 0);
        }

        let titleMap = {
            '/travel': '游记  - 「JI · 记小栈」',
            '/books': '阅记  - 「JI · 记小栈」',
            '/photoes': '图记  - 「JI · 记小栈」',
            '/about': '关于  - 「JI · 记小栈」',
            '/message': '留言  - 「JI · 记小栈」',
            '/': '游走在技术与艺术边缘地带的前端攻城狮 - 「JI · 记小栈」'
        };

        document.title = titleMap[this.props.location.pathname] || '「JI · 记小栈」';

        if (process.env.NODE_ENV == 'production') {
            Axios.post('/api/push/baidu', {
                url: window.location.href
            });
        }
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
                        <Route path="/message" render={ props=> (<Message {...props} {...InitData} />) }  />
                        <Route path="/travel" render={ props=> (<Travel {...props} {...InitData} />) } />
                        <Route path="/books" render={ props=> (<Books {...props} {...InitData} />) } />
                        <Route path="/about" render={ props=> (<About {...props} {...InitData} />) } />
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