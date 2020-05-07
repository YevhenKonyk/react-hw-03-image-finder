import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../../base.css';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

import * as PixabayAPI from '../../services/PixabayAPI';

const mapper = images => {
  return images.map(
    ({
      id,
      webformatURL: previewURL,
      largeImageURL: fullViewURL,
      ...props
    }) => ({
      id,
      previewURL,
      fullViewURL,
      ...props,
    }),
  );
};

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    // eslint-disable-next-line react/destructuring-assignment
    if (prevState.query !== this.state.query) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        page: 1,
        images: [],
      });
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSearch = e => {
    e.preventDefault();

    this.fetchImages();

    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

    this.fetchImages();
  };

  fetchImages = () => {
    this.setState({ isLoading: true });

    const { query, page } = this.state;

    PixabayAPI.fetchImages(query, page)
      .then(({ data }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...mapper(data.hits)],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { query, images, isLoading, error } = this.state;

    return (
      <>
        <Searchbar
          value={query}
          onChange={this.handleInputChange}
          onSearch={this.handleSearch}
        />

        {error && <p>{error.message}</p>}

        {images.length > 0 && (
          <>
            <ImageGallery items={images} />
            <Button label="Load more..." onClick={this.handleLoadMoreClick} />
          </>
        )}

        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#000"
            height={80}
            width={80}
            timeout={3000}
          />
        )}
      </>
    );
  }
}
