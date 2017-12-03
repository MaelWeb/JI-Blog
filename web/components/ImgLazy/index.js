import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Icon from '../Icon';

const ImgLazy = (props) => {
    const placeholder = props.placeholder ? props.placeholder : <Icon type='loading' />;
    return (
        <LazyLoad height='100%'  once><img src={ props.src } width={props.width} height={props.height} className={ props.className } style={ props.style } /></LazyLoad>
    )
}

export default ImgLazy;