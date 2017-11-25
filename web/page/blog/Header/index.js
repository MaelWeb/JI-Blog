import React, { Component } from 'react';
import Icon from '../../../components/Icon';

const Header = (props) => (
    <header className="blog-header clearfix">
        <span className="logo">浮生记</span>
        <Icon type="menu" className='menu fr' />
    </header>
)

export default Header;