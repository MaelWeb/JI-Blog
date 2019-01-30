import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import ClassNames from 'classnames';

export default class Photo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thumbnailLoaded: false,
            imageLoaded: false,
        };
    }

    static defaultProps = {
        aspectRatio: '',
        filename: '',
        transition: 0,
        width: 0,
        height: 0,
        translateX: 0,
        translateY: 0,
        load: true,
        image: {},
        index: 0,
        onClick: () => {},
    };

    // shouldComponentUpdate(nextprops, nextState) {
    //     const nextImage = nextprops.image;
    //     const thisImage = this.props.image;

    //     return (nextprops.load !== this.props.load) || (nextImage.src !== thisImage.src)
    // }

    thumbnailLoaded = () => {
        this.setState({
            thumbnailLoaded: true,
        })
    }

    imageLoaded = () => {
        this.setState({
            imageLoaded: true,
        })
    }

    handleClick = event => {
        const { onClick, image, index } = this.props;
        typeof onClick === 'function' && onClick(event, { image, index });
    }

    render() {
        const { transition, width, height, translateX, translateY, load, image, ImageComponent, index } = this.props;
        const { thumbnailLoaded, imageLoaded } = this.state;
        const wrapStyle = {
            transition,
            width: `${width}px`,
            height: `${height}px`,
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
        };
        return load ? <section className="gp-image-figure" style={wrapStyle} onClick={this.handleClick} >
                {/*<img src={thumbnail.src} className={ ClassNames('gp-thumbnail', {'gp-thumbnail-loaded': thumbnailLoaded}) } onload={this.thumbnailLoaded} alt=''/>*/}
                { ImageComponent ? <ImageComponent image={image} index={index} /> : <img src={image.src} className={ ClassNames('gp-image', {'gp-image-loaded': imageLoaded}) } onLoad={this.imageLoaded} alt='' srcSet={image.srcSet}/>}
            </section> : null;
    }
}