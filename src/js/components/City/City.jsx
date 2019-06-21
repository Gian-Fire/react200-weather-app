import React from 'react';

export default class City extends React.Component {

  render() {
    return (
      <div 
      className="card bg-dark text-white col-md-8"
    >
      <div className="card-header">
        City Information
      </div>
      <div className="card-body">
        <h1 className="card-title text-center">Some City</h1>
        <p className="card-text text-center">Latitude and Longitude: NUMBERS, ALSO NUMBERS</p>
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
                  SOME DATA
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
                  SOME DATA
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
                  SOME DATA
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
                  SOME DATA
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
                  SOME DATA
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
                  SOME DATA
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