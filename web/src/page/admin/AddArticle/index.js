import React, { Component } from 'react';
import { Layout, Button, Icon, Tag, Input  } from 'antd';
import EditorMD from 'Components/EditorMd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import './index.less';

const { Header, Content, Sider } = Layout;
const CheckableTag = Tag.CheckableTag;

export default class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
            inputVisible: false,
            tags: []
        };
    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    componentWillMount() {
        Axios.get('/api/get/alltags')
            .then( res => {
                this.setState({
                    tags: res.data.tags
                })
            })
    }

    tagChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ?
            [...selectedTags, tag] :
            selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    saveInputRef = input => this.input = input

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
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
    }


    render() {
        const { selectedTags, inputVisible, inputValue, tags } = this.state;
        return(
            <Layout className="add-article-layout">
                <Header className='add-article-header' >
                    <h2>文章编辑</h2>
                    <div className="article-title tc"><input type="text" defaultValue='新增文章标题' className="article-title-input tc"/></div>
                    <Button.Group size={'large'}>
                        <Button>
                            <Icon type="save" />保存
                        </Button>
                        <Button>
                            发布<Icon type="export" />
                        </Button>
                    </Button.Group>
                </Header>
                <Content>
                    <div className="tags-wrap">标签：{
                        tags.map(tag => (
                          <CheckableTag
                            key={tag.id}
                            checked={selectedTags.indexOf(tag) > -1}
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
                    </div>
                    <EditorMD config={{markdown: '## 文章内容', height: '100%'}}/>
                </Content>
            </Layout>
        )
    }
}