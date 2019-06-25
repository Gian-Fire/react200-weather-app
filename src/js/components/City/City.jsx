import React, { Component } from 'react';

export default class City extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      cityInput,
      lon,
      lat,
      temp,
      pressure,
      humidity,
      temp_min,
      temp_max,
      windSpeed
    } = this.props;

    return (
      <div 
      className="card bg-dark text-white col-md-8"
      style={{ opacity: .9 }}
      >

      <div className="card-header">
        City Information
      </div>

      <div className="card-body">
        <h1 className="card-title text-center">{ cityInput }</h1>
        <p className="card-text text-center">Latitude and Longitude: {lat}, {lon}</p>
        <hr/>
        <div 
          className='row'
          style={{padding: 5}}
        >
          <div className = 'col-md-4' >
            <div className = 'card bg-dark text-white' >
              <div className = 'card-body'>
                <h6 className = 'card-title text-center' > 
                  Temperature (F) 
                </h6>
                <p 
                className='text-center'
                > 
                  { temp }°F
                </p>
              </div>
            </div>
          </div>

          <div className = 'col-md-4' >
            <div className = 'card bg-dark text-white' >
              <div className = 'card-body'>
                <h6 className = 'card-title text-center' > 
                  Pressure 
                </h6>
                <p 
                className='text-center'
                > 
                  { pressure }mb
                </p>
              </div>
            </div>
          </div>

          <div className = 'col-md-4' >
            <div className = 'card bg-dark text-white' >
              <div className = 'card-body'>
                <h6 className = 'card-title text-center' > 
                  Humidity 
                </h6>
                <p 
                className='text-center'
                > 
                  { humidity }%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div 
          className='row'
          style={{padding: 5}}
        >
          <div className = 'col-md-4' >
            <div className = 'card bg-dark text-white' >
              <div className = 'card-body'>
                <h6 className = 'card-title text-center' > 
                  Lowest Temp (F) 
                </h6>
                <p 
                className='text-center'
                > 
                  { temp_min }°F
                </p>
              </div>
            </div>
          </div>

          <div className = 'col-md-4' >
            <div className = 'card bg-dark text-white' >
              <div className = 'card-body'>
                <h6 className = 'card-title text-center' > 
                  Highest Temp (F) 
                </h6>
                <p 
                className='text-center'
                > 
                  { temp_max }°F
                </p>
              </div>
            </div>
          </div>

          <div className = 'col-md-4' >
            <div className = 'card bg-dark text-white' >
              <div className = 'card-body'>
                <h6 className = 'card-title text-center' > 
                  Wind Speed
                </h6>
                <p 
                className='text-center'
                > 
                  { windSpeed }mph
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    );
  }
}