import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.css';
import fetchPhotos from '../API/pixabay-api';

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

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true, error: null });
      try {
        const data = await fetchPhotos(this.state.query, this.state.page);
        this.setState({ images: data.hits, loading: false });
      } catch (error) {
        this.setState({ error, loading: false });
      }
    }
  }

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.images !== null && (
          <ImageGallery images={this.state.images} />
        )}
      </div>
    );
  }
}
