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

const WeatherDetais=({ icon,temp,city,country,lat,log,humidity,wind})=>{
  return (
    <>
    <div className="image">
      <img src={icon} alt="Image" />
    </div>
    <div className="temp">{temp}°C</div>
    <div className="location"> {city}</div>
    <div className="country"> {country}</div>
    <div className="cord">
      <div>
        <span className="lat">latitude</span>
        <span>{lat}</span>
      </div>
      <div>
        <span className="log">longitude</span>
        <span>{log}</span>
      </div>
    </div>
    <div className="data-container">
      <div className="element">
        <img src={humidityIcon} alt="humidity" className="icon" />
        <div className="data">
        <div className="humidity-percent">{humidity}%</div>
        <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={windIcon} alt="wind" className="icon" />
        <div className="data">
        <div className="wind-percent">{wind} km/h</div>
        <div className="text">Wind Speed</div>
        </div>
      </div>
    </div>
    </>
  );
}

function App() {
  let api_key="31574b142dcf2182775ba565a24be264";
  const [text,setText]=useState("Chennai");

  const [icon,setIcon]=useState(snowIcon);
  const [temp,setTemp]=useState(0);
  const [city,setCity]=useState("Chennai");
  const [country,SetCountry]=useState("IN")
  const [lat,setLat]=useState(0);
  const [log,setLog]=useState(0);
  const [humidity, setHumidity]=useState(0);
  const [wind,setWind]=useState(0);

  const [cityNotFound, setCityNotFound]=useState(false);
  const [loading, setLoading]=useState(false);

  const search =async() =>{
    setLoading(true);

    let url="https://api.openweathermap.org/data/2.5/weather?q= ${text}&appid= ${api_key}&units=Metric";
    try{
      let res= await fetch(url);
      let data= await res.json();
      console.log(data);
    } catch(error){
      console.error("An error occured:",error.message);
    } finally{
      setLoading(false);
    }
  
  };

 
  const handleCity =(e) =>{
    setText(e.target.value);
  };
  const handleKeyDown =(e) =>{
    if(e.key === "Enter"){
      search();
    }
  };


  return (
    <>
    <div className="container">
      <div className="input-container">
        <input type="text" className="cityInput" placeholder="Search City" 
        onChange={handleCity} value={text} onKeyDown={handleKeyDown}  />
        <div classname="search-icon" onClick={() => search()}>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      <WeatherDetais icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} />
    
    <p className='bsh'>
      Designed by <span>Boobesh</span>
    </p>
    </div>
    </>
  );
}

export default App
