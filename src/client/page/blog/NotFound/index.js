import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
    }

  render() {
        return (
            <div className="blog-notfound">
        <div className="blog-mac">
                    <div className="blog-mac-screen">
                        <div className="blog-mac-content">
                            <p className="blog-notfound-tips">
                SORRY!您访问的页面丢了
                <span className="dotting" />
              <div className="blog-notfound-btn">
                                <a href="/">Blog</a>
<a href="https://github.com/MaelWeb">Follow Me</a>
</div>
            </div>
            <p className="blog-mac-brand tc"> MacBook Pro</p>
                    </div>
                    <div className="blog-mac-bottom">
                        <div className="blog-mac-open" />
            <div className="blog-mac-back" />
                    </div>
                </div>
            </div>
        );
    }
}
