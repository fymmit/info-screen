import React from 'react';
import './photo.css';

const Photo = ({ url }) => {
    return (
        <div className="photo-container">
            <img src={url} alt="" className="photo" />
        </div>
    );
};

export default Photo;
