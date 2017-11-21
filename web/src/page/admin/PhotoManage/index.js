import React, { Component } from 'react';
import { Layout, Icon, Upload, Modal } from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Masonry from 'react-masonry-component';
import './index.less';

const { Header, Content } = Layout;
const IMG_URL = '//ozrrmt7n9.bkt.clouddn.com/';
const IMG_QUERY = 'imageView2/0/interlace/1/q/75|imageslim';
export default class ArticleManege extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
        };
    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    componentWillMount() {
        Axios.get('/api/get/photoes')
            .then(res => {
                let resData = res.data;
                let fileList = resData.data.items.map(img => {
                    return {
                        url: `${IMG_URL}${img.key}?${IMG_QUERY}`,
                        name: img.key,
                        uid: img.hash
                    }
                });
                this.setState({fileList})
            })
    }

    handleCancel = () => this.setState({
        previewVisible: false
    })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    render() {
        const { previewVisible, previewImage, fileList } = this.state;

        const uploadButton = ( <div >
            <Icon type = "plus" />
            <div className = "ant-upload-text" > Upload</div>
        </div>);
        return ( <Layout className = "photo-manage-layout" >
                <Header className = 'article-manage-header clearfix' >
                    <h2 > 图集 </h2>
                </Header>
                <Content className = "article-manage-content" >
                    <Upload accept = "image/*"
                        action = "/api/fileupload"
                        listType = "picture-card"
                        data = { { prefix: 'photo/' } } fileList = { fileList } withCredentials onPreview = { this.handlePreview } onChange = { this.handleChange } >
                        { uploadButton }
                    </Upload>
                </Content>
                <Modal visible = { previewVisible } footer = { null } onCancel = { this.handleCancel } >
                    <img alt = "example" style = { { width: '100%' } } src = { previewImage }/>
                </Modal>
            </Layout>)
        }
    }