import React, { useState } from 'react';
import searchIcon from '../assets/search.png';
import humidityIcon from '../assets/humidity.png';
import rainIcon from '../assets/rain.png';
import cloudIcon from '../assets/cloud.png';
import snowIcon from '../assets/snow.png';
import windIcon from '../assets/wind.png';
import broomIcon from '../assets/broom.png';

const weatherIconMap = {
  "01d": broomIcon,
  "01n": broomIcon,
  "02d": cloudIcon,
  "02n": cloudIcon,
  "03d": rainIcon,
  "03n": rainIcon,
  "04d": rainIcon,
  "04n": rainIcon,
  "09d": rainIcon,
  "09n": rainIcon,
  "10d": snowIcon,
  "13d": snowIcon,

}

import Weatherdetails from '../components/Weatherdetails';


const Search = () => {
  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chidambaram")
  const [country, setCountry] = useState("India")
  const [lon, setLon] = useState(0)
  const [lat, setLat] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [wind, setWind] = useState(0)
  const [text, setText] = useState("Chennai")
  const [cityNotFound, setCityNotFound] = useState(false)
  const [loading, setLoading] = useState(false)

  let apikey = "2f50c652434addf9ffe9209481ac585e";
  const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        console.error("city not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode]|| snowIcon);
    
      setCityNotFound(false);
    } catch (error) {
      console.error("An error Occured: ", error.message);

    } finally {
      setLoading(false);
    }

  };
  const handlecity = (e) => {
    setText(e.target.value);
  };
  const handlekeydown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };
  return (
    <div>
      <div className='w-[400px] p-5 bg-white border rounded-2xl shadow-2xl text-black'>
        <div className='flex items-center w-full border-2 border-sky-400 overflow-hidden'>
          <input
            className='flex-1 h-7 border-none text-md outline-none p-3'
            type='text' onChange={handlecity} value={text} onKeyDown={handlekeydown}
            placeholder='Search City'
          />
          <div className='p-2 h-8 cursor-pointer'>
            <img className='m-0.5' src={searchIcon} onClick={search} alt='Search' />
          </div>
        </div>

        <Weatherdetails icon={icon} temp={temp} city={city} country={country} lat={lat} lon={lon} wind={wind} humidity={humidity} />
      </div>
    </div>
  );
};


export default Search;
