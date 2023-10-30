import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.css';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: null,
    loading: false,
    error: false,
    btnLoadMore: false,
    perPage: 12,
  };

  handleSearch = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.search.value.trim().toLowerCase();
    this.setState({ query: query });
  };
  componentDidUpdate;

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery />
      </div>
    );
  }
}
