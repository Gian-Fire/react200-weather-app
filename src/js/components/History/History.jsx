import React from 'react';

export default class History extends React.Component {

  render() {
    return (
      <div 
      className="card bg-dark text-white col-md-4"
      >
        <div className="card-header">
          Search History
        </div>
        <div className="card-body">
          <ul>
            <li>
              Some City
            </li>
            <li>
              Another City
            </li>
            <li>
              More City
            </li>
          </ul>
        </div>
    </div>
    );
  }
}