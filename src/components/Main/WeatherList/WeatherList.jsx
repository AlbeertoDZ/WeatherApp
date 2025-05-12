import React, { useEffect, useState } from "react";
import axios from 'axios'
import WeatherCard from "./WeatherCard"

const WeatherList = () => {

  // Para guardar el dato a buscar
  const [value, setValue] = useState("Madrid");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try{
        // Peticion HTTP
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
        const json = await res.data
        console.log(json)

        // Guarda en el array de posts el resultado. Procesa los datos
        setPosts(json)
      }catch(error){
        console.log(error);
        
      }
    }
    fetchData();
  }, [value])

  // const handleChange = (e) => {
  //   setValue(e.target.value)
  // }

  const handleSubmit = e => {
    console.log(e);
    
    e.preventDefault()
    console.log(e.target.city.value)
    setValue(e.target.city.value);
    e.target.city.value = "";
  }

  // const renderWeather = () =>{
  //   return <WeatherCard key={posts.id} data={posts} />
  // }
  
  

  return <section className="city">
  <h1>Ciudad</h1>
  <form onSubmit={handleSubmit}> 
    <input name="city" />
    <button>Buscar🔍</button>
  </form>


    {<WeatherCard key={posts.id} city={posts} />}  
  </section>;
  
  
};

export default WeatherList;
