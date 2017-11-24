import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Icon, Tag, Input, Modal, Breadcrumb, Spin} from 'antd';
import EditorMD from 'Components/EditorMd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import classNames from 'classnames';
import './index.less';

const { Header, Content } = Layout;
const CheckableTag = Tag.CheckableTag;
const { TextArea } = Input;
const ModalConfirm = Modal.confirm;

export default class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
            inputVisible: false,
            tags: [],
            articleTitle: '',
            articleAbstract: '',
            modalVisible: false,
            markdownContent: null,
            aid: null
        };
    }

    static contextTypes = {
        showMessage: PropTypes.func,
        query: PropTypes.object
    };

    componentWillMount() {
        const { query } = this.context;
        if (query.aid) {
            this.getArticle(query.aid);
        }

        Axios.get('/api/get/alltags')
            .then( res => {
                this.setState({
                    tags: res.data.tags
                })
            })
    }

    async getArticle(id) {
        return Axios.get(`/api/get/article/${id}`)
            .then( res => {
                let article = res.data.article;
                this.setState({
                    articleAbstract: article.abstract,
                    articleTitle: article.title,
                    selectedTags: article.tags.map(tag => tag.id ),
                    markdownContent: article.content
                })
            })
    }

    tagChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ?
            [...selectedTags, tag.id] :
            selectedTags.filter(t => t !== tag);
        this.setState({ selectedTags: nextSelectedTags });
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    saveInputRef = input => this.input = input

    saveEditorRef = editor => this.editor = editor

    saveTextAreaRef = textArea => this.textArea = textArea

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    createArticle = () => {
        const { articleTitle, selectedTags } = this.state;

        let articleMarkdown = this.editor.getMarkdown(),
            articleHtml = this.editor.getHTML(),
            articleAbstract = this.state.articleAbstract;


        if (articleMarkdown.indexOf("<!--more-->") !== -1) {
            articleAbstract = articleMarkdown.split("<!--more-->")[0];
        }

        let params = {
            title: articleTitle,
            content: articleMarkdown,
            htmlContent: articleHtml,
            abstract: articleAbstract,
            tags: selectedTags,
            publish: false
        };

        if ( !articleTitle ) return this.context.showMessage('请输入文章标题');

        if (!articleAbstract) {
           return ModalConfirm({
                title: '尚未添加文章摘要，是否添加?',
                okText: "添加",
                cancelText: "不添加",
                onOk: () => {
                    this.showModal();
                },
                onCancel: () => {
                    this.doCreate(params)
                },
            });
        }
        this.doCreate(params);
    }

    doCreate(params) {
        Axios.post('/api/create/article', params)
        .then( res => {
            this.context.showMessage(res.data.message);
            if (res.data.code == 200) {
                this.setState({
                    aid: res.data.article.id
                })
                // this.state.markdownContent = params.content;
                // this.props.history.replace({pathname: '/edit', search: `?aid=${res.data.article.id}`});
            }
        })
        .catch( err => {
            this.context.showMessage(err);
        })
    }

    saveArticle = ()=> {
        const { articleTitle, selectedTags, aid } = this.state;
        const { query } = this.context;

        let articleMarkdown = this.editor.getMarkdown(),
            articleHtml = this.editor.getHTML(),
            articleAbstract = this.state.articleAbstract;

         if (articleMarkdown.indexOf("<!--more-->") !== -1) {
            articleAbstract = articleMarkdown.split("<!--more-->")[0];
        }

        let params = {
            title: articleTitle,
            content: articleMarkdown,
            htmlContent: articleHtml,
            abstract: articleAbstract,
            tags: selectedTags,
            publish: false
        };

        if ( !articleTitle ) return this.context.showMessage('请输入文章标题');

        Axios.post(`/api/update/article/${query.aid || aid}`, params)
            .then( res => {
                let resData = res.data;
                this.context.showMessage(resData.message);
            })
            .catch( err => {
                this.context.showMessage(err.message);
            })
    }

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        if (!inputValue) {
            this.context.showMessage("请输入标签名");
        } else {
            this.creatTag();
        }
    }

    handleInputBlur = () => {
        const { inputValue } = this.state;
        if (!inputValue) {
            this.setState({
                inputVisible: false,
            });
        } else {
            this.creatTag();
        }
    }

    creatTag() {
        let { tags, inputValue, selectedTags } = this.state;

        let isCreate = tags.filter(t => t.name === inputValue);
        if (isCreate.length) {
            return this.setState({
                inputVisible: false,
                selectedTags: [...selectedTags, isCreate[0]],
                inputValue: ''
            })
        }
        Axios.post('/api/create/tag', { name: inputValue })
            .then(res => {
                this.setState({
                    selectedTags: [...selectedTags, res.data.tag],
                    tags: [...tags, res.data.tag],
                    inputVisible: false,
                    inputValue: ''
                })
            })
            .catch( err => {
                this.context.showMessage(err);
            })
    }

    titleInputChange = (e) => {
        this.setState({
            articleTitle: e.target.value
        });
    }

    showModal = () => {
        this.setState({
            modalVisible: true
        });
    }

    modalOk = () => {
        this.setState({
            modalVisible: false,
            articleAbstract: this.textArea.textAreaRef.value
        })
    }

    modalCancel = () => {
        this.setState({
            modalVisible: false
        })
    }


    render() {
        const { selectedTags, inputVisible, inputValue, tags, modalVisible, articleAbstract, articleTitle, markdownContent, aid } = this.state;
        const { query } = this.context;

        return(
            <Layout className="add-article-layout">
                <Header className='add-article-header clearfix' >
                    <h2><Link to="/"><Icon type="home"/> </Link> / <span>文章编辑</span></h2>
                    <div className={classNames("article-title tc", {'creat-pr': !query.aid})}><input type="text" placeholder='新增文章标题' className="article-title-input tc" onChange={ this.titleInputChange } value={articleTitle} /></div>
                    { query.aid || aid ? <Button.Group size={'large'}>
                        <Button onClick={ this.saveArticle } >
                            <Icon type="save" />保存
                        </Button>
                        <Button>
                            发布<Icon type="export" />
                        </Button>
                    </Button.Group> : <div className="single-btn"><Button onClick={ this.createArticle } >
                            <Icon type="file" />创建
                        </Button></div>}
                </Header>
                <Content>
                    <div className="tags-wrap">标签：{
                        tags.map(tag => (
                          <CheckableTag
                            key={tag.id}
                            checked={selectedTags.indexOf(tag.id) > -1}
                            onChange={checked => this.tagChange(tag, checked)}>
                            {tag.name}
                          </CheckableTag>
                        ))}
                        {inputVisible && (
                            <Input
                                ref={this.saveInputRef}
                                type="text"
                                size="small"
                                style={{ width: 78 }}
                                value={inputValue}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputBlur}
                                onPressEnter={this.handleInputConfirm}/>
                        )}
                        {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
                         <Button className="fr" type="primary" size="small" icon="pushpin-o" ghost onClick={ this.showModal }>{ articleAbstract ? '修改摘要' : '添加摘要'}</Button>
                    </div>
                    { query.aid &&  ( markdownContent ? <EditorMD config={{markdown: markdownContent, height: '100%'}} ref={ this.saveEditorRef } /> : <Spin size="large" className='spiner'/>)}
                    { !query.aid ? <EditorMD config={{ markdown: '### 请开始你的表演' ,height: '100%'}} ref={ this.saveEditorRef } /> : null}
                </Content>
                <Modal
                    title="添加摘要"
                    visible={modalVisible}
                    onOk={this.modalOk}
                    mask={ false }
                    onCancel={this.modalCancel}>
                    <TextArea placeholder="这里添加文章的摘要;确认才保存，取消不保存当次更改" autosize={{ minRows: 4,}} ref={ this.saveTextAreaRef }  defaultValue={articleAbstract} />
                </Modal>
                <div id="test"></div>
            </Layout>
        )
    }
}