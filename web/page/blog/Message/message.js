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
        comment: {},
        isFloatRight: false
    };

    randomClassName() {
        let classArray = ['blog-message-item-default', 'blog-message-item-ffcdac', 'blog-message-item-fcd474'];

        let random = parseInt(Math.random()* 3);

        return classArray[random];
    }

    getTimeString = (date) => {
        let now = new Date(),
            nowDate = now.getDate(),
            createTime = new Date(date),
            createDate = createTime.getDate(),
            diff = now.getTime() - date;
        // 1分钟内
        if (diff < 1000 * 60 ) {
            return '刚刚';
        } else if (diff < 1000 * 60 * 60) {
            // 1小时内
            return `${Math.ceil(diff / (1000 * 60))}分钟前`;
        } else if ( (diff < 1000 * 60 * 60 * 24) && (nowDate == createDate) ) {
            // 当天内
            return `今天 ${Moment(date).format('HH:mm')}`;
        } else if (now.getYear() == createTime.getYear() ) {
            return Moment(date).format('MM-DD HH:mm');
        } else {
            return Moment(date).format('lll');
        }
    }


    render() {
        const { className, comment, isFloatRight } = this.props;
        let randomClass = this.randomClassName();
        return(
            <div className={ ClassNames('blog-message-item', {[className]: className, [randomClass]: randomClass}) } >
                <div className="blog-message-item-box clearfix">
                    <div className={ ClassNames("blog-message-item-box-avatar", {fl: !isFloatRight, fr: isFloatRight}) } >
                        { comment.user && comment.user.avatar ? <div className="avatar-img"><img src={comment.user.avatar} alt=""/></div>  : <Icon type='avatar' />}
                    </div>
                    <div className={ ClassNames("blog-message-item-body", {fl: !isFloatRight, fr: isFloatRight}) }>
                        <p className="blog-message-item-user">{comment.user.name}<small>{this.getTimeString(comment.createTime)}</small></p>
                        <div className="blog-message-item-text">
                            { comment.reply ? <Emojify style={emojiStyle}><blockquote className="nowrapmulti">@{comment.reply.user.name}: {comment.reply.commentCont}</blockquote></Emojify> : null}
                            <Emojify style={emojiStyle}><p>{comment.commentCont}</p></Emojify>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}