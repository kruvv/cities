import React from "react";

const Weather = props => (
  <div className="infoWeath">
  { props.city &&
    <div>
      <p>Местоположение:  {props.city},  {props.country}</p>
      <p>Температура:  {props.temp} C &deg;</p>
      <p>Давление:  {props.pressure}  hPa</p>
      <p>Заход солнца:  {props.sunset}</p>
    </div>
  }
  <p className="error">{ props.error }</p>
</div>
);


export default Weather;
