import React, { useState } from 'react';
import searchIcon from '../assets/search.png';
import humidityIcon from '../assets/humidity.png';
 import rainIcon from '../assets/rain.png';
import cloudIcon from '../assets/cloud.png';
import snowIcon from '../assets/snow.png';
import windIcon from '../assets/wind.png';
import broomIcon from '../assets/broom.png';

import Weatherdetails from '../components/Weatherdetails';


const Search = () => {
    const [icon, setIcon] = useState(snowIcon);
    const [temp, setTemp] = useState(0);
    const [city, setCity] = useState("Chidambaram")
    const [country, setCountry] = useState("India")
    const [lon, setLon] = useState(0)
    const [lat,setLat] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [wind, setWind] = useState(0)

  return (
    <div>
      <div className='w-[400px] p-5 bg-white border rounded-2xl shadow-2xl text-black'>
        <div className='flex items-center w-full border-2 border-sky-400 overflow-hidden'>
          <input
            className='flex-1 h-7 border-none text-md outline-none p-3'
            type='text'
            placeholder='Search City'
          />
          <div className='p-2 h-8 cursor-pointer'>
            <img className='m-0.5' src={searchIcon} alt='Search' />
          </div>
        </div>

        <Weatherdetails icon={icon} temp={temp} city={city} country ={country} lat={lat} lon={lon} wind={wind} humidity={humidity} />
      </div>
    </div>
  );
};


export default Search;
