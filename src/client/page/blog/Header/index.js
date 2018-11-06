import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import ClassNames from 'classnames';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showNav: false
        }
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this.refs.blogHeader);
        this.dom.addEventListener('touchmove', this.preventDefault);
        // window && (window.onscroll = (e) => {
        //     e = e || window.event;

        //     let _scroll = document.documentElement.scrollTop || document.body.scrollTop;
        //     if (_scroll >= this.dom.offsetHeight) {
        //         this.dom.classList.add('header-hide');
        //     } else {
        //         this.dom.classList.remove('header-hide');
        //     }
        // })
    }
    preventDefault = (e) => {
        e.preventDefault();
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
        const { showNav } = this.state;
        const { location } = this.props;
        let path = location.pathname.split('/');
        let hCls = ClassNames('blog-header', {
            [`blog-${path[1]}-header`]: path[1],
            'blog-artilces-header': !path[1]
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
                        <NavLink to='/photoes'><span>图记</span></NavLink>
                        <NavLink to='/books'><span>阅记</span></NavLink>
                        <NavLink to='/message'><span>言记</span></NavLink>
                        {/*<NavLink to='/about'><span>关于</span></NavLink>*/}
                    </nav>
                    <Link className='fl' to='/'>
                        <img className='logo black' src="//cdn.liayal.com/image/logo.png" alt="Logo"/>
                        <img className='logo white' src="//cdn.liayal.com/image/logo_white.png" alt="Logo"/>
                    </Link>
                </div>
            </header>
        )
    }
}