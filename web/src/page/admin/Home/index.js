import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

import './index.less';

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
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className='home-sider' >
                <div className="logo" />
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Icon type="upload" />
                      <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Icon type="bar-chart" />
                      <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ marginLeft: this.state.collapsed ? 75 : 200 }} className='home-content-layout'>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                      ...
                      <br />
                      Really
                      <br />...<br />...<br />...<br />
                      long
                      <br />...<br />...<br />...<br />...<br />...<br />...
                      <br />...<br />...<br />...<br />...<br />...<br />...
                      <br />...<br />...<br />...<br />...<br />...<br />...
                      <br />...<br />...<br />...<br />...<br />...<br />...
                      <br />...<br />...<br />...<br />...<br />...<br />...
                      <br />...<br />...<br />...<br />...<br />...<br />...
                      <br />...<br />...<br />...<br />...<br />...<br />
                      content
                    </div>
                </Content>
            </Layout>
    </Layout></div>)
    }
}