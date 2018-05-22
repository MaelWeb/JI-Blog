import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import ClassNames from 'classnames';
import CommentInput from '../../../components/CommentInput';
import MessageItem from './message.js';
import Masonry from 'react-masonry-component';
import { message } from 'antd';
import Moment from 'moment';
import Icon from '../../../components/Icon';

Moment.locale('zh-cn');

export default class Message extends Component {
    constructor(props) {
        super(props);

        const { banners, comments, allPage, page } = props;
        this.state = {
            banners,
            comments,
            showUserInfo: false,
            isShowReplyModal: false,
            reply: null,
            commentCont: null
        };
    }

    static defaultProps = {
        comments: [],
        banners: []
    };

    static defaultPropTypes = {
        comments: PropTypes.array,
        banners: PropTypes.array
    };


    componentDidMount() {
        if (!this.state.banners ) {
            Axios.get('/api/one')
                .then(res => {
                    this.setState({
                        banners: res.data.data
                    })
                });

            Axios.get(`/api/get/comments?articleid=message666`)
                .then( res => {
                    let resData = res.data;
                    this.setState({
                        comments: resData.comments,
                        page: resdata.page,
                        allPage: resdata.allPage
                    })
                })
        }
    }

    exportComment = commentCont => {
        const { reply } = this.state;
        const user = /access\_token/g.test(document.cookie) ? {
            name: '记小栈',
            email: 'mael.liang@live.com',
            site: 'https://www.liayal.com',
            avatar: 'https://cdn.liayal.com/image/logo_min.png'
        } : window.localStorage.getItem('_liayal_user');

        if (!commentCont) return message.info('你倒是写点什么啊！');

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

        if (!email || !name ) return message.info('填一下昵称和邮箱呗！');

        if (!emailReg.test(email)) return message.info('邮箱格式不正确呀！');

        window.localStorage.setItem('_liayal_user', JSON.stringify({name, email, site}));

        this.saveComment({
            user: {name, email, site},
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
        let comments = this.state.comments;
        Axios.post('/api/create/comment', {...data, articleid: "message666"})
            .then( res => {
                let resdata = res.data;
                if (resdata.code  == 200) {
                    comments.unshift(resdata.comment);
                    data.reply ? this.refs.replyInput.clearTextarea() : this.refs.commentInput.clearTextarea();
                    this.setState({
                        showUserInfo: false,
                        isShowReplyModal: false,
                        reply: null,
                        comments: comments,
                        commentCont: null
                    });
                } else {
                    message.warning(resdata.message);
                }
            })
            .catch( err => {
                message.warning('发布失败');
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
            isShowReplyModal: false
        })
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
        const { banners, comments, showUserInfo, isShowReplyModal, reply } = this.state;
        let randomIndex = Math.floor(Math.random()* banners.length),
            header = banners[randomIndex] || {};
        return (
            <div className="blog-message-layout">
                <div className="blog-message-header" style={{ backgroundImage: `url(${header.imgUrl})` }} >
                    <div className="blog-message-header-input">
                        <CommentInput exportComment={ this.exportComment } placeholder={ header.text } ref='commentInput' />
                    </div>
                </div>
                <div className="blog-message-body">
                    <Masonry className="blog-message-list clearfix">
                        { comments.length ? comments.map((comment, index) => !comment.isRemove && <MessageItem key={index} comment={comment} />) : null }
                    </Masonry>
                </div>
                <div className="comment-modal" hidden={!showUserInfo} style={{zIndex: 5}} ref='UserModal'>
                    <div className="comment-user-modal-form">
                            <img src="//cdn.liayal.com/image/logo.png" alt=""/>
                            <input type="text" name="name" placeholder='昵称(必填)' ref='userName' />
                            <input type="text" name="email" placeholder='xxxx@qq.com(必填)' ref='userEamil' />
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
            </div>
        )
    }
}