import React, { Component } from 'react';

const ImageItem = ({ index, onClick, photo, margin}) => {
    return (
        <div style={{margin, width:photo.width}} className='photo-item'>
            <img {...photo} onClick={(e) => onClick(e, {index, photo})} />
        </div>
    )
};

export default ImageItem;