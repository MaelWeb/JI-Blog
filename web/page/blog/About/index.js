import React, {Component} from 'react';

export default class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="blog-about">
                <img src="http://ozrrmt7n9.bkt.clouddn.com/image/about_banner2.jpg" alt="about me"/>
                <div className="middle-text tc">
                    <h2>关于 记</h2>
                    <p>记是一个码农，因为喜欢浪，所以想要一个博客记是一个码农，因为喜欢浪，所以想要一个博客记是一个码农，
                    因为喜欢浪，所以想要一个博客记是一个码农，因为喜欢浪，所以想要一个博客记是一个码农，因为喜欢浪，所以想要一个博客记
                    是一个码农，因为喜欢浪，所以想要一个博客</p>
                </div>
                <div className="about-module">
                    <img src="http://ozrrmt7n9.bkt.clouddn.com/image/book.jpg" alt=""/>
                    <div className="moule-txt pdl">
                        <h2>看书</h2>
                        <p>书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉</p>
                    </div>
                </div>
                <div className="about-module">
                    <div className="moule-txt pdr">
                        <h2>旅行</h2>
                        <p>书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉</p>
                    </div>
                    <img src="http://ozrrmt7n9.bkt.clouddn.com/image/tour.jpg" alt=""/>
                </div>
                <div className="about-module">
                    <img src="http://ozrrmt7n9.bkt.clouddn.com/image/basketball.jpg" alt=""/>
                    <div className="moule-txt pdl">
                        <h2>运动</h2>
                        <p>书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉</p>
                    </div>
                </div>
                <div className="about-module">
                    <div className="moule-txt pdr">
                        <h2>美剧</h2>
                        <p>书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉书中自由黄金屋，书中自有颜如玉</p>
                    </div>
                    <img src="http://ozrrmt7n9.bkt.clouddn.com/image/tv.jpg" alt=""/>
                </div>
            </div>
        )
    }
}