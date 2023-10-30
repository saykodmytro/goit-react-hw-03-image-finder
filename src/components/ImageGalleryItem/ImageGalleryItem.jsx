import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img className={css.imageGalleryItem} src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
