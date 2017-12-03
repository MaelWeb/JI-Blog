import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ClassNames from 'classnames';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import ImageGallery from '../../../components/ImageGallery';
import ImageItem from './imageItem.js';
import ImgLazy from '../../../components/ImgLazy';

const IMG_URL = '//ozrrmt7n9.bkt.clouddn.com/';
const IMG_QUERY = 'imageView2/0/interlace/1/q/75|imageslim';

export default class Photo extends Component {
    constructor(props) {
        super(props)
        const { photoes } = props;
        let state = this.addSrc(photoes);
        this.state = {
           ...state,
           showPhotoView: false,
           currentPhotoIndex: 0,
           isShowImageGallery: false,
           imageGalleryIndex: 0
        };
    }

    componentDidMount() {
        let headerDom = ReactDOM.findDOMNode(this.refs.photoHeader),
            blogNavDom = document.getElementById('IdNav');

        window.onscroll = (e) => {
            e = e || window.event;

            let _scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (_scroll >= (headerDom.offsetHeight - blogNavDom.offsetHeight) ) {
                blogNavDom.classList.remove('blog-photoes-header');
            } else {
                blogNavDom.classList.add('blog-photoes-header');
            }
        }
        const { photoes } = this.state;
        if (!photoes.length)
            Axios.get('/api/get/photoes')
                .then( res => {
                    let state = this.addSrc(res.data.photoes);
                    this.setState({
                        ...state
                    })
                })
    }

    componentWillUnmount() {
        window.onscroll = null;
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
                    src: `${IMG_URL}${photo.key}?${IMG_QUERY}`,
                    original: `${IMG_URL}${photo.key}?${IMG_QUERY}`,
                    thumbnail: `${IMG_URL}${photo.key}?${IMG_QUERY}`,
                    width: photo.width,
                    height: photo.height,
                    desc: photo.desc
                };

                photoes.push(newPho);

                photo.isBanner && banner.push(newPho);
            })
        }

        return {photoes, banner};
    }


    render() {
        const { banner, photoes, width, showPhotoView, currentPhotoIndex, isShowImageGallery, imageGalleryIndex } = this.state;
        let _banner = banner.length && banner[0] || photoes[0];
        return(
            <div className="blog-photo-layout">
                <div className="photo-banner" ref='photoHeader'>
                    { _banner ? <img src={ _banner.src } alt=""/> : null}
                    { _banner && _banner.desc ? <div className="photo-banner-info">
                        <p className="small" style={{ width: _banner.width }}><span>图记</span></p>
                        <h2 style={{ width: _banner.width }}>{_banner.desc}</h2>
                    </div> : null}
                </div>
                <div className="middle-text tc">
                    <h2>我以一种笨拙的方式拍照</h2>
                    <p>摄影是一种神奇的记录：照片记录了时间、风景、人物；可回放照片时才发现，原来它还记录了按下快门时的感触、思绪、心事……也许这就是为什么明明看到的是一张风景，却会让你想起谁</p>
                </div>
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
                            return <div ref={measureRef} className="photo-list">
                              <Gallery photos={photoes} margin={ 4 } columns={columns} ImageComponent={ImageItem} onClick={ this.selectPhoto } />
                            </div>
                        }
                    }
                </Measure>
                <ImageGallery images={ photoes } isShow={isShowImageGallery} startIndex={imageGalleryIndex} />
            </div>
        )
    }
}