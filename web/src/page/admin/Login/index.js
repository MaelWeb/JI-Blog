import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Tabs } from 'antd';
import Axios from 'axios';
import RegisteForm from './resigte-form';
import LoginForm from './login-form';
import Funy from './funy';
import './login.less';

const TabPane = Tabs.TabPane;

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            one: []
        };

    }

    static contextTypes = {
        showMessage: PropTypes.func
    };


    componentDidMount() {
        Axios.get('/api/one')
            .then( res => {
                this.setState({
                    one: res.data.data
                })
            })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.refs.loginForm.validateFields((err, values) => {
            if (!err) {
                Axios.post('/api/signin', values)
                    .then((res)=> {
                        let result = res.data;

                        if (result.code != 200) {
                            this.context.showMessage(result.message);
                        } else {
                            this.props.history.push('/');
                        }
                    })
                    .catch( (error) => {
                        this.context.showMessage('系统错误，请稍后再试');
                    });
            }
        });
    }



    handleRegisterSubmit = e => {
        e.preventDefault();
         this.refs.registeForm.validateFields((err, values) => {
            if (!err) {
                Axios.post('/api/singup', values)
                    .then((res)=> {
                        let result = res.data;

                        if (result.code != 200) {
                            this.context.showMessage(result.message);
                        } else {
                            this.props.history.push('/login');
                        }
                    })
                    .catch( (error) => {
                        this.context.showMessage('系统错误，请稍后再试');
                    });
            }
        });
    }

    render() {
        const {match} = this.props;
        const {one} = this.state;
        return (
            <div className="login-layout" style={{minHeight: document.body.clientHeight,}} >
                <div className="login-wrap">
                    <p className="jitang tl"><span>M</span>给自己一次文艺的机会</p>
                    <Tabs tabPosition='left' defaultActiveKey={match.path || '/login'} >
                        <TabPane tab="登录" key="/login">
                            <LoginForm handleSubmit={ this.handleSubmit } ref='loginForm' />
                            <Funy data={ one } />
                        </TabPane>
                        <TabPane tab="注册" key="/registe">
                            <RegisteForm handleRegisterSubmit={ this.handleRegisterSubmit } ref='registeForm' />
                            <Funy data={ one }/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}