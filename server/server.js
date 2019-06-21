require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/data', (req, res) => {
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${process.env.OWM_API_KEY}`)
    .then( (response) => res.send(response.data))
    .catch( err => console.log(err));
    console.log(process.env.OWM_API_KEY);
});

module.exports = app;
