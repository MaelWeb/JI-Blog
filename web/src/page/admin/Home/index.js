import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Sider } = Layout;
import './index.less';
import AddArticle from '../AddArticle';

const routes = [
    {
        path: '/',
        navText: '发表博客',
        exact: true,
        iconType: 'plus-square-o',
        component: AddArticle
    },
    {
        path: '/book',
        iconType: 'book',
        navText: '新增书籍',
        component: () => <h2>新增书籍</h2>
    }
];
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        };

    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        return(<div className="homg-layout"><Layout className='home-wrap'>
            <Sider collapsible  collapsed={this.state.collapsed} onCollapse={this.onCollapse} className='home-sider' >
                <div className="home-user tc">
                    <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className='home-user-avatar'/>
                    <p>User Name</p>
                </div>
                <Menu mode="inline" defaultSelectedKeys={['0']}>
                    {routes.map((route, index) => (
                        <Menu.Item key={index}><Link to={route.path}>
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