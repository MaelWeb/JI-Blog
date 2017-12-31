import React, { Component } from 'react';
import ImgLazy from '../../../components/ImgLazy';
import Icon from '../../../components/Icon';

const ImageItem = ({ index, onClick, photo, margin}) => {
    return (
        <div style={{margin, width:photo.width}} className='photo-item tc' onClick={(e) => onClick(e, {index, photo})}>
            <ImgLazy src={photo.src} width={photo.width} height={photo.height} placeholder={  <Icon type="loading" className="img-loading"/> } />
            {photo.desc ? <div className="photo-item-desc tc">
                <p>{photo.desc}</p>
            </div> : null}
        </div>
    )
};

export default ImageItem;