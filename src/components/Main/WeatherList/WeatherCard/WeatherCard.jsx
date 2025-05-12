import React from "react";

const WeatherCard = ({data:{time,temperature, weather}}) => {
  return <article>
    <p>Horario: {time}</p>
    <p>Temperatura: {temperature}</p>
    <p>Estado del tiempo: {weather}</p>
    </article>;
};

export default WeatherCard;
