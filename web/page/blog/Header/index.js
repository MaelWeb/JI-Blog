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

    showNacBox = () => {
        this.setState(prevState => {
            return {showNav: !prevState.showNav}
        });
    }

    render() {
        const { showNav } = this.state;
        const { className } = this.props;
        return (
            <header className={ ClassNames('blog-header', {'show-nav': showNav, [className]: className}) } ref="blogHeader" >
                <div className="nav-pc clearfix">
                     <Link to='/'>
                        <img className='logo black' src="//ozrrmt7n9.bkt.clouddn.com/image/logo.png" alt="Logo"/>
                        <img className='logo white' src="//ozrrmt7n9.bkt.clouddn.com/image/logo_white.png" alt="Logo"/>
                     </Link>
                     <nav className="nav-list fr">
                        <NavLink exact to='/'><span>文记</span></NavLink>
                        <NavLink to='/travel'><span>游记</span></NavLink>
                        <NavLink to='/photoes'><span>图记</span></NavLink>
                        <NavLink to='/about'><span>关于</span></NavLink>
                    </nav>
                    <Icon type={ showNav ? "close" : "menu" } className='menu fr' onClick={ this.showNacBox } />
                </div>
                { showNav ? <nav className="nav-min tc" onClick={ this.showNacBox } >
                    <NavLink to='/'><span>文记</span></NavLink>
                    <NavLink to='/travel'><span>游记</span></NavLink>
                    <NavLink to='/photoes'><span>图记</span></NavLink>
                    <NavLink to='/about'><span>关于</span></NavLink>
                </nav> : null}
            </header>
        )
    }
}