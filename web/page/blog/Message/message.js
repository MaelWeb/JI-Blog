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
        className: '',
        comment: {}
    };

    randomClassName() {
        let classArray = ['blog-message-item-default', 'blog-message-item-ffcdac', 'blog-message-item-fcd474'];

        let random = parseInt(Math.random()* 3);

        return classArray[random];
    }


    render() {
        const { className, comment } = this.props;
        let randomClass = this.randomClassName();
        return(
            <div className={ ClassNames('blog-message-item', {[className]: className, [randomClass]: randomClass}) } >
                <div className="blog-message-item-box">
                <Emojify style={emojiStyle}><p className="blog-message-item-text">{comment.commentCont}</p></Emojify>
                </div>
            </div>
        )
    }
}