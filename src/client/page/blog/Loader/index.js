import React, { Component } from 'react';

export default class Header extends Component {
    render() {

        return (
            <div className="blog-load">
                <div className="blog-loader">
                    <svg className="bloginner" width="60px" height="60px" viewBox="0 0 80 80">
                        <path className="blogloader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                        <path ref="ipLoaderCircle" className="blogloader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                    </svg>
                </div>
            </div>
        );
    }
}