import React, {Component} from 'react';

export default class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="blog-about">
                <img src="http://ozrrmt7n9.bkt.clouddn.com/image/about_banner2.jpg" alt="about me"/>
                <div className="about-me tc">
                    <h1>关于 记</h1>
                    <p>记是一个码农，因为喜欢浪，所以想要一个博客记是一个码农，因为喜欢浪，所以想要一个博客记是一个码农，
                    因为喜欢浪，所以想要一个博客记是一个码农，因为喜欢浪，所以想要一个博客记是一个码农，因为喜欢浪，所以想要一个博客记
                    是一个码农，因为喜欢浪，所以想要一个博客</p>
                </div>
            </div>
        )
    }
}