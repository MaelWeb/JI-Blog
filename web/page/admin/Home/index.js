import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Sider } = Layout;
import './index.less';
import ArticleEdite from '../ArticleEdite';
import ArticleManage from '../ArticleManage';
import PhotoManage from '../PhotoManage';
import CommentsManage from '../CommentsManage';
import UserInfo from '../UserInfo';
import BlogBanner from '../BlogBanner';
import BooksManage from '../BooksManage';

const routes = [
    {
        path: '/',
        exact: true,
        iconType: 'home',
        navText: '文章管理',
        component: ArticleManage
    },
    {
        path: '/edit',
        navText: '添加/编辑',
        iconType: 'plus-square-o',
        component: ArticleEdite
    },
    {
        path: '/banner',
        navText: 'Banner设置',
        iconType: 'setting',
        component: BlogBanner
    },
    {
        path: '/photo',
        navText: '图集管理',
        iconType: 'picture',
        component: PhotoManage
    },
    {
        path: '/book',
        navText: '图书管理',
        iconType: 'book',
        component: BooksManage
    },
    {
        path: '/comments',
        navText: '评论管理',
        iconType: 'message',
        component: CommentsManage
    },
    {
        path: '/user',
        navText: '账号设置',
        iconType: 'setting',
        component: UserInfo
    }
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        let screenWidth = document.body.offsetWidth;
        this.state = {
            collapsed: screenWidth <= 1024 ? true : false
        };
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    getSelectedKeys = () => {
        const { location: {pathname} } = this.props;

        switch (pathname) {
            case "/":
            case "/edit":
                return '/';
                break;
            default:
                return pathname;
        }
    }

    render() {
        return(<div className="homg-layout"><Layout className='home-wrap'>
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                className='home-sider' >
                <div className="home-user tc">
                    <Avatar size="large" src="http://cdn.liayal.com/image/logo_col.png" className='home-user-avatar'/>
                </div>
                <Menu mode="inline" selectedKeys={[this.getSelectedKeys()]}>
                    {routes.map((route, index) => (
                        (route.path != '/edit') && <Menu.Item key={route.path}><Link to={route.path}>
                            <Icon type={route.iconType} />
                            <span className="nav-text">{route.navText}</span>
                        </Link></Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout style={{ marginLeft: this.state.collapsed ? 65 : 200 }} className='home-content-layout'>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={!!route.exact}
                    component={route.component}
                  />
                ))}
            </Layout>
      </Layout></div>)
    }
}