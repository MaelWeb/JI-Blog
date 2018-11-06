import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'dayjs';
import ClassNames from 'classnames';
import Icon from '../../../components/Icon';
import Emojify from '../../../components/Emoji';
import CommentInput from '../../../components/CommentInput';
import Axios from 'axios';
import Pagination from '../../../components/UI/pagination';
import { Toast } from  '../../../components/UI';
import { getTimeString } from '../Util';

const emojiStyle = {
    height: 20
};

export default class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showUserInfo: false,
            isShowReplyModal: false,
            reply: null,
            commentCont: null,
            commentsData: props.commentsData
        };

        this.caretIndex = 0;
    }

    static defaultProps = {
        articleid: '',
        commentsData: {}
    };

    static defaultPropTypes = {
        commentsData: PropTypes.object
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            commentsData: nextProps.commentsData
        });
    }

    componentDidMount() {
    }

    preventDefault = (e) => {
        e.preventDefault();
    }

    exportComment = commentCont => {
        const { reply } = this.state;
        const user = /access\_token/g.test(document.cookie) ? {
            name: '记小栈',
            email: 'mael.liang@live.com',
            site: 'https://www.liayal.com',
            avatar: 'https://cdn.liayal.com/image/logo_min.png'
        } : window.localStorage.getItem('_liayal_user');

        if (user && commentCont) {
            this.saveComment({
                user: (typeof user == 'string') ? JSON.parse(user) : user,
                reply: reply ? reply.id : null,
                commentCont
            });
        } else if (commentCont) {
            this.setState({
                showUserInfo: true,
                commentCont
            });
        }
    }

    commentSubmit = () => {
        const name = this.refs.userName.value,
            email = this.refs.userEamil.value,
            site = this.refs.userSite.value,
            emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;
        const { reply, commentCont } = this.state;

        if (!email || !name) return Toast.info('填一下昵称和邮箱呗！');

        if (!emailReg.test(email)) return Toast.info('邮箱格式不正确呀！');

        window.localStorage.setItem('_liayal_user', JSON.stringify({ name, email, site }));

        this.saveComment({
            user: { name, email, site },
            reply: reply ? reply.id : null,
            commentCont
        });
    }

    commentCancle = () => {
        this.setState({
            showUserInfo: false
        })
    }

    saveComment(data) {
        const { articleid } = this.props;
        Axios.post('/api/create/comment', { ...data, articleid })
            .then(res => {
                let resdata = res.data;
                if (resdata.code == 200) {
                    this.getComments(0);
                    resdata.reply ? this.refs.replyInput.clearTextarea() : this.refs.commentInput.clearTextarea();
                    this.setState({
                        showUserInfo: false,
                        isShowReplyModal: false,
                        reply: null,
                        commentCont: null
                    });
                } else {
                    Toast.warn(resdata.message);
                }
            })
            .catch(err => {
                Toast.warn('发布失败');
            })
    }

    showReplyModal = (comment) => {
        this.setState({
            isShowReplyModal: true,
            reply: comment
        })
    }

    closeReplyModal = () => {
        this.setState({
            isShowReplyModal: false,
            reply: null
        })
    }

    getTimeString = (date) => {
        let now = new Date(),
            nowDate = now.getDate(),
            createTime = new Date(date),
            createDate = createTime.getDate(),
            diff = now.getTime() - date;
        // 1分钟内
        if (diff < 1000 * 60) {
            return '刚刚';
        } else if (diff < 1000 * 60 * 60) {
            // 1小时内
            return `${Math.ceil(diff / (1000 * 60))}分钟前`;
        } else if ((diff < 1000 * 60 * 60 * 24) && (nowDate == createDate)) {
            // 当天内
            return `今天 ${Moment(date).format('HH:mm')}`;
        } else if (now.getYear() == createTime.getYear()) {
            return Moment(date).format('MM-DD HH:mm');
        } else {
            return Moment(date).format('lll');
        }
    }

    changePage = (page, pageSize) => {
        this.getComments(page)
    }

    getComments(page) {
        Axios.get('/api/get/comments', {
                params: {
                    articleid: this.props.articleid,
                    page: page,
                    size: 20
                }
            })
            .then(res => {
                let resData = res.data;
                this.setState({
                    commentsData: resData
                })
            });
    }

    render() {
        const { showUserInfo, isShowReplyModal, reply, commentsData } = this.state;
        const { comments, allPage, page, allNum } = commentsData;
        return (
            <article className="blog-comment">
                <CommentInput exportComment={ this.exportComment } ref='commentInput' />
                <h3 className='blog-comment-title'>评论</h3>
                <div className="comment-list">
                    { comments && comments.length ? comments.map((comment, index) => (<div className="comment-item clearfix border-b" key={index} name={comment.id} >
                        <div className="comment-avatar fl">{ comment.user && comment.user.avatar ? <img src={comment.user.avatar} alt="" className="avatar"/> : <Icon type='avatar' />}</div>
                        <div className="comment-body fl">
                            <h6>{comment.user.name}<small>{getTimeString(comment.createTime)}</small></h6>
                            { comment.reply ? <Emojify style={emojiStyle}><blockquote className="nowrapmulti">@{comment.reply.user.name}: {comment.reply.commentCont}</blockquote></Emojify> : null}
                            <Emojify style={emojiStyle} ><p>{comment.commentCont}</p></Emojify>
                            <div className="comment-reply">
                                <Icon type='reply' onClick={ e => {this.showReplyModal(comment)} } />
                            </div>
                        </div>
                    </div>)) : <p className="no-comments tc">～ 评论还没有，沙发可以有 O(∩_∩)O~ </p>}
                </div>
                { allPage > 1 ? <Pagination count={allPage} current={page} pageSize={20} onChange={ this.changePage } /> : null}

                <div className="comment-modal" hidden={!showUserInfo} style={{zIndex: 5}} ref='UserModal'>
                    <div className="comment-user-modal-form">
                            <img src="//cdn.liayal.com/image/logo.png" alt=""/>
                            <input type="text" name="name" placeholder='昵称(必填)' ref='userName' />
                            <input type="text"  autoComplete='email' name="email" placeholder='xxxx@qq.com(必填)' ref='userEamil' />
                            <input type="text" name="site" placeholder='www.yourblog.com' ref='userSite' />
                            <div className="btns">
                                <button onClick={ this.commentCancle }>取消</button>
                                <button onClick={ this.commentSubmit } >确认</button>
                            </div>
                    </div>
                </div>

                <div className="comment-modal" hidden={!isShowReplyModal} ref='ReplyModal'>
                    <div className="comment-reply-from">
                        <h6 className='tl'>回复：{ reply && reply.user.name} <Icon type='close-x comment-close' onClick={ this.closeReplyModal } /></h6>
                        <CommentInput exportComment={ this.exportComment } ref='replyInput' />
                    </div>
                </div>
            </article>
        )
    }
}