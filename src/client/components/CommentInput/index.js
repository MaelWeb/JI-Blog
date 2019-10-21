import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import ClassNames from 'classnames';
import EmojiData from './data';
import Emojify from '../Emoji';
import Axios from 'axios';
import { Toast } from '../UI';

export default class CommentInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEmoji: false,
        };
    }

    static defaultProps = {
        exportComment: () => {},
        isShowBtn: true,
        placeholder: "你不想说点啥么？"
    };

    static defaultPropTypes = {
        exportComment: PropTypes.func,
        isShowBtn: PropTypes.boolen,
        placeholder: PropTypes.string
    };

    componentDidMount() {
        document.querySelectorAll('.geetest_panel').forEach( dom => dom.remove());
        // this.textareaDom = document.getElementById(this.textareaId);
        this.textareaDom = ReactDOM.findDOMNode(this.refs.commentText);
        const _this = this;
        Axios.get('/api/geetest/register', { params: { _t: +new Date() }})
            .then(res => {
                let resData = res.data;
                if (resData.code == 200) {
                    initGeetest({
                        ...resData.data,
                        product: 'bind'
                    }, captchaObj => {
                        _this.geeTest = captchaObj;

                        _this.geeTest.onReady(function() {

                            _this.isGeeTestReady = true;

                        }).onSuccess(() => {

                            const commentCont = this.refs.commentText.value;
                            _this.props.exportComment(commentCont);

                        }).onError(() => {

                            // Toast.warn("验证码报错叻，呆会儿再试吧");

                        })
                    })
                }

            })
    }

    addEmoji = (event) => {
        this.caretIndex = this.getCaretPosition();
        this.setCaretPosition(this.caretIndex);
        this.insertText(event.target.title);
    }

    toggleEmoji = () => {
        this.caretIndex = this.getCaretPosition();
        this.setState(preState => {
            return { showEmoji: !preState.showEmoji }
        }, () => {
            this.setCaretPosition(this.caretIndex);
        });
    }

    //获取光标位置
    getCaretPosition() {
        let CaretPos = 0;
        if (document.selection) {
            // IE Support
            this.textareaDom.focus();
            let Sel = document.selection.createRange();
            Sel.moveStart('character', -this.textareaDom.value.length);
            CaretPos = Sel.text.length;
        } else if (this.textareaDom.selectionStart || this.textareaDom.selectionStart == '0') {
            // Firefox support
            CaretPos = this.textareaDom.selectionStart;
        }

        return CaretPos;
    }

    //设置光标位置函数
    setCaretPosition(pos) {
        if (this.textareaDom.setSelectionRange) {
            this.textareaDom.focus();
            this.textareaDom.setSelectionRange(pos, pos);
        } else if (this.textareaDom.createTextRange) {
            var range = this.textareaDom.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    insertText(str) {
        if (document.selection) {
            this.textareaDom.focus();
            let sel = document.selection.createRange();
            sel.text = str;
        } else if (typeof this.textareaDom.selectionStart === 'number' && typeof this.textareaDom.selectionEnd === 'number') {
            let startPos = this.textareaDom.selectionStart,
                endPos = this.textareaDom.selectionEnd,
                cursorPos = startPos,
                tmpStr = this.textareaDom.value;
            this.textareaDom.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
            cursorPos += str.length;
            this.textareaDom.selectionStart = this.textareaDom.selectionEnd = cursorPos;
        } else {
            this.textareaDom.value += str;
        }
        this.caretIndex = this.getCaretPosition();
    }

    exportComment = (event) => {
        const commentCont = this.refs.commentText.value;
        if (!commentCont) return Toast.info("写点什么吧～");

        if (this.geeTest && this.geeTest.verify ) return this.geeTest.verify();

        this.props.exportComment(commentCont);
    }

    clearTextarea = () => {
        this.textareaDom.value = '';
    }

    placeholderClick = () => {
        this.textareaDom.focus();
    }

    toggleFocus(isfocus) {
        if (this.textareaDom.value) return;
        this.setState({
            textareaFocus: isfocus
        });
    }


    render() {
        const { showEmoji, textareaFocus, value } = this.state;
        const { isShowBtn, className, placeholder } = this.props;
        return (
            <div className={ ClassNames("blog-comment-input", {[className]: className}) }>
                <div className={ ClassNames("blog-comment-input-textarea", { focus: textareaFocus }) } >
                    <textarea id="JI_Comment_Input" rows="4" ref="commentText" onFocus={ () => { this.toggleFocus(true) } } onBlur={ () => { this.toggleFocus(false) } } ></textarea>
                    { !textareaFocus  ? <span onClick={ this.placeholderClick  } className="blog-comment-input-textarea-placeholder nowrapmulti">{placeholder}</span> : null}
                    <div className="send-box">
                        <button onClick={ this.toggleEmoji } ><Icon type='emoji' size="large" /></button>
                        <button onClick={ this.exportComment }><Icon size="large" type='send' /></button>
                    </div>
                </div>
                <div className={ ClassNames("emoji-box", { show: showEmoji}) } id='CommentEmoji' >
                    <Emojify style={{height: 20, cursor: 'pointer'}} onClick={ this.addEmoji }>
                        <div className='emoji-wrap'>
                            {EmojiData}
                        </div>
                    </Emojify>
                </div>
            </div>
        )
    }
}