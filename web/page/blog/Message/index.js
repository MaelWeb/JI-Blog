import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import ClassNames from 'classnames';
import CommentInput from '../../../components/CommentInput';
import MessageItem from './message.js';

export default class Message extends Component {
    constructor(props) {
        super(props);

        const { banners } = props;
        this.state = {
            banners
        };
    }


    componentDidMount() {
        if (!this.state.one) {
            Axios.get('/api/one')
                .then(res => {
                    console.log(res);
                    this.setState({
                        banners: res.data.data
                    })
                })
        }
    }


    render() {
        const { banners, comments } = this.state;
        let randomIndex = Math.floor(Math.random()* banners.length),
            header = banners[randomIndex] || {};
        return (
            <div className="blog-message-layout">
                <div className="blog-message-header" style={{ backgroundImage: `url(${header.imgUrl})` }} >
                    <div className="blog-message-header-input">
                        <CommentInput />
                    </div>
                </div>
                <div className="blog-message-list clearfix">
                    <MessageItem />
                    <MessageItem className="blog-message-item-fcd474" />
                </div>
            </div>
        )
    }
}