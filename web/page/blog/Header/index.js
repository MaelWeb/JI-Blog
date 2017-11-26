import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import ClassNames from 'classnames';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showNav: false
        }
    }

    showNacBox = () => {
        this.setState(prevState => {
            return {showNav: !prevState.showNav}
        });
    }

    render() {
        const { showNav } = this.state;
        return (
            <header className={ ClassNames("blog-header", {'show-nav': showNav})}>
                <p className="clearfix">
                    <span className="logo">浮生记</span>
                    <Icon type="menu" className='menu fr' onClick={ this.showNacBox } />
                </p>
                { showNav ? <nav className="nav-wrap tc" onClick={ this.showNacBox } >
                    <Link to='/'><span>文记</span></Link>
                    <Link to='/tour'><span>游记</span></Link>
                    <Link to='/photoes'><span>图记</span></Link>
                    <Link to='/about'><span>关于</span></Link>
                </nav> : null}
            </header>
        )
    }
}