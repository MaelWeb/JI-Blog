import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, message } from 'antd';

export default class BasePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alertText: ''
        };

        message.config({
            top: 50,
        });

    }

    static childContextTypes = {
        showMessage: PropTypes.func
    };

    getChildContext() {
        return {
            showMessage: this.showMessage
        }
    }

    showMessage = (opts) => {
        let options = (typeof opts == 'string') ?  {content: opts} : opts;
        let type =  options.type || '',
            onClose = options.onClose  && (typeof options.onClose == 'function') ? options.onClose : ()=>{};

        switch (type) {
            case 'success':
                message.success(options.content, options.duration || 3, onClose);
                break;
            case 'error':
                message.error(options.content, options.duration || 3, onClose);
                break;
            case 'warning':
                message.warning(options.content, options.duration || 3, onClose);
                break;
            default:
                message.info( options.content, options.duration || 3, onClose);
        }
    }

    render() {
        return (
            <div className="admin-layout">
                { this.props.children}
            </div>
        )
    }
}