import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup, CSSTransitionGroup } from 'react-transition-group'
import Articles from '../Articles';
import Article from '../Article';
import Photoes from '../Photoes';
import About from '../About';
import Travel from '../Travel';
import Header from '../Header';
import Footer from '../Footer';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            minHeight: '100%'
        };
    }

    componentDidMount() {
        // this.setState({
        //     minHeight: window.document && document.documentElement.clientHeight
        // })
    }

    getQuery = (key) => {
        let search = window.location.search,
            ret = Object.create(null);

        if (typeof search !== 'string') {
            return key ? null : ret;
        }

        search = search.trim().replace(/^[?#&]/, '');

        if (!search) {
            return key ? null : ret;
        }

        search.split('&').forEach(function (param) {
            let parts = param.replace(/\+/g, ' ').split('=');
            let key = parts.shift();
            let val = parts.length > 0 ? parts.join('=') : undefined;

            val = val === undefined ? null : decodeURIComponent(val);

            ret[decodeURIComponent(key)] = val;
        });


        return key ? ret[key] : ret;

    }

    render() {
        const { minHeight } = this.state;
        const { location, match, InitData } = this.props;
        const currentKey = location.pathname.split('/')[1] || '/';
        const timeout = { enter: 400, exit: 350 };
        return (
            <div className="blog-layout">
            <Header location={location} />
            <TransitionGroup className="page-main">
                <CSSTransition key={currentKey} timeout={timeout} classNames="slide" appear>
                    <Switch location={location}>
                        <Route path="/" exact={true} render={ props=> (<Articles {...props} {...InitData} />) } />
                        <Route path="/article/:id" component={Article}   />
                        <Route path="/photoes" component={Photoes}  />
                        <Route path="/about" component={About}  />
                        <Route path="/travel" component={Travel} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
        )
    }
}

export default withRouter(App);