import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Upload, Button, Input, Icon, message } from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {IMG_URL, IMG_QUERY} from '../../../config/';
import './index.less';

const {Header, Content, Footer} = Layout;

export default class BannerSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            imageUpUrl: '',
            text: '',
            href: '',
            banners: []
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
                this.setState({
                    banners: res.data.banners
                })
            })
    }

    uploadereChange = (info) => {
        if (info.file.status === 'done') {
            message.success("上传成功");
            const { response } = info.file;
            this.setState({
                imageUpUrl: `${IMG_URL}${response.data.key}${IMG_QUERY}`,
                imageUrl: `${IMG_URL}${response.data.key}${IMG_QUERY}`
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

    addBanner = e => {
        const { imageUrl, text, href } = this.state;

        Axios.post('/api/create/banner', {url: imageUrl, text, href})
            .then( res => {
                if (res.data.code == 200) {
                    message.success("添加成功");
                    this.setState( preState => {
                        preState.banners.push(res.data.banner);

                        return {banners: preState.banners};
                    })
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
                preState.banners[index].url = `${IMG_URL}${response.data.key}${IMG_QUERY}`;

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
        const {imageUrl, imageUpUrl, text, href, banners} = this.state;
        return (
            <Layout className="banner-setting-layout">
                <Header className='banner-setting-header clearfix' >
                    <h2>Banner设置</h2>
                </Header>
                <Content className="banner-setting-content">
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
                            <Button onClick={ this.addBanner } >添加</Button>
                        </div>
                    </div> : null}
                </Content>
            </Layout>
        )
    }
}