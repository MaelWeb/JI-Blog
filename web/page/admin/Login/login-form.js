import React, { Component } from 'react';
import { Form, Input, Button, } from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const {form: {getFieldDecorator}, handleSubmit } = this.props;
        return(
        <Form onSubmit={ handleSubmit } className='login-form'>
            <FormItem>
                {getFieldDecorator('userName', { rules: [{required: true, message: '请输入用户名'}],})(<Input  placeholder="用户名" />)}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {rules: [{required: true,message: '请输入密码'}],})(<Input type="password" placeholder="密码" />)}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="btn">登录</Button>
            </FormItem>
      </Form>
    )}
}

export default Form.create()(LoginForm)