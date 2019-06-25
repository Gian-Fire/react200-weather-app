import { connect } from 'react-redux';
import City from './City';

function mapStoreToProps(store) {
    return {
        cityInput: store.weatherData.cityInput,
        lon: store.weatherData.lon,
        lat: store.weatherData.lat,
        temp: store.weatherData.temp,
        pressure: store.weatherData.pressure,
        humidity: store.weatherData.humidity,
        temp_min: store.weatherData.temp_min,
        temp_max: store.weatherData.temp_max,
        windSpeed: store.weatherData.windSpeed
    };
}

export default connect(mapStoreToProps)(City);