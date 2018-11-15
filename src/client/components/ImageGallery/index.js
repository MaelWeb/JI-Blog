import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toucher from '../Toucher';
import Icon from '../Icon';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: props.startIndex,
            offsetPercentage: 0,
            isShow: false
        }
    }

    static propTypes = {
        startIndex: PropTypes.number,
        images: PropTypes.array,
        slideDuration: PropTypes.number
    };

    static defaultProps = {
        startIndex: 0,
        images: [],
        slideDuration: 450
    };


    componentWillReceiveProps(nextProps) {
        if (nextProps.startIndex >= nextProps.images.length) {
            this.setState({
                currentIndex: 0,
                isShow: nextProps.isShow
            })
        } else {
            this.setState({
                currentIndex: nextProps.startIndex,
                isShow: nextProps.isShow
            })
        }
    }

    componentDidMount() {
        if (ReactDOM.findDOMNode(this)) {
            this.dom = ReactDOM.findDOMNode(this);
            this.dom.addEventListener('touchmove', this.preventDefault);
        }
    }

    preventDefault = (e) => {
        e.preventDefault();
    }

    close = () => {
        this.setState({
            isShow: false
        })
    }

    _onSliding = () => {
        const { isTransitioning } = this.state;
        window.setTimeout(() => {
            if (isTransitioning) {
                this.setState({ isTransitioning: !isTransitioning });
            }
        }, this.props.slideDuration);
    };

    slideToIndex = (index, event) => {
        const { currentIndex, isTransitioning } = this.state;

        if (!isTransitioning) {

            let slideCount = this.props.images.length - 1;
            let nextIndex = index;

            if (index < 0) {
                nextIndex = slideCount;
            } else if (index > slideCount) {
                nextIndex = 0;
            }

            this.setState({
                previousIndex: currentIndex,
                currentIndex: nextIndex,
                isTransitioning: nextIndex !== currentIndex,
                offsetPercentage: 0,
                style: {
                    transition: `all ${this.props.slideDuration}ms ease-out`
                }
            }, this._onSliding);
        }
    }

    slideLeft = (event) => {
        this.slideToIndex(this.state.currentIndex - 1, event);
    }

    slideRight = (event) => {
        this.slideToIndex(this.state.currentIndex + 1, event);
    }

    _getSlideStyle = (index) => {
        const { currentIndex, offsetPercentage } = this.state;
        const { images } = this.props;
        const baseTranslateX = -100 * currentIndex;
        const totalSlides = images.length - 1;

        // calculates where the other slides belong based on currentIndex
        let translateX = baseTranslateX + (index * 100) + offsetPercentage;

        if (images.length > 2) {
            if (currentIndex === 0 && index === totalSlides) {
                // make the last slide the slide before the first
                translateX = -100 + offsetPercentage;
            } else if (currentIndex === totalSlides && index === 0) {
                // make the first slide the slide after the last
                translateX = 100 + offsetPercentage;
            }
        }

        // Special case when there are only 2 images with infinite on
        if (images.length === 2) {
            translateX = this._getTranslateXForTwoSlide(index);
        }

        const translate = `translate(${translateX}%, 0)`;

        return {
            WebkitTransform: translate,
            MozTransform: translate,
            msTransform: translate,
            OTransform: translate,
            transform: translate,
        };
    };

    _shouldPushSlideOnInfiniteMode(index) {
        /*
          Push(show) slide if slide is the current slide, and the next slide
          OR
          The slide is going more than 1 slide left, or right, but not going from
          first to last and not going from last to first
          There is an edge case where if you go to the first or last slide, when they're
          not left, or right of each other they will try to catch up in the background
          so unless were going from first to last or vice versa we don't want the first
          or last slide to show up during our transition
        */
        return !this._slideIsTransitioning(index) ||
            (this._ignoreIsTransitioning() && !this._isFirstOrLastSlide(index));
    }

    _slideIsTransitioning(index) {
        /*
        returns true if the gallery is transitioning and the index is not the
        previous or currentIndex
        */
        const { isTransitioning, previousIndex, currentIndex } = this.state;
        const indexIsNotPreviousOrNextSlide = !(index === previousIndex || index === currentIndex);
        return isTransitioning && indexIsNotPreviousOrNextSlide;
    }

    _isFirstOrLastSlide(index) {
        const totalSlides = this.props.images.length - 1;
        const isLastSlide = index === totalSlides;
        const isFirstSlide = index === 0;
        return isLastSlide || isFirstSlide;
    }

    _ignoreIsTransitioning() {
        /*
          Ignore isTransitioning because were not going to sibling slides
          e.g. center to left or center to right
        */
        const { previousIndex, currentIndex } = this.state;
        const totalSlides = this.props.images.length - 1;
        // we want to show the in between slides transition
        const slidingMoreThanOneSlideLeftOrRight = Math.abs(previousIndex - currentIndex) > 1;
        const notGoingFromFirstToLast = !(previousIndex === 0 && currentIndex === totalSlides);
        const notGoingFromLastToFirst = !(previousIndex === totalSlides && currentIndex === 0);

        return slidingMoreThanOneSlideLeftOrRight &&
            notGoingFromFirstToLast &&
            notGoingFromLastToFirst;
    }


    getSrcSet(src) {
        return [
            `https://${src}?imageMogr2/auto-orient/thumbnail/750x/strip/interlace/1/quality/80/ 750w`,
            `https://${src}?imageMogr2/auto-orient/thumbnail/1125x/strip/interlace/1/quality/80/ 1125w`,
            `https://${src}?imageMogr2/auto-orient/thumbnail/1560x/strip/interlace/1/quality/80/ 1560w`
        ].join(',')
    }


    getSlides() {
        let slides = [];
        const { images } = this.props;
        const { currentIndex } = this.state;

        images.length && images.map((img, index) => {
            if (this._shouldPushSlideOnInfiniteMode(index)) {
                let slideStyle = this._getSlideStyle(index);
                slides.push(
                    (<div className='image-gallery-slide' style={ Object.assign(slideStyle, this.state.style) } key={index} >
                        <img src={img.src} srcSet={ this.getSrcSet(img.origin) } />
                    </div>)
                );
            }
        })

        return slides;
    }

    render() {
        const { isShow, currentIndex } = this.state;
        const { images } = this.props;
        return (
            <div className="mael-image-gallery" hidden={!isShow} >
                <Icon type='close' onClick={ this.close } />
                <Toucher className="image-gallery-swipe" onSwipeRight={ this.slideLeft } onSwipeLeft={ this.slideRight } >
                    <div className="image-gallery-arrow arrow-left" onClick={ this.slideLeft } ><Icon type='bold-arrow-left' /></div>
                    <div className="image-gallery-slides">
                        { isShow ? this.getSlides() : null}
                    </div>
                    <div className="image-gallery-arrow arrow-right" onClick={ this.slideRight } ><Icon type='bold-arrow-right' /></div>
                </Toucher>
                <p className='image-index tc'>{currentIndex + 1 }/{images.length}</p>
            </div>
        )
    }
}