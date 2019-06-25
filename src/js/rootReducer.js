import { combineReducers } from 'redux';
import searchReducer from './components/Search/searchReducer.js';

const rootReducer = combineReducers({
// add reducers
  weatherData: searchReducer
});

export default rootReducer;
