import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';
import Axios from 'axios';
import './login.less';

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
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

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login-layout" style={{minHeight: document.body.clientHeight,}} >
                <div className="login-wrap">
                    <div className="login-form tc">
                        <h1>M&Q</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('userName', { rules: [{required: true, message: '请输入用户名'}],})(<Input  placeholder="用户名" />)}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {rules: [{required: true,message: '请输入密码'}],})(<Input type="password" placeholder="密码" />)}
                            </FormItem>
                            <FormItem>
                              <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
                            </FormItem>
                          </Form>
                    </div>
                    <img src="http://oyfapuy1b.bkt.clouddn.com/image/login.jpg" alt="" className="login-banner"/>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login)