import React from "react";
import "./WeatherIcon.scss";

const WeatherIcon = ({ icon }) => {
  const currentIcon = () => {
    switch (icon) {
      case "01d":
        return <img src="./assets/img/animated/day.svg" alt="Clear sky" />;
      case "01n":
        return <img src="./assets/img/animated/night.svg" alt="Clear sky" />;
      case "02d":
      case "02n":
      case "03d":
      case "03n":
        return <img src="./assets/img/animated/cloudy-sun.svg" alt="Few clouds: 40%" />;
      case "04d":
      case "04n":
        return <img src="./assets/img/animated/cloudy.svg" alt="Overcast clouds: 85-100%" />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <img src="./assets/img/animated/rainy.svg" alt="Rain" />;
      case "11d":
      case "11n":
        return <img src="./assets/img/animated/thunder.svg" alt="Thunderstorm" />;
      case "13d":
      case "13n":
        return <img src="./assets/img/animated/snowy.svg" alt="Snow" />;
      case "50d":
      case "50n":
        return <img src="./assets/img/animated/cloudy.svg" alt="Mist" />;

      default:
        return <span>IMAGE NOT FOUND</span>;
    }
  };

  return (
    <div className="container-weather-icon">
      <div className="content-icon">{currentIcon()}</div>
    </div>
  );
};

export default WeatherIcon;
