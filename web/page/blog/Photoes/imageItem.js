import React, { Component } from 'react';
import ImgLazy from '../../../components/ImgLazy';

const ImageItem = ({ index, onClick, photo, margin}) => {
    return (
        <div style={{margin, width:photo.width}} className='photo-item' onClick={(e) => onClick(e, {index, photo})}>
            <ImgLazy src={photo.src} width={photo.width} height={photo.height}/>
            {photo.desc ? <div className="photo-item-desc tc">
                <p>{photo.desc}</p>
            </div> : null}
        </div>
    )
};

export default ImageItem;