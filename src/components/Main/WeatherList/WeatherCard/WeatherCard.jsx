import React from "react";

const WeatherCard = ({city}) => {
  
  // Función para convertir milisegundos a hora y minutos
const formatTime = (milliseconds) => {
  const date = new Date(milliseconds * 1000); // Multiplicamos por 1000 porque dt está en segundos
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};
  
  return <article className="weather-card">
    <h4>{city.name}</h4>
    <p>Horario: {formatTime(city.dt)}</p>
    <p>Estado del tiempo: {city.weather?.[0]?.main}</p> 
    <p>Temperatura: {city.main?.temp}</p>
    
    </article>;
};

export default WeatherCard;
