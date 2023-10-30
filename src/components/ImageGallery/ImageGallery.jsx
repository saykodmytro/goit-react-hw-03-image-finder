import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={css.imageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
