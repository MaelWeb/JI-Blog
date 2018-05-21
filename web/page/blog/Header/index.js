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

    showNacBox = () => {
        this.setState(prevState => {
            return {showNav: !prevState.showNav}
        });
    }

    render() {
        const { showNav } = this.state;
        const { location } = this.props;
        let path = location.pathname.split('/');
        let hCls = ClassNames('blog-header', {
            'show-nav': showNav,
             [`blog-${path[1]}-header`]: path[1]
        });
        return (
            <header className={ hCls } ref="blogHeader" id='IdNav'>
                <div className="nav-pc clearfix">
                    <Icon type={ showNav ? "close" : "menu" } className='menu fr' onClick={ this.showNacBox } />
                     <nav className="nav-list fr">
                        <NavLink exact to='/'><span>文记</span></NavLink>
                        <NavLink to='/travel'><span>游记</span></NavLink>
                        <NavLink to='/photoes'><span>图记</span></NavLink>
                        <NavLink to='/books'><span>阅记</span></NavLink>
                        <NavLink to='/message'><span>留言</span></NavLink>
                        {/*<NavLink to='/about'><span>关于</span></NavLink>*/}
                    </nav>
                    <Link to='/'>
                        <img className='logo black' src="//cdn.liayal.com/image/logo.png" alt="Logo"/>
                        <img className='logo white' src="//cdn.liayal.com/image/logo_white.png" alt="Logo"/>
                     </Link>
                </div>
                <nav className="nav-min tc" onClick={ this.showNacBox } >
                    <NavLink exact to='/'><span>文记</span></NavLink>
                    <NavLink to='/travel'><span>游记</span></NavLink>
                    <NavLink to='/photoes'><span>图记</span></NavLink>
                    <NavLink to='/books'><span>阅记</span></NavLink>
                    <NavLink to='/message'><span>留言</span></NavLink>
                </nav>
            </header>
        )
    }
}