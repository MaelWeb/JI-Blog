import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import ClassNames from 'classnames';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showNav: false,
            show: true,
        }
    }

    componentDidMount() {
        this.scrollTop = 0;
        this.dom = ReactDOM.findDOMNode(this.refs.blogHeader);
        this.dom.addEventListener('touchmove', this.preventDefault);

        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.onScroll);
    }

    preventDefault = (e) => {
        e.preventDefault();
    }

    onScroll = (e) => {
        let scrollTop =  window.pageYOffset
                || (document.documentElement && document.documentElement.scrollTop)
                || document.body.scrollTop
                || 0;
        const navHeight = document.querySelector('#IdNav').offsetHeight
        const { showWhenScrollTo = navHeight } = this.props
        const diff =  scrollTop - this.scrollTop
        if ( (scrollTop >= showWhenScrollTo) && (diff > 0) ) {
            this.setState({show: false})
        } else if (!this.state.show) {
            this.setState({show: true})
        }
        this.scrollTop = scrollTop;
    }

    showNacBox = (e) => {
        const { showNav } = this.state;

        if ( showNav ) {
            document.getElementById("IdNav").classList.remove("show-nav");
        } else {
            document.getElementById("IdNav").classList.add("show-nav");
        }

        this.setState(prevState => {
            return { showNav: !prevState.showNav }
        });
    }

    render() {
        const { showNav, show } = this.state;
        const { location } = this.props;
        let path = location.pathname.split('/');
        let hCls = ClassNames('blog-header animated', {
            [`blog-${path[1]}-header`]: path[1],
            'blog-artilces-header': !path[1],
            fadeInDown: show,
            fadeOutUp: !show
        });
        return (
            <header className={ hCls } ref="blogHeader" id='IdNav'>
                <div className="header-wrap  clearfix">
                    <div className={ ClassNames("menu-icon fr", {"is-active": showNav})} onClick={ this.showNacBox }>
                       <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                    </div>
                    {/* <Icon type={ showNav ? "cross-circle" : "black-menu" } className='menu fr' onClick={ this.showNacBox } /> */}
                    <nav className="nav-list fr" onClick={ this.showNacBox } >
                        <NavLink exact to='/'><span>文记</span></NavLink>
                        <NavLink to='/travel'><span>游记</span></NavLink>
                        <NavLink to='/photos'><span>图记</span></NavLink>
                        <NavLink to='/books'><span>阅记</span></NavLink>
                        <NavLink to='/message'><span>言记</span></NavLink>
                        {/*<NavLink to='/about'><span>关于</span></NavLink>*/}
                    </nav>
                    <Link className='fl logo' to='/'>
                        <img className='logo black' src="//cdn.liayal.com/image/logo.png" alt="Logo"/>
                        <img className='logo white' src="//cdn.liayal.com/image/logo_white.png" alt="Logo"/>
                    </Link>
                </div>
            </header>
        )
    }
}