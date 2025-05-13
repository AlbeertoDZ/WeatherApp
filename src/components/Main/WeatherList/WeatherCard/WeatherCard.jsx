import React from "react";
import rainImage from "../../../../assets/rain.png"
import sunnyImage from "../../../../assets/sunny.png"
import cloudImage from "../../../../assets/clouds.png"
import "./WeatherCard.css"


const WeatherCard = ({city}) => {
  // Función para convertir milisegundos a hora y minutos
// const formatTime = (milliseconds) => {
//   const date = new Date(milliseconds * 1000); // Multiplicamos por 1000 porque dt está en segundos
//   const hours = date.getHours().toString().padStart(2, '0');
//   const minutes = date.getMinutes().toString().padStart(2, '0');
//   return `${hours}:${minutes}`;
// };

// Selección de imagen según el estado del tiempo
  const getWeatherImage = (weather) => {
    switch (weather?.toLowerCase()) {
      case "clouds":
        return cloudImage;
      case "rain":
        return rainImage;
      case "clear":
        return sunnyImage;
      default:
        return null; // Si no coincide con ninguna opción
    }
  };


  
  return <article className="weather-card">
    {/* <h5>{city.}</h5> */}
   <img
        src={getWeatherImage(city.weather?.[0]?.main)}
        alt={city.weather?.[0]?.main || "weather"}
        className="weather-image"
      />
    <p>Fecha: {city.dt_txt}</p>
    {/* <p>Horario: {formatTime(city.dt)}</p> */}
    <p>Estado del tiempo: {city.weather?.[0]?.main}</p> 
    <p>Temperatura: {city.main?.temp}</p>
    
    </article>;
};

export default WeatherCard;
