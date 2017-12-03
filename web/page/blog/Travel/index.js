import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

export default class Travel extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        let headerDom = ReactDOM.findDOMNode(this.refs.travelHeader),
            blogNavDom = document.getElementById('IdNav');
        window.onscroll = (e) => {
            e = e || window.event;

            let _scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (_scroll >= (headerDom.offsetHeight - blogNavDom.offsetHeight) )  {
                blogNavDom.classList.remove('blog-travel-header');
            } else {
                blogNavDom.classList.add('blog-travel-header');
            }
        }
        // const { photoes } = this.state;
        // if (!photoes.length)
        //     Axios.get('/api/get/photoes')
        //         .then( res => {
        //             let state = this.addSrc(res.data.photoes);
        //             this.setState({
        //                 ...state
        //             })
        //         })
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    render() {

        return(
            <div className="blog-travel-layout">
                <div className="traverl-header" ref='travelHeader' >
                    <img src="//photo.tuchong.com/1595218/f/12027196.jpg" alt=""/>
                    <div className="aticle-info">
                        <p className="small"><span>游记</span></p>
                        <h2>京都这家烤肉店藏在小巷子里，神秘又不高级感!</h2>
                        <p className="sub-title">京都这家烤肉店很好吃很好吃京都这家烤肉店很好吃很好吃京都这家烤肉店很好吃很好吃京都这家烤肉店很好吃很好吃</p>
                    </div>
                </div>
                <div className="middle-text tc">
                    <h2>我从旅行中获得乐趣</h2>
                    <p>摄影是一种神奇的记录：照片记录了时间、风景、人物；可回放照片时才发现，原来它还记录了按下快门时的感触、思绪、心事……也许这就是为什么明明看到的是一张风景，却会让你想起谁</p>
                </div>
            </div>
        )
    }
}