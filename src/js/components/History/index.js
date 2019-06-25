import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
    return {
      cityInput: store.weatherData.cityInput,
      history: store.weatherData.history
    };
}

export default connect(mapStoreToProps)(History);