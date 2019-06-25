import React, { Component } from 'react';
import { getWeather, updateSearchInput } from './searchActions';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.handleCity = this.handleCity.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCity(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(getWeather(value));
  }

  handleSearchInput(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearchInput(value));
  }

  handleSearch() {
    const { city, dispatch } = this.props;
    dispatch(getWeather(city));
  }

  render() {
    const { value } = this.props;
    return (
      <div>
        <div id='quickSearch'
          style={{ opacity: .9 }}
          >
          <nav className="navbar navbar-dark bg-dark">
            <form className="form-inline">
              <button 
                className="btn btn-outline-primary" 
                value='San Diego'
                onClick={this.handleCity}
              >
                San Diego
              </button>
              <button 
                className="btn btn-outline-primary" 
                value='Los Angeles'
                onClick={this.handleCity}
              >
                Los Angeles
              </button>
              <button 
                className="btn btn-outline-primary" 
                value='San Francisco'
                onClick={this.handleCity}
              >
                San Francisco
              </button>
              <button 
                className="btn btn-outline-primary" 
                value='Honolulu'
                onClick={this.handleCity}
              >
                Honolulu
              </button>
              <button 
                className="btn btn-outline-primary" 
                value='Tokyo'
                onClick={this.handleCity}
              >
                Tokyo
              </button>
            </form>
          </nav>
        </div>

        <div 
          id='searchBar'
          style={{ opacity: .9 }}
        >
          <nav className="navbar navbar-dark bg-dark">
            <form className="form-inline">
              <input 
                className="form-control mr-sm-2 bg-dark text-white border-secondary" 
                type="search" 
                placeholder="Search a city" 
                aria-label="Search"
                value={ value }
                onChange={ this.handleSearchInput }
              />
              <button 
                className="btn btn-outline-success my-2 my-sm-0" 
                type="button"
                onClick={ this.handleSearch }
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      </div>
    );
  }
}
