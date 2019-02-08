import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "";

class App extends React.Component {

 // Этот метод получает информацию от сервера погоды и преобразует его в json
  gettingWeather = async() => {
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
      <Info />
      <Form />
      <Weather />
      </div>
    );
  }
}

export default App;
