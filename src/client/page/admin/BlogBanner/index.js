import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Upload, Button, Input, Icon, message, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {IMG_URL, IMG_QUERY} from '../../../config/';
import './index.less';

const {Header, Content, Footer} = Layout;
const { TextArea } = Input;

export default class BannerSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            imageUpUrl: '',
            text: '',
            href: '',
            banners: [],
            book: {
                text: [],
                author: '',
                href: ''
            }
        };

    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    componentWillMount() {
        this.getBanners();
    }

    getBanners() {
        Axios.get("/api/get/banners")
            .then( res => {
                let { book } = this.state;
                let banners = [];

                res.data.banners.map( banner => {
                    (banner.page == 'HOME') && banners.push(banner);
                    (banner.page == 'BOOK') && (book = banner);
                });
                this.setState({
                    banners,
                    book
                })
            })
    }

    uploadereChange = (info) => {
        if (info.file.status === 'done') {
            message.success("上传成功");
            const { response } = info.file;
            this.setState({
                imageUpUrl: `${IMG_URL}${response.data.key}`,
                imageUrl: `${IMG_URL}${response.data.key}`
            });
        }
    }

    imgInputChange = e => {
        this.setState({
            imageUrl: e.target.value
        })
    }

    textChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    hrefChange = e => {
        this.setState({
            href: e.target.value
        })
    }

    bookNameChange = e => {
        let { book } = this.state;
        book.author = e.target.value;

        this.setState({book});
    }

    bookTextChange = e => {
        let { book } = this.state;
        book.text = e.target.value.split('||');
        this.setState({book});
    }


    bookHrefChange = e => {
        let { book } = this.state;
        book.href = e.target.value.split('||');
        this.setState({book});
    }

    addBanner = page => {
        const { imageUrl, text, href, book } = this.state;
        let params = {};

        if (page == 'HOME') {
            params = {url: imageUrl, text: [text], href, page};
        } else {
            params = {...book, page};
        }

        Axios.post('/api/create/banner', params)
            .then( res => {
                if (res.data.code == 200) {
                    message.success("添加成功");
                    this.getBanners();
                } else {
                    message.error("添加失败")
                }
            })
    }

    bannerUploaderChange = (info, index) => {
        if (info.file.status === 'done') {
            message.success("上传成功");
            const { response } = info.file;
            this.setState(preState => {
                preState.banners[index].url = `${IMG_URL}${response.data.key}`;

                return { banners: preState.banners}
            });
        }
    }

    bannerImgInputChange = (e, index) => {
        let value = e.target.value;
        this.setState(preState => {
            preState.banners[index].url =value;

            return { banners: preState.banners}
        })
    }

    bannerTextChange = (e, index) => {
        let value = e.target.value;
        this.setState(preState => {
            preState.banners[index].text = value;

            return { banners: preState.banners}
        })
    }

    bannerHrefChange = (e, index) => {
        let value = e.target.value;
        this.setState(preState => {
            preState.banners[index].href = value;

            return { banners: preState.banners}
        })
    }

    updateBanner = (banner) => {
        const { id, ...others } = banner;
        Axios.post(`/api/update/banner/${id}`, others)
            .then( res => {
                message.success(res.data.message)
            })
    }

    deleteBanner = banner => {
        Axios
            .delete(`/api/banner/${banner.id}`)
            .then( res => {
                message.success(res.data.message)
                if (res.data.code == 200) {
                    this.getBanners();
                }
            })
    }


    render() {
        const {imageUrl, imageUpUrl, text, href, banners, book, title} = this.state;
        return (
            <Layout className="banner-setting-layout" style={{height: '100%',}} >
                <Header className='banner-setting-header clearfix' >
                    <h3>头图设置</h3>
                </Header>
                <Content className="banner-setting-content">
                <h2>博客首页</h2>
                 { banners.length ? banners.map( (banner, index) => <div className="banner-box" key={banner.id} >
                        <div className="banner-img">
                            { banner.url ? <img src={banner.url} alt=""/> : <Icon type="picture" />}
                        </div>
                        <div className="banner-info">
                            <label htmlFor="">
                                <span className="laberl-text">图片地址</span>
                                <Input placeholder="请输入图片地址或手动上传" value={banner.url} onChange={ e => { this.bannerImgInputChange(e, index) } } />
                                <Upload
                                    className='uploader'
                                    accept = "image/*"
                                    action = "/api/fileupload"
                                    data = { { prefix: 'banner/' } }
                                    showUploadList={ false }
                                    onChange = { (info) => { this.bannerUploaderChange(info, index) } }>
                                    <Button>
                                      <Icon type="upload" />点击上传
                                    </Button>
                                </Upload>
                            </label>
                            <label htmlFor="">
                                <span className="laberl-text">描述</span>
                                <Input placeholder="请输入Banner描述" value={banner.text} onChange={ e => { this.bannerTextChange(e, index) } } />
                            </label>
                            <label htmlFor="">
                                <span className="laberl-text">链接</span>
                                <Input placeholder="请输入Banner相关文章链接" value={banner.href} onChange={ e => { this.bannerHrefChange(e, index) } }/>
                            </label>
                            </div>
                        <div className="btn">
                            <Button onClick={ () => { this.updateBanner(banner) } } >保存</Button>
                            <Button onClick={ () => { this.deleteBanner(banner) } } >删除</Button>
                        </div>
                     </div>) : null }
                    { banners.length < 3 ? <div className="banner-box">
                        <div className="banner-img">
                            { imageUpUrl ? <img src={imageUpUrl} alt=""/> : <Icon type="picture" />}
                        </div>
                        <div className="banner-info">
                            <label htmlFor="">
                                <span className="laberl-text">图片地址</span>
                                <Input placeholder="请输入图片地址或手动上传" value={imageUrl} onChange={ this.imgInputChange } />
                                <Upload
                                    className='uploader'
                                    accept = "image/*"
                                    action = "/api/fileupload"
                                    data = { { prefix: 'banner/' } }
                                    showUploadList={ false }
                                    onChange = { this.uploadereChange } >
                                    <Button>
                                      <Icon type="upload" />点击上传
                                    </Button>
                                </Upload>
                            </label>
                            <label htmlFor="">
                                <span className="laberl-text">描述</span>
                                <Input placeholder="请输入Banner描述" value={text} onChange={ this.textChange } />
                            </label>
                            <label htmlFor="">
                                <span className="laberl-text">链接</span>
                                <Input placeholder="请输入Banner相关文章链接" value={href} onChange={ this.hrefChange } />
                            </label>
                        </div>
                        <div className="btn">
                            <Button onClick={ () => { this.addBanner("HOME") } } >添加</Button>
                        </div>
                    </div> : null}
                    <h2>图书首页</h2>
                    <div className="banner-box book-banner">
                        <Tooltip
                            trigger={['focus']}
                            title={`建议输入150个以内字符，已经输入${book.text.join("||").length}个`}
                            placement="topLeft"
                            overlayClassName="numeric-input"
                        >
                        <TextArea ref="bookText" value={ book.text.join("||") }  onChange={ this.bookTextChange } className="book-text" placeholder="图书首页文案，分两部分；以'||'分隔" autosize={{ minRows: 2, maxRows: 6 }} />
                        </Tooltip>
                        <Input ref="bookHref" value={ book.href } onChange={ this.bookHrefChange } placeholder="相关链接" />
                        <Input ref="bookName" value={ book.author } onChange={ this.bookNameChange } placeholder="书名" />
                        { !book.id ? <Button onClick={ () => { this.addBanner("BOOK") } } >添加</Button> : <Button onClick={ () => { this.updateBanner(book) } } >保存</Button>}
                    </div>
                </Content>
            </Layout>
        )
    }
}