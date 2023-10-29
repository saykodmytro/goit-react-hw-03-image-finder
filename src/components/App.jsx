import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.css';

export default class App extends Component {
  state = {
    images: null,
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
