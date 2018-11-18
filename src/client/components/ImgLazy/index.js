import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

const ImgLazy = props => {
    const {
        src,
        width,
        height,
        className,
        style,
        placeholder,
        ...others
    } = props;
    return (
        <LazyLoad height="100%" once placeholder={placeholder} ><img src={src} className={className} style={style} {...others} /></LazyLoad>
    );
};

export default ImgLazy;
