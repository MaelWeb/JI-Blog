import React, { Component } from "react";
// import ImgLazy from '../../../components/ImgLazy';
// import Icon from '../../../components/Icon';

const ImageItem = ({
    index,
    image
}) => (
    <div className="photo-item tc">
        <div className="photo-item-box">
            <img
                className='photo-item-img'
                src={image.src}
                srcSet={image.srcSet}
                alt={image.desc} />
                <span class="photo-item-label">{image.desc}</span>
        </div>
    </div>
);

export default ImageItem;