
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 3002

const cors = require("cors");
require('dotenv').config()

app.use(cors());

const weatherData = [];

app.get("/weather", async (req, res) => {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const result = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily/?key=${process.env.REACT_APP_WEATHER_API_KEY}&lang=en&lat=${lat}&lon=${lon}&units=I&days=5`);
    res.send(result.data)
  } catch (error) {
    console.log(error);
  }
});

app.get("/movies", async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const result2 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&with_keywords=${keyword}`);
    res.send(result2.data)
  } catch (error) {
    console.log(error);
  }
});

app.listen(`${process.env.PORT}`, () => {
  console.log(`listening on port ${proc ess.env.PORT}`);
});


// http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=`