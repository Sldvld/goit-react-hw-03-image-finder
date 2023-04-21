import React from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends React.Component {
  state = {
    query: '',
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };
  // state = {
  //   image: null,
  //   loading: false,
  // };
  // componentDidMount() {
  //   this.setState({ loading: true });

  //   axios
  //     .get(
  //       'https://pixabay.com/api/?q=cat&page=1&key=34227071-e179ea07013280bd68b79052b&image_type=photo&orientation=horizontal&per_page=12'
  //     )
  //     .then(response => response.data)
  //     .then(console.log)
  //     .then(image => this.setState({ image }))
  //     .finally(() => this.setState({ loading: false }));
  // }
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <header className="searchbar">
          <form className="form">
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
        {this.state.loading && <h3>Loading...</h3>}
        <ul className="gallery">
          <li>{this.state.image && <p>Image</p>}</li>
        </ul> */}
      </>
    );
  }
}
