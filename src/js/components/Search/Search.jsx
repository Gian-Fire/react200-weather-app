import React from 'react';

export default class Search extends React.Component {



  render() {
    return (
      <div>
        <div id='quickSearch'>
          <nav className="navbar navbar-dark bg-dark">
            <form className="form-inline">
              <button 
                className="btn btn-outline-primary" 
                type="button"
              >
                San Diego
              </button>
              <button 
                className="btn btn-outline-primary" 
                type="button"
              >
                Los Angeles
              </button>
              <button 
                className="btn btn-outline-primary" 
                type="button"
              >
                San Francisco
              </button>
              <button 
                className="btn btn-outline-primary" 
                type="button"
              >
                Honolulu
              </button>
              <button 
                className="btn btn-outline-primary" 
                type="button"
              >
                Tokyo
              </button>
            </form>
          </nav>
        </div>

        <div id='searchBar'>
          <nav className="navbar navbar-dark bg-dark">
            <form className="form-inline">
              <input 
                className="form-control mr-sm-2 bg-dark text-white border-secondary" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
              />
              <button 
                className="btn btn-outline-success my-2 my-sm-0" 
                type="submit"
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