import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Articles from '../Articles';
import Article from '../Article';
import Photoes from '../Photoes';
import About from '../About';
import Travel from '../Travel';
import Header from '../Header';
import Footer from '../Footer';

const FadingRoute = ({ component: Component, path, ...others }) => (
    <Route exact path={path} render={props => (
        <Component {...others} {...props} />
    )}/>
)
export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            minHeight: '100%',
            headeClass: ''
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

    setHeaderClass = (headeClass) => {
        this.setState({headeClass});
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
        const { minHeight, headeClass } = this.state;
        const { InitData } = this.props;
        return (
            <div className="blog-layout" style={{minHeight: minHeight}}>
                <Header className={ headeClass } />
                <FadingRoute path="/" component={Articles} {...InitData} getQuery={ this.getQuery } setHeaderClass={ this.setHeaderClass } />
                <FadingRoute path="/article/:id" component={Article} {...InitData} getQuery={ this.getQuery } setHeaderClass={ this.setHeaderClass } />
                <FadingRoute path="/photoes" component={Photoes} {...InitData} getQuery={ this.getQuery } setHeaderClass={ this.setHeaderClass } />
                <FadingRoute path="/about" component={About} setHeaderClass={ this.setHeaderClass } />
                <FadingRoute path="/travel" component={Travel} {...InitData} setHeaderClass={ this.setHeaderClass } />
                <Footer />
            </div>
        )
    }
}