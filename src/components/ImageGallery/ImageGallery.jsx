import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    return (
      <div>
        <ul className={css.imageGallery}>
          <ImageGalleryItem />
        </ul>
      </div>
    );
  }
}
