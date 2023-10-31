import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.css';
import fetchPhotos from '../API/pixabay-api';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: null,
    loading: false,
    error: false,
    perPage: 12,
    hasMorePages: true,
  };

  handleSearch = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.search.value.trim().toLowerCase();
    this.setState({ query: query, page: 1, images: null });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true, error: null });
      try {
        const data = await fetchPhotos(this.state.query, this.state.page);
        this.setState(prevState => ({
          images: [...(prevState.images || []), ...data.hits],
          loading: false,
        }));
      } catch (error) {
        this.setState({ error, loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      this.smoothScroll()
    );
  };

  smoothScroll = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, loading, hasMorePages } = this.state;
    // const shouldShowLoadMore = images && images.length > 0 && !loading;

    return (
      <div className={css.app}>
        {loading && <Loader />}
        <Searchbar onSubmit={this.handleSearch} />
        {images && images.length > 0 && <ImageGallery images={images} />}
        {hasMorePages && images && images.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
