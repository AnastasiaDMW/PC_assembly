import React from 'react';

const ImageLoader = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="User Avatar" className="profile__foto" />
    </div>
  );
};

export default ImageLoader;