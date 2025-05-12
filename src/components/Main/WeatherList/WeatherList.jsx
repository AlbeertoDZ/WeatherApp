import React, { useEffect, useState } from "react";
import axios from 'axios'

const WeatherList = () => {

  // Para guardar el dato a buscar
  const [value, setValue] = useState();
  // Para guardar 
  const [weather, setWeather] = useState([]);

  const [city, setCity] = useState("Madrid");


  useEffect(() => {
    const getWeather = async () => {
      try{
        // Peticion HTTP
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        
        setWeather(res.data.list)

      }catch(error){
        setWeather([]) // No pintes nada
        
      }
    }
    getWeather();
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(value)
    setValue("");
  }

  return <>
    WeatherList
  </>;
};

export default WeatherList;
