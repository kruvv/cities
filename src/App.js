import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "82b797b6ebc625032318e16f1b42c016";

class App extends React.Component {

  state = {
    temp: undefined, //Температура
    city: undefined, //Город
    country: undefined, //Код страны
    pressure: undefined, //Давление
    sunset: undefined, //Заход солнца
    error: undefined //Ошибка данных
  }

 // Этот метод получает информацию от сервера погоды и преобразует его в json
  gettingWeather = async(event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;

if(city) {
  const api_url = await
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await api_url.json();
  //console.log(data); //Для начальной диагностики

  var sunset = data.sys.sunset;
  var date = new Date();
  date.setTime(sunset);
  var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  this.setState({
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    pressure: data.main.pressure,
    sunset: sunset_date,
    error: ""
      });
    }
  }

  render() {
    return (
      <div>
      <Info />
      <Form weatherMethod={this.gettingWeather} />
      <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        pressure={this.state.pressure}
        sunset={this.state.sunset}
        error={this.state.error}
      />
      </div>
    );
  }
}

export default App;
