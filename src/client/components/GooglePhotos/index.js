import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import OptimizedResize from './optimizedresize';
import Photo from './Photo';
import { getOffsetTop, extend } from './util';
import ClassNames from 'classnames';

export default class GooglePhotos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
        };
        // Global State
        this.inRAF = false;
        this.isTransitioning = false;
        this.minAspectRatioRequiresTransition = false;
        this.minAspectRatio = null;
        this.latestYOffset = 0;
        this.scrollDirection = 'down';

        // List of images that are loading or completely loaded on screen.
        this.visibleImages = [];
    }
    // These are the default settings, which may be overridden.
    static defaultProps = {
        /**
         * Type: array
         * Default: []
         * Description: An array of metadata about each image to
         *   include in the grid.
         */
        imageData: [],

        /**
         * Type: window | HTMLElement
         * Default: window
         * Description: The window or HTML element that the grid scrolls in.
         */
        scroller: '',

        /**
         * Type: string
         * Default: 'pig'
         * Description: The prefix associated with this library that should be
         *   prepended to class names within the grid.
         */
        classPrefix: 'image',

        /**
         * Type: string
         * Default: 'figure'
         * Description: The tag name to use for each figure. The default setting is
         *   to use a <figure></figure> tag.
         */
        figureTagName: 'figure',

        /**
         * Type: Number
         * Default: 8
         * Description: Size in pixels of the gap between images in the grid.
         */
        spaceBetweenImages: 8,

        /**
         * Type: Number
         * Default: 500
         * Description: Transition speed in milliseconds
         */
        transitionSpeed: 500,

        /**
         * Type: Number
         * Default: 3000
         * Description: Height in pixels of images to preload in the direction
         *   that the user is scrolling. For example, in the default case, if the
         *   user is scrolling down, 1000px worth of images will be loaded below
         *   the viewport.
         */
        primaryImageBufferHeight: 1000,

        /**
         * Type: Number
         * Default: 100
         * Description: Height in pixels of images to preload in the direction
         *   that the user is NOT scrolling. For example, in the default case, if
         *   the user is scrolling down, 300px worth of images will be loaded
         *   above the viewport.  Images further up will be removed.
         */
        secondaryImageBufferHeight: 300,

        /**
         * Type: Number
         * Default: 20
         * Description: The height in pixels of the thumbnail that should be
         *   loaded and blurred to give the effect that images are loading out of
         *   focus and then coming into focus.
         */
        thumbnailSize: 20,

        /**
         * Get the URL for an image with the given filename & size.
         *
         * @param {string} filename - The filename of the image.
         * @param {Number} size - The size (height in pixels) of the image.
         *
         * @returns {string} The URL of the image at the given size.
         */
        urlForSize: function(filename, size) {
            return '/img/' + size + '/' + filename;
        },

        /**
         * Get the minimum required aspect ratio for a valid row of images. The
         * perfect rows are maintained by building up a row of images by adding
         * together their aspect ratios (the aspect ratio when they are placed
         * next to each other) until that aspect ratio exceeds the value returned
         * by this function. Responsive reordering is achieved through changes
         * to what this function returns at different values of the passed
         * parameter `lastWindowWidth`.
         *
         * @param {Number} lastWindowWidth - The last computed width of the
         *                                   browser window.
         *
         * @returns {Number} The minimum aspect ratio at this window width.
         */
        getMinAspectRatio: function(lastWindowWidth) {
            if (lastWindowWidth <= 640)
                return 2;
            else if (lastWindowWidth <= 1280)
                return 4;
            else if (lastWindowWidth <= 1920)
                return 5;
            return 6;
        },

        /**
         * Get the image size (height in pixels) to use for this window width.
         * Responsive resizing of images is achieved through changes to what this
         * function returns at different values of the passed parameter
         * `lastWindowWidth`.
         *
         * @param {Number} lastWindowWidth - The last computed width of the
         *                                   browser window.
         *
         * @returns {Number} The size (height in pixels) of the images to load.
         */
        getImageSize: function(lastWindowWidth) {
            if (lastWindowWidth <= 640)
                return 100;
            else if (lastWindowWidth <= 1920)
                return 250;
            return 500;
        },
    };

    static propTypes = {
        classPrefix: PropTypes.string,
        figureTagName: PropTypes.string,
        spaceBetweenImages: PropTypes.number,
        transitionSpeed: PropTypes.number,
        primaryImageBufferHeight: PropTypes.number,
        secondaryImageBufferHeight: PropTypes.number,
        thumbnailSize: PropTypes.number,
        urlForSize: PropTypes.func,
        getMinAspectRatio: PropTypes.func,
        getImageSize: PropTypes.func,
        imageData: PropTypes.array,
    };

    // static getDerivedStateFromProps(props, state) {
    //     if (props.imageData.length && state.images.length !== props.imageData.length) {
    //         this._computeLayout();

    //         return {
    //             images: this._doLayout(),
    //         }
    //     }

    //     return null;
    // };

    componentDidMount() {
        this.lastWindowWidth = window.innerWidth;
        this.container = findDOMNode(this);
        this.scroller = this.props.scroller || window;

        // Our global reference for images in the grid.  Note that not all of these
        // images are necessarily in view or loaded.

        const { classPrefix, transitionSpeed } = this.props;
        // Inject our boilerplate CSS.
        this._injectStyle(classPrefix, transitionSpeed);
        this.enable();
    }

    shouldComponentUpdate(nextprops, nextState) {
        const { images } = this.state;
        // this.enable();
        if (nextprops.imageData.length && (nextprops.imageData.length != images.length)) {
            this._computeLayout();
            this._doLayout();
            return false;
        }

        return true;
    }

    /**
     * Enable scroll and resize handlers, and run a complete layout computation /
     * application.
     *
     * @returns {object} The Pig instance, for easy chaining with the constructor.
     */
    enable() {
        this.onScroll = this._getOnScroll();

        // this.onScroll();
        this._computeLayout();
        this._doLayout();

        OptimizedResize.add(() => {
            this.lastWindowWidth = this.scroller === window ? window.innerWidth : this.scroller.offsetWidth;
            this._computeLayout();
            this._doLayout();
        });

        this.scroller.addEventListener('scroll', this.onScroll);
    }

    /**
     * This computes the layout of the entire grid, setting the height, width,
     * translateX, translateY, and transtion values for each ProgessiveImage in
     * `this.images`. These styles are set on the ProgressiveImage.style property,
     * but are not set on the DOM.
     *
     * This separation of concerns (computing layout and DOM manipulation) is
     * paramount to the performance of the PIG. While we need to manipulate the
     * DOM every time we scroll (adding or remove images, etc.), we only need to
     * compute the layout of the PIG on load and on resize. Therefore, this
     * function will compute the entire grid layout but will not manipulate the
     * DOM at all.
     *
     * All DOM manipulation occurs in `_doLayout`.
     */
    _computeLayout() {
        // Constants
        var wrapperWidth = parseInt(this.container.clientWidth);

        // State
        var row = []; // The list of images in the current row.
        var translateX = 0; // The current translateX value that we are at
        var translateY = 0; // The current translateY value that we are at
        var rowAspectRatio = 0; // The aspect ratio of the row we are building

        // Compute the minimum aspect ratio that should be applied to the rows.
        this._recomputeMinAspectRatio();

        // If we are not currently transitioning, and our minAspectRatio has just
        // changed, then we mark isTransitioning true. If this is the case, then
        // `this._getTransitionString()` will ensure that each image has a value
        // like "0.5s ease all". This will cause images to animate as they change
        // position. (They need to change position because the minAspectRatio has
        // changed.) Once we determine that the transtion is probably over (using
        // `this._getTransitionTimeout`) we unset `this.isTransitioning`, so that
        // future calls to `_computeLayout` will set "transition: none".
        if (!this.isTransitioning && this.minAspectRatioRequiresTransition) {
            this.isTransitioning = true;
            setTimeout(function() {
                this.isTransitioning = false;
            }, this._getTransitionTimeout());
        }

        // Get the valid-CSS transition string.
        var transition = this._getTransitionString();
        const { imageData } = this.props;

        // Loop through all our images, building them up into rows and computing
        // the working rowAspectRatio.
        imageData.forEach((image, index) => {
            rowAspectRatio += parseFloat(image.aspectRatio);
            row.push(image);

            // When the rowAspectRatio exceeeds the minimum acceptable aspect ratio,
            // or when we're out of images, we say that we have all the images we
            // need for this row, and compute the style values for each of these
            // images.
            if (rowAspectRatio >= this.minAspectRatio || index + 1 === imageData.length) {

                // Make sure that the last row also has a reasonable height
                rowAspectRatio = Math.max(rowAspectRatio, this.minAspectRatio);

                // Compute this row's height.
                var totalDesiredWidthOfImages = wrapperWidth - this.props.spaceBetweenImages * (row.length - 1);
                var rowHeight = totalDesiredWidthOfImages / rowAspectRatio;

                // For each image in the row, compute the width, height, translateX,
                // and translateY values, and set them (and the transition value we
                // found above) on each image.
                //
                // NOTE: This does not manipulate the DOM, rather it just sets the
                //       style values on the ProgressiveImage instance. The DOM nodes
                //       will be updated in _doLayout.
                row.forEach((img) => {

                    var imageWidth = rowHeight * img.aspectRatio;

                    // This is NOT DOM manipulation.
                    img.style = {
                        width: parseInt(imageWidth),
                        height: parseInt(rowHeight),
                        translateX: translateX,
                        translateY: translateY,
                        transition: transition,
                    };

                    // The next image is this.props.spaceBetweenImages pixels to the
                    // right of this image.
                    translateX += imageWidth + this.props.spaceBetweenImages;

                });
                // Reset our state variables for next row.
                row = [];
                rowAspectRatio = 0;
                translateY += parseInt(rowHeight) + this.props.spaceBetweenImages;
                translateX = 0;
            }
        });

        // No space below the last image
        this.totalHeight = translateY - this.props.spaceBetweenImages;
    }

    _doLayout() {
        // Set the container height
        this.container.style.height = this.totalHeight + 'px';

        // Get the top and bottom buffers heights.
        var bufferTop =
            (this.scrollDirection === 'up') ?
            this.props.primaryImageBufferHeight :
            this.props.secondaryImageBufferHeight;
        var bufferBottom =
            (this.scrollDirection === 'down') ?
            this.props.secondaryImageBufferHeight :
            this.props.primaryImageBufferHeight;

        // Now we compute the location of the top and bottom buffers:
        var containerOffset = getOffsetTop(this.container);
        var scrollerHeight = this.scroller === window ? window.innerHeight : this.scroller.offsetHeight;

        // This is the top of the top buffer. If the bottom of an image is above
        // this line, it will be removed.
        var minTranslateYPlusHeight = this.latestYOffset - containerOffset - bufferTop;

        // This is the bottom of the bottom buffer.  If the top of an image is
        // below this line, it will be removed.
        var maxTranslateY = this.latestYOffset - containerOffset + scrollerHeight + bufferBottom;

        // Here, we loop over every image, determine if it is inside our buffers or
        // no, and either insert it or remove it appropriately.
        const { imageData } = this.props;
        imageData.forEach((image) => {
            if (!image.style) return image;
            if (image.style.translateY + image.style.height < minTranslateYPlusHeight ||
                image.style.translateY > maxTranslateY) {
                // Hide Image
                image.load = false;
            } else {
                // Load Image
                image.load = true;
            }
        });

        this.setState({
            images: imageData,
        });

        return imageData;
    }

    /**
     * Create our onScroll handler and return it.
     *
     * @returns {function} Our optimized onScroll handler.
     */
    _getOnScroll() {
        var _this = this;

        /**
         * This function is called on scroll. It computes variables about the page
         * position and scroll direction, and then calls a _doLayout guarded by a
         * window.requestAnimationFrame.
         *
         * We use the boolean variable _this.inRAF to ensure that we don't overload
         * the number of layouts we perform by starting another layout while we are
         * in the middle of doing one.
         *
         * @returns {function} The onScroll handler that we should attach.
         */
        var onScroll = function() {
            // Compute the scroll direction using the latestYOffset and the
            // previousYOffset
            var newYOffset = _this.scroller === window ? window.pageYOffset : _this.scroller.scrollTop;
            _this.previousYOffset = _this.latestYOffset || newYOffset;
            _this.latestYOffset = newYOffset;
            _this.scrollDirection = (_this.latestYOffset > _this.previousYOffset) ? 'down' : 'up';

            // Call _this.doLayout, guarded by window.requestAnimationFrame
            if (!_this.inRAF) {
                _this.inRAF = true;
                window.requestAnimationFrame(function() {
                    _this._doLayout();
                    _this.inRAF = false;
                });
            }
        };

        return onScroll;
    }

    /**
     * Gives the CSS property string to set for the transition value, depending
     * on whether or not we are transitioning.
     *
     * @returns {string} a value for the `transition` CSS property.
     */
    _getTransitionString() {
        if (this.isTransitioning) {
            return (this.props.transitionSpeed / 1000) + 's transform ease';
        }

        return 'none';
    }

    /**
     * Inject CSS needed to make the grid work in the <head></head>.
     *
     * @param {string} classPrefix - the prefix associated with this library that
     *                               should be prepended to classnames.
     * @param {string} containerId - ID of the container for the images.
     */
    _injectStyle(classPrefix, transitionSpeed) {

        var css = (
            '.gp-liayal' + ' {' +
            '  position: relative;' +
            '}' +
            '.gp-' + classPrefix + '-figure {' +
            '  background-color: #D5D5D5;' +
            '  overflow: hidden;' +
            '  left: 0;' +
            '  position: absolute;' +
            '  top: 0;' +
            '  margin: 0;' +
            '}' +
            '.gp-' + classPrefix + '-figure .gp-image {' +
            '  left: 0;' +
            '  position: absolute;' +
            '  top: 0;' +
            '  height: 100%;' +
            '  width: 100%;' +
            '  opacity: 0;' +
            '  transition: ' + (transitionSpeed / 1000) + 's ease opacity;' +
            '  -webkit-transition: ' + (transitionSpeed / 1000) + 's ease opacity;' +
            '}' +
            '.gp-' + classPrefix + '-figure img.' + classPrefix + '-thumbnail {' +
            '  -webkit-filter: blur(30px);' +
            '  filter: blur(30px);' +
            '  left: auto;' +
            '  position: relative;' +
            '  width: auto;' +
            '}' +
            '.gp-' + classPrefix + '-figure img.gp-' + classPrefix + '-loaded {' +
            '  opacity: 1;' +
            '}'
        );

        const head = document.head || document.getElementsByTagName("head")[0];
        const style = document.createElement("style");

        style.type = "text/css";
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }

    _recomputeMinAspectRatio() {
        var oldMinAspectRatio = this.minAspectRatio;
        this.minAspectRatio = this.props.getMinAspectRatio(this.lastWindowWidth);

        if (oldMinAspectRatio !== null && oldMinAspectRatio !== this.minAspectRatio)
            this.minAspectRatioRequiresTransition = true;
        else
            this.minAspectRatioRequiresTransition = false;
    }


    render() {
        const { images } = this.state;
        const { ImageComponent, onClick, className } = this.props;
        return (
            <div className={ ClassNames("gp-liayal", {[className]: className}) }>
                {images && images.length ? images.map((img, index) => {
                    const {style, ...others} = img;
                    return <Photo {...style} ImageComponent={ImageComponent} image={others} index={ index } onClick={onClick} />
                }) : null}
            </div>
        )
    }
}