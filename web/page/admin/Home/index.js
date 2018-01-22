import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Bundle from 'Components/Bundle';
import { Layout, Menu, Icon, Avatar } from 'antd';
import loadArticleManage from 'bundle-loader?lazy&name=article-manage!../ArticleManage';
import loadArticleEdite from 'bundle-loader?lazy&name=article-edite!../ArticleEdite';
import loadPhotoManage from 'bundle-loader?lazy&name=photo!../PhotoManage';
import loadCommentsManage from 'bundle-loader?lazy&name=comment!../CommentsManage';
import loadUserInfo from 'bundle-loader?lazy&name=userinfo!../UserInfo';
import loadBlogBanner from 'bundle-loader?lazy&name=blogbanner!../BlogBanner';
import loadBooksManage from 'bundle-loader?lazy&name=books!../BooksManage';
const { Sider } = Layout;
import './index.less';

const ArticleEdite = (props) => (
  <Bundle load={loadArticleEdite}>
    {(ArticleEdite) => <ArticleEdite {...props}/>}
  </Bundle>
);

const ArticleManage = (props) => (
  <Bundle load={loadArticleManage}>
    {(ArticleManage) => <ArticleManage {...props}/>}
  </Bundle>
);

const PhotoManage = (props) => (
  <Bundle load={loadPhotoManage}>
    {(PhotoManage) => <PhotoManage {...props}/>}
  </Bundle>
);

const CommentsManage = (props) => (
  <Bundle load={loadCommentsManage}>
    {(CommentsManage) => <CommentsManage {...props}/>}
  </Bundle>
);

const BlogBanner = (props) => (
  <Bundle load={loadBlogBanner}>
    {(BlogBanner) => <BlogBanner {...props}/>}
  </Bundle>
);

const BooksManage = (props) => (
  <Bundle load={loadBooksManage}>
    {(BooksManage) => <BooksManage {...props}/>}
  </Bundle>
);

const UserInfo = (props) => (
  <Bundle load={loadUserInfo}>
    {(UserInfo) => <UserInfo {...props}/>}
  </Bundle>
);

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
                    <Avatar size="large" src="//cdn.liayal.com/image/logo_col.png" className='home-user-avatar'/>
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