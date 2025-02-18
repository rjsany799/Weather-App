import React from 'react';
import './WeatherApp.css'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import search_icon from '../Assets/search.png'


const WeatherApp = () => {
    
    let apikey = "2789a50057128b51468d57393e8ab6b2" 
    const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if (element[0].value==="") {
      return 0
    }

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apikey}'

    let response = await fetch(url);
    let data = await response.json(0);

    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temperature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML = data.wind.humidity
    wind[0].innerHTML = data.wind.speed
    temperature[0].innerHTML = data.wind.temp
    location[0].innerHTML = data.name
  }
    
  return (
    <div className='container'>
       <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' />
         <div className="search-icon">
          <img src={search_icon} alt="" /> </div> 
       </div>
       
      <div className="weather-image">
            <img src={cloud_icon} alt="" />
      </div>

          <div className="weather-temp">24°c</div>

          <div className="weather-location">London</div>

          <div className="data-container">
            <div className="element">
              <img src={humidity_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
              </div>
            </div>

            <div className="element">
              <img src={wind_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percent">18 km/h</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>

                  
    </div>
  )
}

export default  WeatherApp;
