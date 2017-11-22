import React, { Component } from 'react';
import { Layout, Icon, Upload, Modal, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Masonry from 'react-masonry-component';
import './index.less';

const { Header, Content } = Layout;
const IMG_URL = '//ozrrmt7n9.bkt.clouddn.com/';
const IMG_QUERY = 'imageView2/0/interlace/1/q/75|imageslim';

const { TextArea } = Input;

export default class ArticleManege extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            file: null,
            desc: '',
            photoes: [],
            uploadRvent: null,
            addPhotoStatus: false
        };
    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    componentWillMount() {
        Axios.get('/api/get/photoes')
            .then(res => {
                let resData = res.data;
                let photoes = resData.photoes.map(img => {
                    return {
                        url: `${IMG_URL}${img.key}?${IMG_QUERY}`,
                        name: img.key,
                        uid: img.hash
                    }
                });
                this.setState({photoes})
            })
    }

    showAddPhoto = () => {
        this.setState({
            addPhotoStatus: true
        })
    }

    closeAddPhoto = () => {
        this.setState({
            addPhotoStatus: false
        })
    }

    handleCancelPreview = () => this.setState({
        previewVisible: false
    })

    uploaderPreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    uploadereChange = ({ file, fileList, event }) => {
        this.setState({fileList})
    }

    descInputChange = e => this.setState({desc: e.target.value})

    uploaderRemove =  () => {
    }

    addToPhoto = () => {
        const { fileList, desc } = this.state;

        let photoes = fileList.map( file => {
            const { response } = file;
            if ( file.status == 'done')
                return {
                    name: response.data.filename,
                    key: response.data.key,
                    desc: desc
                }
        })


        if (!photoes.length) return;

        Axios.post('/api/add/photo', photoes)
            .then( res => {
                console.log(res);
                let resData = res.data;
                if (resData.code == 200) {
                    this.setState({
                        fileList: []
                    })
                }
            })
    }

    render() {
        const { previewVisible, previewImage, addPhotoStatus, fileList } = this.state;

        return ( <Layout className = "photo-manage-layout" >
                <Header className = 'article-manage-header clearfix' >
                    <h2 > 图集 </h2><Button icon='plus' className='fr' onClick={ this.showAddPhoto } >添加图片</Button>
                </Header>
                <Content className = "article-manage-content" >

                </Content>
                <Modal visible = { previewVisible } footer = { null } onCancel = { this.handleCancelPreview } >
                    <img alt = "example" style = { { width: '100%' } } src = { previewImage }/>
                </Modal>

                <Modal visible = { addPhotoStatus } footer = { null } className="upload-modal" onCancel={ this.closeAddPhoto } >
                    <div className="upload-modal-content">
                        <Upload
                            className='uploader'
                            accept = "image/*"
                            action = "/api/fileupload"
                            listType='picture'
                            fileList={fileList}
                            data = { { prefix: 'photo/' } }
                            onPreview = { this.uploaderPreview }
                            onRemove = { this.uploaderRemove }
                            onChange = { this.uploadereChange } >
                            <div className='upload-plus'>
                                <Icon type="picture" />
                                <span className = "ant-upload-text" > 选择文件上传</span>
                            </div>
                        </Upload>
                        <TextArea placeholder="添加文件描述" autosize={{ minRows: 2, maxRows: 6 }} onChange={ this.descInputChange } />
                        <Button size='large' type="primary" icon="save" onClick={ this.addToPhoto } >保存</Button>
                    </div>
                </Modal>
            </Layout>)
        }
    }