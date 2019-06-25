import React, { Component } from 'react';

export default class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <div 
      className="card bg-dark text-white col-md-4"
      style={{ opacity: .9 }}
      >
        <div className="card-header">
          Search History
        </div>
        <div className="card-body">
          <ul className='list-unstyled'>
            { history.map( (histories, index) => {
              return (
                <li key={ index }>
                  <p>{ histories.cityInput } - { histories.date }</p>
                </li>
              )
            }

            )}
          </ul>
        </div>
    </div>
    );
  }
}