import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Icon, Tag, Input, Modal, Breadcrumb, Spin, Radio} from 'antd';
import EditorMD from 'Components/EditorMd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import classNames from 'classnames';
import './index.less';

const { Header, Content } = Layout;
const CheckableTag = Tag.CheckableTag;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
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
            isAbstractModalShow: false,
            isCategoryModalShow: false,
            markdownContent: null,
            aid: null,
            category: 'DEFAULT',
            isPublish: false
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
                    markdownContent: article.content,
                    category: article.category,
                    isPublish: article.publish
                })
            })
    }

    tagChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ?
            [...selectedTags, tag.id] :
            selectedTags.filter(t => t !== tag);
        this.setState({ selectedTags: nextSelectedTags });
        Axios.post('/api/update/tag/count', {id: tag.id, type: checked ? 1 : -1});
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

        let reg =  /<img[^>]+src=['"]([^'"]+)['"]+/g;

        let images = [], temp;

        while( (temp = reg.exec(articleHtml)) != null ) {
            images.push(temp[1]);
        }

        let params = {
            title: articleTitle,
            content: articleMarkdown,
            htmlContent: articleHtml,
            abstract: articleAbstract,
            tags: selectedTags,
            publish: false,
            banner: images.length ? images[0] : ''
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
            isAbstractModalShow: true
        });
    }

    showExportModal = () => {
        this.setState({
            isCategoryModalShow: true
        });
    }

    articleAbstractOk = () => {
        this.setState({
            isAbstractModalShow: false,
            articleAbstract: this.textArea.textAreaRef.value
        })
    }

    articleAbstractCancle = () => {
        this.setState({
            isAbstractModalShow: false
        })
    }

    exportModalOk = () => {
        const { query } = this.context;
        const { aid, category } = this.state;
        Axios.post(`/api/publish/article/${query.aid || aid}`, {category})
            .then( res => {
                this.context.showMessage(res.data.message);
                this.setState({
                    isCategoryModalShow: false,
                    isPublish: res.data.code == 200 ? true : false
                });
            })
            .catch( err => {
                this.context.showMessage('服务器错误');
            })
    }

    recallArticle = () => {
        const { query } = this.context;
        const { aid, category } = this.state;

        Axios.post(`/api/recall/article/${query.aid || aid}`)
            .then( res => {
                this.context.showMessage(res.data.message);
                this.setState({
                    isPublish: res.data.code == 200 ? false : true
                });
            })
            .catch( err => {
                this.context.showMessage('服务器错误');
            })
    }

    exportModalCancle = () => {
        this.setState({
            isCategoryModalShow: false
        });
    }


    onRadioChange = e => {
        this.setState({
            category: e.target.value
        })
    }


    render() {
        const { selectedTags, inputVisible, inputValue, tags, isAbstractModalShow, articleAbstract, articleTitle, markdownContent, aid, isCategoryModalShow, category, isPublish } = this.state;
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
                        { isPublish ? <Button onClick={ this.recallArticle } >
                            撤回<Icon type="rollback" />
                        </Button> : <Button onClick={ this.showExportModal } >
                            发布<Icon type="export" />
                        </Button>}
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
                    visible={isAbstractModalShow}
                    onOk={this.articleAbstractOk}
                    mask={ false }
                    onCancel={this.articleAbstractCancle}>
                    <TextArea placeholder="这里添加文章的摘要;确认才保存，取消不保存当次更改" autosize={{ minRows: 4,}} ref={ this.saveTextAreaRef }  defaultValue={articleAbstract} />
                </Modal>
                <Modal
                    title="选择发布板块"
                    visible={isCategoryModalShow}
                    onOk={this.exportModalOk}
                    mask={ false }
                    onCancel={this.exportModalCancle}>
                    <RadioGroup onChange={this.onRadioChange} value={ category }>
                        <Radio value='DEFAULT'>首页</Radio>
                        <Radio value='TRAVEL' >游记</Radio>
                    </RadioGroup>
                </Modal>
            </Layout>
        )
    }
}