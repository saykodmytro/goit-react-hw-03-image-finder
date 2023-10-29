import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <div>
      <li className={css.imageGalleryItem}>
        <img className={css.imageGalleryItem} src="" alt="" />
      </li>
    </div>
  );
};

export default ImageGalleryItem;
