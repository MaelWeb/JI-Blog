import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Card, Col, Button, Modal, Pagination} from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Masonry from 'react-masonry-component';
import './index.less';

const { Header, Content, Footer } = Layout;
const ButtonGroup = Button.Group;

export default class ArticleManege extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 12,
            articles: [],
            one: [],
            page: 1,
            allNum: 0
        };

        this.hasLoad = false;
    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    componentWillMount() {
        this.getOne();
        this.getArticles(1);
    }

    goEdit(article) {
        this.props.history.push({
            pathname: '/edit',
            search: `?aid=${article.id}`
        });
    }

    getOne() {
        Axios.get('/api/one')
            .then( res => {
                this.setState({
                    one: res.data.data
                })
            });
    }

    getArticles(page) {
        const { pageSize } = this.state;
        Axios.get('/api/get/all/articles', {
            params: {
                page: page,
                tag: '',
                size: pageSize
            }
        })
        .then( res => {
            this.hasLoad = true;
            this.setState({
                articles: res.data.articles || [],
                page: page,
                allNum: res.data.allNum
            })
        });
    }

    doDelete(id) {
        return Axios
            .delete(`/api/article/${id}`)
            .then( res => {
                if (res.data.code) {
                    this.context.showMessage(res.data.message);
                    this.getArticles();
                }
            })
            .catch( err => {
                this.context.showMessage(err);
            })
    }

    deleteArticle = article => {
        Modal.confirm({
            title: '确定删除文章?',
            content: '文章删除后不可恢复',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk: () => {
                return this.doDelete(article.id);
            }
        });
    }

    showOne() {
        const { one } = this.state;
        return one.length ? one.map( (o, i) => <Col span={8} key={i} >
                <Card bodyStyle={{ padding: 0 }}>
                <div className="one-image">
                  <img src={o.imgUrl} />
                </div>
                <div className="one-card">
                  <p>{o.text}</p>
                </div>
            </Card></Col>) : null;

    }

    changePage = page => {
        this.getArticles(page);
    }

    showArticles() {
        const { articles } = this.state;
        const bodyStyle = { padding: '15px' };

        return articles.length ? articles.map( article => {
                return  <Col span={8} key={article.id} >
                    <Card title={article.title} extra={<Icon type="delete" className="article-delete" onClick={ e => this.deleteArticle(article) } />} bodyStyle={bodyStyle} >
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
            }) : null;
    }

    render() {
        const { articles, page, allNum, pageSize } = this.state;
        return(
            <Layout className="article-manage-layout">
                <Header className='article-manage-header clearfix' >
                    <h2>文章管理</h2><Link to="/edit" className='fr'><Button icon="plus" >写文章</Button></Link>
                </Header>
                <Content className="article-manage-content">
                    <Masonry className="article-list">
                        {  articles.length ? this.showArticles() : this.showOne() }
                    </Masonry>
                </Content>
                { articles.length ? <Footer><Pagination className='article-pn' showQuickJumper current={ page }  total={allNum} onChange={ this.changePage } pageSize={pageSize} /></Footer> : null}
            </Layout>
        )
    }
}