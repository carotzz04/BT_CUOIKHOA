import React from 'react';

const ImageComponent = ({ image }) => {
  return (
    <div className="image-item">
      <img src={image.src} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};

export default ImageComponent;
