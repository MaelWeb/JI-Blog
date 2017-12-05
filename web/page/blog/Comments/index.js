import React, { Component } from 'react';
import ClassNames from 'classnames';
import Icon from '../../../components/Icon';
import Emojify from 'react-emojione';
import EmojiData from './EmojiData';

export default class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEmoji: false
        };

        this.caretIndex = 0;
    }

    exportComment = () => {
        const commentCont = this.refs.commentText.value;
    }

    addEmoji = (event) => {
        this.setCaretPosition(this.caretIndex);
        this.insertText(event.target.title);
        this.caretIndex = this.getCaretPosition();
    }

    toggleEmoji = () => {
        this.caretIndex = this.getCaretPosition();
        this.setState(preState => {
            return { showEmoji: !preState.showEmoji }
        }, () => {
            this.setCaretPosition(this.caretIndex);
        })
    }

    //获取光标位置
    getCaretPosition () {
        let textarea = document.getElementById('idTextarea');
        let CaretPos = 0;
        if (document.selection) {
            // IE Support
            textarea.focus ();
            let Sel = document.selection.createRange ();
            Sel.moveStart ('character', -textarea.value.length);
            CaretPos = Sel.text.length;
        } else if (textarea.selectionStart || textarea.selectionStart == '0') {
            // Firefox support
            CaretPos = textarea.selectionStart;
        }

        return CaretPos;
    }

    //设置光标位置函数
    setCaretPosition(pos){
        let textarea = document.getElementById('idTextarea');
        if(textarea.setSelectionRange) {
            textarea.focus();
            textarea.setSelectionRange(pos,pos);
        } else if (textarea.createTextRange) {
            var range = textarea.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    insertText(str) {
        let textarea = document.getElementById('idTextarea');
        if (document.selection) {
            textarea.focus();
            var sel = document.selection.createRange();
            sel.text = str;
        } else if (typeof textarea.selectionStart === 'number' && typeof textarea.selectionEnd === 'number') {
            var startPos = textarea.selectionStart,
                endPos = textarea.selectionEnd,
                cursorPos = startPos,
                tmpStr = textarea.value;
            textarea.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
            cursorPos += str.length;
            textarea.selectionStart = textarea.selectionEnd = cursorPos;
        } else {
            textarea.value += str;
        }
    }

    render() {
        const { showEmoji } = this.state;
        return (
            <article className="blog-comment">
                <div className="comment-input">
                    <textarea rows="4" ref="commentText" id="idTextarea" ></textarea>
                    <div className="btn clearfix">
                        <Icon type='emoji' className='fl' onClick={ this.toggleEmoji } />
                        <button onClick={ this.exportComment } >发布</button>
                    </div>
                    <div className={ ClassNames("emoji-box", { show: showEmoji}) } id='CommentEmoji' >
                        <Emojify style={{height: 20, cursor: 'pointer',  backgroundImage: 'url("http://ozrrmt7n9.bkt.clouddn.com/image/emojione-3.1.2-32x32.png")',}} onClick={ this.addEmoji }>
                            <div className='emoji-wrap'>
                                {EmojiData}
                            </div>
                        </Emojify>
                    </div>
                </div>

                <div className="comment-list">
                    <div className="comment-item clearfix">
                        <div className="comment-avatar fl"><Icon type='avatar' /></div>
                        <div className="comment-body fl">
                            <h6>浮生记<small>34分钟前</small></h6>
                            <blockquote>@mael: 你到时过来试一试呀</blockquote>
                            <p>我就是试试</p>
                        </div>
                    </div>
                    <div className="comment-item clearfix">
                        <div className="comment-avatar fl"><Icon type='avatar' /></div>
                        <div className="comment-body fl">
                            <h6>浮生记<small>34分钟前</small></h6>
                            <blockquote>@mael: 你到时过来试一试呀</blockquote>
                            <p>我就是试试</p>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}