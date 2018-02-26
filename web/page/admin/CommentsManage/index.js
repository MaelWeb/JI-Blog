import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Card, Col, Button, Modal, Pagination, Tooltip} from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Masonry from 'react-masonry-component';
import Emojify from 'Components/Emoji';
import CommentInput from 'Components/CommentInput';
import 'Components/CommentInput/index.less';
import './index.less';

const { Header, Content, Footer } = Layout;
const ButtonGroup = Button.Group;
const emojiStyle = {
    height: 20,
};

export default class ComponentsManege extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 12,
            comments: [],
            page: 1,
            isRepeatModalShow: false,
            respondent: {}
        };

        this.hasLoad = false;
    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    componentWillMount() {
        this.getComments(1);
    }


    getComments(_page) {
        const { pageSize, page } = this.state;
        Axios.get('/api/get/comments', {
            params: {
                page: _page || page,
                size: pageSize
            }
        })
        .then( res => {
            this.hasLoad = true;
            this.setState({
                comments: res.data.comments || [],
                allNum: res.data.allNum,
                page: res.data.page
            })
        });
    }

    changePage = page => {
        this.getComments(page);
    }

    toggleComment = (comment, index) => {
        Axios.post('/api/toggle/comment', {
            id: comment.id,
            isRemove: !comment.isRemove
        });

        this.setState( preState => {
            let comments = preState.comments;
            comments[index].isRemove = !comment.isRemove;
            return {
                comments
            }
        })
    }

    doDelete(id) {
        return Axios
            .delete(`/api/comment/${id}`)
            .then( res => {
                if (res.data.code) {
                    this.context.showMessage(res.data.message);
                    this.getComments();
                }
            })
            .catch( err => {
                this.context.showMessage(err);
            })
    }

    deleteComment = comment => {
        Modal.confirm({
            title: '确定删除当前评论?',
            content: '评论删除后不可恢复',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk: () => {
                return this.doDelete(comment.id);
            }
        });
    }

    repeatComment = comment => {
        this.setState({
            isRepeatModalShow: true,
            respondent: comment
        })
    }

    hideRepeat = () => {
        this.setState({
            isRepeatModalShow: false,
        })
    }

    repeat = () => {
        const { respondent } = this.state;
        let commentCont = this.refs.replyInput.textareaDom.value;
        if (!commentCont) return this.context.showMessage('请输入回复内容');
        let data = {
            articleid: respondent.articleid,
            commentCont: this.refs.replyInput.textareaDom.value,
            reply: respondent.id,
            user: {
                name: '记小栈',
                email: 'mael.liang@live.com',
                site: 'https://www.liayal.com',
                avatar: 'https://cdn.liayal.com/image/logo_min.png'
            }
        }
        Axios.post('/api/create/comment', {...data})
            .then( res => {
                let resdata = res.data;
                if (resdata.code  == 200) {
                    this.getComments();
                    this.hideRepeat();
                } else {
                    this.context.showMessage(resdata.message);
                }
            })
            .catch( err => {
                this.context.showMessage('发布失败');
            })
    }

    showComments() {
        const { comments } = this.state;
        const bodyStyle = { padding: '15px' };

        return comments.length ? comments.map( (comment , index) => {
                return  <Col span={8} key={comment.id} >
                    <Card title={<span><Icon type="user" /> {comment.user.name}</span>} extra={<Icon type="delete" className="comment-delete" onClick={ e => this.deleteComment(comment) } />} bodyStyle={bodyStyle} >
                        <Tooltip placement="topLeft" title="点击内容去对应文章"><div className="comment-content"><a href={ comment.articleid ? `${window.location.origin}/article/${comment.articleid}` : 'javascript:void(0);'} className="">
                            <Emojify style={emojiStyle} >{comment.commentCont}</Emojify>
                        </a></div></Tooltip>
                        <div className="comment-footer clearfix">
                            <Icon type="mail" /><span>{comment.user.email}</span>
                            <ButtonGroup className="fr">
                                <Button ghost type="primary" size="small" onClick={ e => { this.repeatComment(comment) } } >
                                    <Icon type="message" />回复
                                </Button>
                                <Button ghost type="primary" size="small" onClick={ e => { this.toggleComment(comment, index) } } >
                                    {comment.isRemove ? <span><Icon type="eye" />显示</span> : <span><Icon type="eye-o" />隐藏</span>}
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Card>
                </Col>
            }) : null;
    }

    render() {
        const { comments, page, allNum, pageSize, isRepeatModalShow, respondent } = this.state;
        return(
            <Layout className="comments-manage-layout">
                <Header className='comments-manage-header clearfix' >
                    <h3>评论管理</h3>
                </Header>
                <Content className="comments-manage-content">
                    { comments.length ? <Masonry className="comments-list">
                        { this.showComments() }
                    </Masonry> : <p className="tc" style={{ fontSize: '.2rem', padding: '.4rem 0'}} >~~ 暂无评论 ~~</p> }
                </Content>
                { comments.length ? <Footer><Pagination className='tc' showQuickJumper current={ page }  total={allNum} onChange={ this.changePage } pageSize={pageSize} /></Footer> : null}
                <Modal
                    title={ `回复：${respondent.user && respondent.user.name}`}
                    visible={isRepeatModalShow}
                    onOk={this.repeat}
                    onCancel={ this.hideRepeat}
                    okText='确定'
                    cancelText='取消'
                    mask={ false } >
                    <CommentInput isShowBtn={ false } ref='replyInput' />
                </Modal>
            </Layout>
        )
    }
}