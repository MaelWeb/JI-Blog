import React, { Component } from 'react';
import { Layout, Modal, Input, Button, Avatar, } from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Cookies from 'js-cookie';
import './index.less';

const {Header, Content} = Layout;

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {},
            showModal: false
        };
    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    componentWillMount() {
        Axios.get('/api/get/userinfo')
            .then( res => {
                this.setState({
                    userInfo: res.data.user
                })
            })
    }

    modalOk = () => {
        const name = this.refs.ModalInput.refs.input.value;

        if (!name) return this.context.showMessage("请输入昵称");

        Axios.post('/api/update/userinfo', {name})
            .then( res => {
                this.context.showMessage(res.data.message);

                if (res.data.code == 200) {
                    this.setState( preState => {
                        let userInfo = preState.userInfo;
                        userInfo.name = name;

                        return {userInfo, showModal: false};
                    })
                }
            })
    }

    setNickName = () => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

    logout = () => {
        Cookies.remove('access_token');
        Cookies.remove('uid');
        this.props.history.push('/login');
    }

    render() {
        const { userInfo, showModal } = this.state;
        return (
            <Layout className ="userinfo-layout" >
                <Header className = 'userinfo-header clearfix' >
                    <h2 >账号设置</h2><Button className='fr logout' onClick={ this.logout } >退出登录</Button>
                </Header>
                <Content className = "userinfo-manage-content" >
                    <div className="userinfo-body">
                        <div className="info">
                            <h4>信息</h4>
                            <div className="info-box">
                                <span className="label">昵称：</span>
                                <span className="text">{userInfo.name || '----'}</span>
                                <Button type="primary" size="small" onClick={ this.setNickName } >{ userInfo.name ? '修改昵称' : '设置昵称'}</Button>
                            </div>
                            <div className="info-box">
                                <span className="label">邮箱：</span>
                                <span className="text">{ userInfo.email }</span>
                            </div>
                        </div>
                    </div>
                </Content>
                <Modal
                    title="设置／修改昵称"
                    visible={showModal}
                    onOk={ this.modalOk }
                    onCancel={ this.hideModal }
                    okText="确定"
                    cancelText="取消"
                >
                  <Input ref='ModalInput' placeholder="请输入昵称" />
                </Modal>
            </Layout>
        )
    }
}