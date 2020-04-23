import React, { Component } from 'react';

const Footer = props => (
    <footer className='blog-footer'>
        <div className="footer-content clearfix ">
            <div className="footer-desc fl">
                <h4>记小栈</h4>
                <p>记小栈是记用来发发文章，写写游记，传传图的地方。也许文章不是那么好，游记不是那么靠谱，图不是那么美，但这些都是记的一种见证一种记录，留作纪念，仅此而已！</p>
            </div>
            <div className="footer-about fr">
                <h4>关于</h4>
                <div>
                    <p><a href="/about">关于记</a><a href="https://github.com/MaelWeb">Github</a></p>
                </div>
                <div>
                    <p><a href="https://cdn.liayal.com/image/gh_4493411dfefa_344.jpg">记小栈小程序</a></p>
                </div>
            </div>
        </div>
        <p className='footer-statement tc'> © 2017-2019 Code & Design by Mael.Lia, All rights reserved. </p>
        <a className="tc" style={ { fontSize: '10px', display: 'block' } } href="http://www.beian.miit.gov.cn/">沪ICP备18001547号</a>
    </footer>
);

export default Footer;
