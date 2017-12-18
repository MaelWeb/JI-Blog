import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Card, Col, Button, Modal, Pagination} from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Masonry from 'react-masonry-component';
import Emojify from 'react-emojione';
import './index.less';

const { Header, Content, Footer } = Layout;
const emojiStyle = {
    height: 20,
    backgroundImage: 'url("http://ozrrmt7n9.bkt.clouddn.com/image/emojione-3.1.2-32x32.png")'
};

export default class ComponentsManege extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 12,
            comments: [],
            page: 1
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

    showComments() {
        const { comments } = this.state;
        const bodyStyle = { padding: '15px' };

        return comments.length ? comments.map( (comment , index) => {
                return  <Col span={8} key={comment.id} >
                    <Card title={<span><Icon type="user" /> {comment.user.name}</span>} extra={<Icon type="delete" className="comment-delete" onClick={ e => this.deleteComment(comment) } />} bodyStyle={bodyStyle} >
                        <div className="comment-content">
                            <Emojify style={emojiStyle} >{comment.commentCont}</Emojify>
                        </div>
                        <div className="comment-footer clearfix">
                            <Icon type="mail" /><span>{comment.user.email}</span>
                            <Button ghost type="primary" size="small" className='fr' onClick={ e => { this.toggleComment(comment, index) } } >
                                {comment.isRemove ? <span><Icon type="eye" />显示</span> : <span><Icon type="eye-o" />隐藏</span>}
                            </Button>
                        </div>
                    </Card>
                </Col>
            }) : null;
    }

    render() {
        const { comments, page, allNum, pageSize } = this.state;
        return(
            <Layout className="comments-manage-layout">
                <Header className='comments-manage-header clearfix' >
                    <h2>评论管理</h2>
                </Header>
                <Content className="comments-manage-content">
                    { comments.length ? <Masonry className="comments-list">
                        { this.showComments() }
                    </Masonry> : <p className="tc" style={{ fontSize: '.2rem', padding: '.4rem 0'}} >~~ 暂无评论 ~~</p> }
                </Content>
                { comments.length ? <Footer><Pagination className='tc' showQuickJumper current={ page }  total={allNum} onChange={ this.changePage } pageSize={pageSize} /></Footer> : null}
            </Layout>
        )
    }
}