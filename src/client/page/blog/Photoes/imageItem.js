import React, { Component } from "react";
// import ImgLazy from '../../../components/ImgLazy';
// import Icon from '../../../components/Icon';

const ImageItem = ({
 index, onClick, photo, margin, }) => (
    <div style={{ margin, width: photo.width }} className="photo-item tc" onClick={e => onClick(e, { index, photo })}>
        <img src={photo.src} width={photo.width} height={photo.height} />
        {photo.desc ? (
<div className="photo-item-desc tc">
                <p>{photo.desc}</p>
            </div>
) : null}
    </div>;
export default ImageItem;
