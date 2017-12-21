import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

const ImgLazy = (props) => {
    const { src, width, height, className, style, placeholder, ...others } = props;
    return (
        <LazyLoad height='100%'  once placeholder={placeholder} {...others} ><img src={ src } width={width} height={height} className={ className } style={ style } /></LazyLoad>
    )
}

export default ImgLazy;