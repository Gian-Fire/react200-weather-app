import { connect } from 'react-redux';
import Search from './Search';

const mapStoreToProps = store => {
  return {
    city: store.weatherData.city
  };
}

export default connect(mapStoreToProps)(Search);
