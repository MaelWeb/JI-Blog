import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Card, Row, Col, Button} from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import './index.less';

const { Header, Content } = Layout;
const ButtonGroup = Button.Group;

export default class ArticleManege extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 10,
            articles: []
        };
    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    componentWillMount() {
        const { pageSize } = this.state;
        Axios.get('/api/get/all/articles', {
            params: {
                page: 1,
                tag: '',
                size: pageSize
            }
        })
        .then( res => {
            console.log(res);
            this.setState({
                articles: res.data.articles || []
            })
        })
    }

    goEdit(article) {
        this.props.history.push({
            pathname: '/edit',
            search: `?aid=${article.id}`
        });
    }

    render() {
        const { articles } = this.state;
        const bodyStyle = { padding: '15px' };
        return(
            <Layout className="article-manage-layout">
                <Header className='article-manage-header clearfix' >
                    <h2>文章管理</h2><Link to="/edit" className='fr'><Button icon="plus" >写文章</Button></Link>
                </Header>
                <Content className="article-manage-content">
                    <Row gutter={16}>
                        { articles.length ? articles.map( article => {
                            return  <Col span={8} key={article.id} >
                                <Card title={article.title} extra={<Icon type="delete" className="article-delete" />} bodyStyle={bodyStyle} >
                                    <div className="article-content">
                                        {article.abstract || article.content.substr(0, 100)}
                                    </div>
                                    <div className="article-footer clearfix">
                                        <span>{article.createTime}</span>
                                        <ButtonGroup className="fr">
                                          <Button ghost type="primary" size="small">
                                            {article.publish ? <span><Icon type="rollback" />撤回</span> : <span><Icon type="export" />发布</span>}
                                          </Button>
                                          <Button ghost type="primary" size="small" onClick={ () => { this.goEdit(article) } } >
                                           编辑<Icon type="edit" />
                                          </Button>
                                        </ButtonGroup>
                                    </div>
                                </Card>
                            </Col>
                        }) : null}
                    </Row>
                </Content>
            </Layout>
        )
    }
}