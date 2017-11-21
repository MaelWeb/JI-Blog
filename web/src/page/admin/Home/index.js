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
        path: '/photo',
        navText: '图集管理',
        iconType: 'picture',
        component: PhotoManage
    }
];

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        };
        console.log(this.props);
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
            <Sider collapsible  collapsed={this.state.collapsed} onCollapse={this.onCollapse} className='home-sider' >
                <div className="home-user tc">
                    <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className='home-user-avatar'/>
                    <p>User Name</p>
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
            <Layout style={{ marginLeft: this.state.collapsed ? 75 : 200 }} className='home-content-layout'>
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