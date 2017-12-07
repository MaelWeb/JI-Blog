import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Icon from '../../../components/Icon';
import ClassNames from 'classnames';
import EmojiData from './EmojiData';
import Emojify from 'react-emojione';

export default class CommentInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEmoji: false,
        };
    }

    static defaultProps = {
        exportComment: () => {}
    };

    static defaultPropTypes = {
        exportComment: PropTypes.func
    };

    componentDidMount() {
        // this.textareaDom = document.getElementById(this.textareaId);
        this.textareaDom = ReactDOM.findDOMNode(this.refs.commentText);
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
        })
    }

    //获取光标位置
    getCaretPosition () {
        let CaretPos = 0;
        if (document.selection) {
            // IE Support
            this.textareaDom.focus ();
            let Sel = document.selection.createRange ();
            Sel.moveStart ('character', -this.textareaDom.value.length);
            CaretPos = Sel.text.length;
        } else if (this.textareaDom.selectionStart || this.textareaDom.selectionStart == '0') {
            // Firefox support
            CaretPos = this.textareaDom.selectionStart;
        }

        return CaretPos;
    }

    //设置光标位置函数
    setCaretPosition(pos){
        if(this.textareaDom.setSelectionRange) {
            this.textareaDom.focus();
            this.textareaDom.setSelectionRange(pos,pos);
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
            var sel = document.selection.createRange();
            sel.text = str;
        } else if (typeof this.textareaDom.selectionStart === 'number' && typeof this.textareaDom.selectionEnd === 'number') {
            var startPos = this.textareaDom.selectionStart,
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

    exportComment = () => {
        const commentCont = this.refs.commentText.value;
        this.props.exportComment(commentCont);
    }

    clearTextarea = () => {
        this.textareaDom.value = '';
    }


    render() {
        const { showEmoji } = this.state;
        return (
            <div className="comment-input">
                <textarea rows="4" ref="commentText" placeholder='你不想说点啥么？' ></textarea>
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
        )
    }
}