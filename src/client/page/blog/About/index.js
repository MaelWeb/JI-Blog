import React, { Component } from 'react';
import Icon from "../../../components/Icon";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="blog-about">
                <img src="//cdn.liayal.com/image/about_banner2.jpg" alt="about me" />
                <div className="middle-text tc">
                    <h2>关于 记</h2>
                    <p>记是一个码农，码农这种生物，一般人不太了解，但是你要是深入了解一个码农，你会发现，他们真的很无聊，还很闷骚，老想搞点大新闻，自诩为拯救世界的人。然鹅代码是记的生活，但记的生活远远不止于代码。记永远在在路上，在阅读的路上...在旅行的路上...在运动的路上...在追剧的路上...</p>
                    <div className="link">
                        <a href="https://github.com/MaelWeb" alt="Github"><Icon type="github" /></a>
                        <a href="https://www.zhihu.com/people/mael-liang/activities" alt="知乎"><Icon type="zhihu" /></a>
                        <a href="https://tuchong.com/2657939/" alt="图虫"><Icon type="tuchong" /></a>
                    </div>
                </div>
                <div className="about-module">
                    <img src="//cdn.liayal.com/image/book.jpg" alt="" />
                    <div className="moule-txt pdl">
                        <h2>阅读</h2>
                        <p>有人说，看过的书，会留在我们的气质里。我不需要气质，我希望我的脸上不要只留下生活的沧桑。</p>
                    </div>
                </div>
                <div className="about-module">
                    <div className="moule-txt pdr">
                        <h2>旅行</h2>
                        <p>说走就走的旅行，背上行囊的那一刻，好像世界就扑面而来。匆忙的现在，也时刻准备着出发。</p>
                    </div>
                    <img src="//cdn.liayal.com/image/tour.jpg" alt="" />
                </div>
                <div className="about-module">
                    <img src="//cdn.liayal.com/image/basketball.jpg" alt="" />
                    <div className="moule-txt pdl">
                        <h2>运动</h2>
                        <p>挥洒的汗水，奋力地嘶喊，风会告诉我：我们永远都年轻着啊！</p>
                    </div>
                </div>
                <div className="about-module">
                    <div className="moule-txt pdr">
                        <h2>美剧</h2>
                        <p>《权利的游戏》不只是一场游戏，《我们这一天》也是我们的一天。艺术源于生活，不止于生活。</p>
                    </div>
                    <img src="//cdn.liayal.com/image/tv.jpg" alt="" />
                </div>
            </div>
        )
    }
}
