import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Icon from '../../../components/Icon';
import Emojify from '../../../components/Emoji';
import ClassNames from 'classnames';

const emojiStyle = {
    height: 20
};

Moment.locale('zh-cn');

export default class MessageItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    static defaultProps = {
        className: ''
    };

    randomClassName() {
        let classArray = ['blog-message-item-default', 'blog-message-item-ffcdac', 'blog-message-item-fcd474'];

        let random = parseInt(Math.random()* 3);

        return classArray[random];
    }


    render() {
        const { className } = this.props;
        let randomClass = this.randomClassName();
        return(
            <div className={ ClassNames('blog-message-item', {[className]: className, [randomClass]: randomClass}) } >
                <div className="blog-message-item-box">
                <Emojify style={emojiStyle}><p className="blog-message-item-text">后台管理是用vue重新实现了一遍吗，这个单独目录（console）怎么进行git clone
                后台管理是用vue重新实现了一遍吗，这个单独目录（console）怎么进行git clone
                后台管理是用vue重新实现了一遍吗，这个单独目录（console）</p></Emojify>
                </div>
            </div>
        )
    }
}