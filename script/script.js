
/* spinner */
const spinnerPlace = document.querySelector('#spinnerPlace');

/* Weather */
const weatherTitle = document.querySelector('.weather__title');
const weatherTime = document.querySelector('.weather__time');
const weatherTemp = document.querySelector('.weather__temp');
const weatherPressure = document.querySelector('.weather__pressure');
const weatherWind = document.querySelector('.weather__wind');
const weatherType = document.querySelector('.weather__type');
const searchForm = document.querySelector('#searchForm');

const weatherData = {weatherTitle, weatherTime, weatherTemp, weatherPressure, weatherWind, weatherType};






/* Button */
const buttonSearch = document.querySelector('#search');



/*    API     */
const config = {
    key:'e7e013145e8f764392b0517c2ab23d80'
};

/* API */
const api = new Api(config); // api


/* Weather */

const weather = new Weather(weatherData, searchForm, api, spinnerPlace);

/* Init */
const init = new Init(weatherData, api, spinnerPlace);


// События

buttonSearch.addEventListener('click', weather.updateWeather.bind(weather));

/* Первая иницилизация */
init.getTime();


