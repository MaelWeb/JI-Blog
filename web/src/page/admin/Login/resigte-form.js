import React, { Component } from 'react';
import { Form, Input, Button, } from 'antd';

const FormItem = Form.Item;

class RegisteForm extends Component {
    constructor(props) {
        super(props);


    }

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('两次密码不一致');
        } else {
          callback();
        }
    }



    render() {
        const {form: {getFieldDecorator}, handleRegisterSubmit } = this.props;
        return(
        <Form onSubmit={ handleRegisterSubmit } className='login-form register-form'>
            <FormItem hasFeedback>
                {getFieldDecorator('userName', { rules: [{required: true, message: '请输入用户名'}],})(<Input  placeholder="用户名" />)}
            </FormItem>
            <FormItem hasFeedback>
                {getFieldDecorator('email', { rules: [{type: 'email', message: 'The input is not valid E-mail!', }, { required: true, message: '请输入邮箱',}], })(<Input placeholder="E-mail" />) }
            </FormItem>
            <FormItem hasFeedback>
                {getFieldDecorator('password', {rules: [{required: true,message: '请输入密码'}],})(<Input type="password" placeholder="密码" />)}
            </FormItem>
             <FormItem hasFeedback>
              {getFieldDecorator('confirmPassword', {
                rules: [{
                  required: true, message: '请再次输入密码',
                }, {
                  validator: this.checkPassword,
                }],
                })(
                <Input type="password" onBlur={this.handleConfirmBlur} placeholder='再次输入密码' />
                )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="btn">注册</Button>
            </FormItem>
      </Form>
    )}
}

export default Form.create()(RegisteForm)