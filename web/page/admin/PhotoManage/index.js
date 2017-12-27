import React, { Component } from 'react';
import { Layout, Icon, Upload, Modal, Input, Button, Card, Col, Tooltip, Pagination } from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Masonry from 'react-masonry-component';
import {IMG_URL, IMG_QUERY} from '../../../config/';
import './index.less';

const { Header, Content, Footer } = Layout;
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
            one:[],
            uploadRvent: null,
            addPhotoStatus: false,
            pageSize: 12,
            page: 1,
            allNum: 0,
            allPage: 0
        };
    }

    static contextTypes = {
        showMessage: PropTypes.func
    };

    componentWillMount() {
        this.getPhotoes(1);
        this.getOne();
    }

    showAddPhoto = () => {
        this.setState({
            addPhotoStatus: true
        })
    }

    getPhotoes(_page) {
        const { pageSize, page } = this.state;
        Axios.get('/api/get/photoes', {
            params: {
                page: _page || page,
                size: pageSize
            }
        })
        .then(res => {
            let resData = res.data;
            let photoes = resData.photoes.map(img => {
                return {
                    imgUrl: `${IMG_URL}${img.key}?${IMG_QUERY}`,
                    key: img.key,
                    text: img.desc,
                    id: img.id,
                    isBanner: img.isBanner || false
                }
            });
            this.setState({photoes, page: _page, allPage: resData.allPage, allNum: resData.allNum})
        })
    }

    getOne() {
        Axios.get('/api/one')
            .then( res => {
                this.setState({
                    one: res.data.data
                })
            });
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
                    width: response.data.w,
                    height: response.data.h,
                    desc: desc
                }
        })


        if (!photoes.length) return;

        Axios.post('/api/add/photo', photoes)
            .then( res => {
                let resData = res.data;
                if (resData.code == 200) {
                    this.setState(preState => {
                        let photoes = resData.photoes.map(img => {
                            return {
                                imgUrl: `${IMG_URL}${img.key}${IMG_QUERY}`,
                                key: img.key,
                                text: img.desc,
                                id: img.id,
                                isBanner: img.isBanner || false
                            }
                        });

                        photoes = photoes.concat(preState.photoes);
                        return {
                            fileList: [],
                            photoes
                        }
                    })
                }
            })
    }

    setToBanner = (photoIndex) => {
        const { photoes } = this.state;
        let photo = photoes[photoIndex],
            isBanner = photo.isBanner;

        if (photo.id)
            Axios.post(`/api/update/photo/${photo.id}`, {isBanner: !isBanner})
                .then( res => {
                    let resData = res.data;
                    if ( resData.code == 200) {
                        photoes[photoIndex].isBanner = !isBanner;
                        this.setState({photoes});
                    } else {
                        this.context.showMessage(resData.message);
                    }
                })
    }

    changPhotoText = (event, photo) => {
        event.target.blur();
        Axios.post(`/api/update/photo/${photo.id}`, {desc: event.target.value})
            .then( res => {
                let resData = res.data;
                if ( resData.code == 200) {
                    this.context.showMessage("修改成功");
                } else {
                    this.context.showMessage(resData.message);
                }
            })
    }

    deletePhoto = photo => {
        Modal.confirm({
            title: '确定删除照片?',
            content: '照片删除后不可恢复',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk: () => {
                return this.doDelete(photo.id);
            }
        });
    }

    doDelete(id) {
        return Axios
            .delete(`/api/photo/${id}`)
            .then( res => {
                this.context.showMessage(res.data.message);
                if (res.data.code == 200) {
                    this.getPhotoes();
                }
            })
            .catch( err => {
                this.context.showMessage(err);
            })
    }

    changePage = page => {
        this.getPhotoes(page);
    }

    render() {
        const { previewVisible, previewImage, addPhotoStatus, fileList, photoes, one, pageSize, page, allNum } = this.state;
        let data = photoes.length ? photoes : one;
        return ( <Layout className = "photo-manage-layout" >
                <Header className = 'photo-manage-header clearfix' >
                    <h2 > 图 集 </h2>
                    <div  className='fr'><Button icon='plus' onClick={ this.showAddPhoto } >添加图片</Button></div>
                </Header>
                <Content className = "photo-manage-content" >
                    <Masonry className="photo-list">
                        { data.length ? data.map( (item, i) =>  <Col span={8} key={i} >
                            <Card bodyStyle={{ padding: 0 }} >
                                <div className="one-image">
                                    <img src={item.imgUrl} />
                                </div>
                                <div className="one-card">
                                    <div className="text">
                                        <Input  className='text-input' onPressEnter={ e => { this.changPhotoText(e, item) } } defaultValue={item.text} />
                                    </div>
                                    <div className="banner-setting" onClick={ () => {this.setToBanner(i)} }>
                                    <Tooltip placement="top" title={item.isBanner ? '点击取消设置为Banner' : '点击设置为Banner'}>
                                        <Icon type={ item.isBanner ? "heart" :"heart-o" }  />
                                    </Tooltip>
                                    </div>
                                </div>
                                <Icon type="delete" className="photo-delete" onClick={ e => {this.deletePhoto(item)} } />
                            </Card></Col>) : null }
                    </Masonry>
                </Content>
                { photoes.length ? <Footer><Pagination className='tc' showQuickJumper current={ page }  total={allNum} onChange={ this.changePage } pageSize={pageSize} /></Footer> : null}
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