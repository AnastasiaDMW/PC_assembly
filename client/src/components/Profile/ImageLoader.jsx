import React from 'react';

const ImageLoader = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="User Avatar" />
    </div>
  );
};

export default ImageLoader;