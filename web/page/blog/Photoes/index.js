import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ClassNames from 'classnames';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import ImageGallery from '../../../components/ImageGallery';
import ImageItem from './imageItem.js';
import Icon from '../../../components/Icon';
import {IMG_URL, IMG_QUERY} from '../../../config/';


export default class Photo extends Component {
    constructor(props) {
        super(props)
        const { photoes, page, allPage } = props;
        let photoSrcs = this.addSrc(photoes);
        this.state = {
           photoes: photoSrcs,
           allPage,
           page,
           showPhotoView: false,
           currentPhotoIndex: 0,
           isShowImageGallery: false,
           imageGalleryIndex: 0,
           isLoading: false
        };
    }

    static defaultProps = {
        photoes: [],
        page: 1,
        allPage: 0
    };

    componentWillMount() {
        const { photoes } = this.state;
        if (!photoes.length)
            this.getPhotos(1);
    }

    componentDidMount() {
        this.photoLayoutDom = ReactDOM.findDOMNode(this);
        this.headerDom = ReactDOM.findDOMNode(this.refs.photoHeader);
        this.blogNavDom = document.getElementById('IdNav');

        this.blogNavDom.classList.add('blog-photo-header');

        window.addEventListener("scroll", this.onscroll, false);
    }

    getPhotos(page) {
        if ( this.state.isLoading ) return;
        this.setState({
            isLoading: true
        });
        Axios.get('/api/get/photoes', {params:{page}})
            .then( res => {
                let photoSrcs = this.addSrc(res.data.photoes);
                this.setState(preState => {
                    let photoes = preState.photoes.concat(photoSrcs)
                    return {
                        page,
                        photoes,
                        allPage: res.data.allPage,
                        isLoading: false
                    }
                })
            })
    }

    onscroll = (e) => {
        e = e || window.event;
        let _scrollTop =  window.pageYOffset
                || (document.documentElement && document.documentElement.scrollTop)
                || document.body.scrollTop
                || 0;

        if (_scrollTop >= (this.headerDom.offsetHeight - this.blogNavDom.offsetHeight)) {
            this.blogNavDom.classList.remove('blog-photoes-header');
        } else {
            this.blogNavDom.classList.add('blog-photoes-header');
        }

        const { page, allPage } = this.state;
        if ( (_scrollTop + document.documentElement.clientHeight) > (this.photoLayoutDom.offsetHeight - 150) ) {
            (page < allPage) && this.getPhotos(page + 1);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onscroll);
        this.blogNavDom.classList.remove('blog-photoes-header');
    }

    selectPhoto = (e, data) => {
        this.setState({
            isShowImageGallery: true,
            imageGalleryIndex: data.index
        })
    }

    addSrc(allphoto) {
        let photoes = [],
            banner = [];
        if (allphoto && allphoto.length) {
            allphoto.map( photo => {
                let newPho = {
                    src: `${IMG_URL}${photo.key}${IMG_QUERY}`,
                    original: `${IMG_URL}${photo.key}${IMG_QUERY}`,
                    thumbnail: `${IMG_URL}${photo.key}${IMG_QUERY}`,
                    width: photo.width,
                    height: photo.height,
                    desc: photo.desc
                };

                photoes.push(newPho);
            })
        }

        return photoes;
    }


    render() {
        const { photoes, width, showPhotoView, currentPhotoIndex, isShowImageGallery, imageGalleryIndex, isLoading } = this.state;
        return(
            <div className="blog-photo-layout">
                <section className="photo-banner" ref='photoHeader' style={{backgroundImage: `url(${ photoes[0] && photoes[0].src || '//cdn.liayal.com/14506926.jpg'})`} } >
                    <img src={ photoes[0] && photoes[0].src || '//cdn.liayal.com/14506926.jpg'} alt=""/>
                    <div className="photo-banner-info">
                        <p className="small" ><span>图记</span></p>
                        <h2>{photoes[0] && photoes[0].desc ? photoes[0].desc : '一起老去'}</h2>
                    </div>
                </section>
                <section className="middle-text tc width-limit">
                    <h2>我以一种笨拙的方式拍照</h2>
                    <p>摄影是一种神奇的记录：照片记录了时间、风景、人物；可回放照片时才发现，原来它还记录了按下快门时的感触、思绪、心事……也许这就是为什么明明看到的是一张风景，却会让你想起谁</p>
                </section>
               <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width  })}>
                    {
                        ({ measureRef  }) => {
                            let columns = 2;
                            if (width >= 480){
                              columns = 3;
                            }
                            if (width >= 1024){
                              columns = 4;
                            }
                            if (width >= 1824){
                              columns = 5;
                            }
                            return <div ref={measureRef} className="photo-list width-limit">
                              <Gallery photos={ photoes.slice(1) } margin={ 4 } columns={columns} ImageComponent={ImageItem} onClick={ this.selectPhoto } />
                            </div>
                        }
                    }
                </Measure>
                { isLoading ? <p className="loading">加载中...</p> : null}
                <ImageGallery images={ photoes.slice(1) } isShow={isShowImageGallery} startIndex={imageGalleryIndex} />
            </div>
        )
    }
}