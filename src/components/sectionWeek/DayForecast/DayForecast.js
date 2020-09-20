import React from "react";
import { MOUNTHS } from "./../../../const/mounths";
import { WEEK } from "./../../../const/week";
import { checkZero } from "./../../../function/checkZero";

import "./DayForecast.scss";

const DayForecast = ({ icon, tempUnits, timezone, description, lang, temp, date }) => {
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
  const units = tempUnits ? "°C" : "°F";
  const weatherDescription = description[0].toUpperCase() + description.slice(1);
  const currentDate = new Date((date + timezone) * 1000);
  const day = lang
    ? WEEK.en[currentDate.getUTCDay()] +
      ", " +
      checkZero(currentDate.getUTCDate() + " " + MOUNTHS.en[currentDate.getUTCMonth()])
    : WEEK.ru[currentDate.getUTCDay()] +
      ", " +
      checkZero(currentDate.getUTCDate() + " " + MOUNTHS.ru[currentDate.getUTCMonth()]);

  return (
    <div className="container-day-forecast">
      <span>{day}</span>
      {currentIcon()}
      <div>
        <span className="day-temp">{Math.round(temp) + " " + units}</span>
      </div>
      <span>{weatherDescription}</span>
    </div>
  );
};

export default DayForecast;
