import React, { Component } from "react";
// import ImgLazy from '../../../components/ImgLazy';
// import Icon from '../../../components/Icon';

const ImageItem = ({
    index,
    onClick,
    photo,
    margin,
}) => (
    <div style={{ margin, width: photo.width }} className="photo-item photobox photobox_type24 tc" onClick={e => onClick(e, { index, photo })}>
        <div className="photo-item-box">
            <img
                className='photo-item-img photobox__preview'
                src={photo.src}
                srcSet={photo.srcSet}
                width={photo.width}
                alt={photo.desc}
                height={photo.height} />
                <span class="photo-item-label photobox__label">{photo.desc}</span>
        </div>
    </div>
);

export default ImageItem;