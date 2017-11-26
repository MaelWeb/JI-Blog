import React, { Component } from 'react';
import Axios from 'axios';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import ImageItem from './imageItem.js'

const IMG_URL = '//ozrrmt7n9.bkt.clouddn.com/';
const IMG_QUERY = 'imageView2/0/interlace/1/q/75|imageslim';

export default class Photo extends Component {
    constructor(props) {
        super(props)
        const { photoes }  = props;
        let state = this.addSrc(photoes);
        this.state = {
           ...state
        };
    }

    componentWillMount() {
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

    selectPhoto = () => {

    }

    addSrc(allphoto) {
        let photoes = [],
            banner = [];
        if (allphoto && allphoto.length) {
            allphoto.map( photo => {
                let newPho = {
                    src: `${IMG_URL}${photo.key}?${IMG_QUERY}`,
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
        const { banner, photoes, width } = this.state;
        return(
            <div className="blog-photo-layout">
                <div className="photo-banner">
                    { banner.length || photoes.length ? <img src={ banner[0].src || photoes[0].src } alt=""/> : null}
                </div>
                <div className="photo-text tc">
                    <h2>我以一种笨拙的方式拍照</h2>
                    <p>摄影是一种神奇的记录：照片记录了时间、风景、人物；可回放照片时才发现，原来它还记录了按下快门时的感触、思绪、心事……也许这就是为什么明明看到的是一张风景，却会让你想起谁</p>
                </div>
                <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width  })}>
                    {
                        ({ measureRef  }) => {
                            let columns = 1;
                            if (width >= 480){
                              columns = 2;
                            }
                            if (width >= 1024){
                              columns = 4;
                            }
                            if (width >= 1824){
                              columns = 5;
                            }
                            return <div ref={measureRef} className="photo-list">
                              <Gallery photos={photoes} margin={ 4 } columns={columns} ImageComponent={ImageItem} />
                            </div>
                        }
                    }
                </Measure>
            </div>
        )
    }
}