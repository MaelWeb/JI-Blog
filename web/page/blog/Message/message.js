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


    render() {
        const { className } = this.props;
        return(
            <div className={ ClassNames('blog-message-item', {[className]: className}) } >
                <Emojify style={emojiStyle} ><p>后台管理是用vue重新实现了一遍吗，这个单独目录（console）怎么进行git clone
                后台管理是用vue重新实现了一遍吗，这个单独目录（console）怎么进行git clone
                后台管理是用vue重新实现了一遍吗，这个单独目录（console）怎么进行git clone</p></Emojify>
            </div>
        )
    }
}