import { useState } from 'react'
import './App.css'

import searchIcon from "./assets/search.png";
import clearIcon from "./assets/clear.png";
import cloudIcon from "./assets/cloud.png";
import drizzleIcon from "./assets/drizzle.png";
import rainIcon from "./assets/rain.png";
import windIcon from "./assets/wind.png";
import snowIcon from "./assets/snow.png";
import humidityIcon from "./assets/humidity.png";

const WeatherDetais=({ icon,temp,city,country})=>{
  return (
    <>
    <div className="image">
      <img src={icon} alt="Image" />
    </div>
    <div className="temp">{temp}°C</div>
    <div className="location"> {city}</div>
    <div className="country"> {country}</div>
    </>
  );
}
function App() {
  const [icon,setIcon]=useState(snowIcon);
  const [temp,setTemp]=useState(0);
  const [city,setCity]=useState("Chennai");
  return (
    <>
    <div className="container">
      <div className="input-container">
        <input type="text" className="cityInput" placeholder="Search City" />
        <div classname="search-icon">
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      <WeatherDetais icon={icon} temp={temp} city={city} />
    </div>
    </>
  );
}

export default App
