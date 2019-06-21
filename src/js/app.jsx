import React from 'react';
import Search from './components/Search/Search.jsx';
import City from './components/City/City.jsx';
import History from './components/History/History.jsx';

export default class App extends React.Component {
  
  render() {
    return (
      <div className='container'>

        <div className='jumbotron bg-dark text-white'>
          <h1 className='text-center'>
            Synergy Weather App
          </h1>
          <h4 className='text-center'>
            Always know if you'll need an umbrella!
          </h4>
        </div>
        
        <Search/>

        <div 
          className='row'
          id='spacing'
          style={{padding: 20}}
        >
          <City/>
          <History/>
        </div>

      </div>
    );
  }
}
