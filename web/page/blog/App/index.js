import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Articles from '../Articles';
import Article from '../Article';
import Photoes from '../Photoes';
import About from '../About';
import Travel from '../Travel';
import Header from '../Header';
import Footer from '../Footer';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

const FadingRoute = ({ component: Component, path, headeClass, exact, ...others }) => (
    <Route  exact={exact} path={path} render={props => (
        <Fade>
        <Component {...others} {...props} />
        </Fade>
    )}/>
)

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            minHeight: '100%'
        };
    }

    componentDidMount() {
        this.setState({
            minHeight: window.document && document.documentElement.clientHeight
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
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
        const { InitData } = this.props;
        return (
            <div className="blog-layout">
            <Header />
            <TransitionGroup className='test'>
            <Switch>
                <FadingRoute path="/" exact={true} component={Articles} {...InitData} getQuery={ this.getQuery }  />
                <FadingRoute path="/article/:id" component={Article} {...InitData} getQuery={ this.getQuery }  headeClass='blog-article-header' />
                <FadingRoute path="/photoes" component={Photoes} {...InitData} getQuery={ this.getQuery } headeClass='blog-photo-header' />
                <FadingRoute path="/about" component={About}  />
                <FadingRoute path="/travel" component={Travel} {...InitData} headeClass='blog-travel-header' />
            </Switch>
            </TransitionGroup>
            <Footer />
        </div>
        )
    }
}