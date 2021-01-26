import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import makeRequest from '../api/makeRequest.js'

/**
 * Explanation:
 * I added an isLoaded field in the state in order to wait for the data to fully load from the API. 
 * Additionally, I implemented an asynchronous componentDidMount built in method where I make API calls
 * via the makeRequest.js function. I update the appropriate state field with the respective data from the 
 * promises. 
 */
export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      isLoaded: false
    };
  }

  componentDidMount = async () => {
    await makeRequest('new-releases')
      .then((resp) => this.setState({ newReleases: resp.data.albums.items }))

    await makeRequest('featured-playlists')
      .then((resp) => this.setState({ playlists: resp.data.playlists.items }))

    await makeRequest('categories')
      .then((resp => this.setState({ categories: resp.data.categories.items})))

    this.setState({ isLoaded: true })
    console.log("Data Successfully Loaded")
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <p>Loading...</p>
      )
    }
    else {
      const { newReleases, playlists, categories } = this.state;

      return (
        <div className="discover">
          <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
          <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
          <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
        </div>
      );
    }
  }
}
