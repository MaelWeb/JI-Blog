import React, { Component } from 'react';
import { Layout, Button, Icon  } from 'antd';
import EditorMD from 'Components/EditorMd';
import './index.less';

const { Header, Content, Sider } = Layout;

export default class AddArticle extends Component {
    constructor(props) {
        super(props);

    }

    render() {
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
                    <EditorMD config={{markdown: '## 文章内容', height: '100%'}}/>
                </Content>
            </Layout>
        )
    }
}