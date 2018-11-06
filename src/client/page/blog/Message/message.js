import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../components/Icon';
import Emojify from '../../../components/Emoji';
import ClassNames from 'classnames';
import { getTimeString } from '../Util';

const emojiStyle = {
    height: 20
};

export default class MessageItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    static defaultProps = {
        className: '',
        comment: {},
        isFloatRight: false,
        replyComent: () => {}
    };

    static propTypes = {
        className: PropTypes.string,
        comment: PropTypes.object,
        isFloatRight: PropTypes.bool,
        replyComent: PropTypes.func
    };

    randomClassName() {
        let classArray = ['blog-message-item-default', 'blog-message-item-ffcdac', 'blog-message-item-fcd474'];

        let random = parseInt(Math.random()* 3);

        return classArray[random];
    }

    replyComent = () => {
        const { comment } = this.props;

        this.props.replyComent(comment);
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
                        <p className="blog-message-item-user">{comment.user.name}<small>{getTimeString(comment.createTime)}</small></p>
                        <div className="blog-message-item-text" onClick={ this.replyComent } >
                            { comment.reply ? <Emojify style={emojiStyle}><blockquote className="nowrapmulti">@{comment.reply.user.name}: {comment.reply.commentCont}</blockquote></Emojify> : null}
                            <Emojify style={emojiStyle}><p>{comment.commentCont}</p></Emojify>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}