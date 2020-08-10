import React from "react";
import kToF from "../util/utils";

export interface Weather {
  temp: {
    day?: string;
    eve?: string;
    max?: string;
    min?: string;
    current?: string;
    morn?: string;
    night?: string;
  };
  icon?: string;
}
export default function WeatherByDay(props: Weather) {
  function printCurrentWeather() {
    return <div>Currently: {kToF(props.temp.current)}F</div>;
  }
  function printEve() {
    return <div>This Evening: {kToF(props.temp.day)}F </div>;
  }
  function printDay() {
    return <div>During the day: {kToF(props.temp.day)}F </div>;
  }
  function printHigh() {
    return <div>High: {kToF(props.temp.max)}F </div>;
  }
  function printLow() {
    return <div>Low: {kToF(props.temp.min)}F</div>;
  }
  function printIcon() {
    return (
      <img
        alt="weather icon"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      />
    );
  }
  return (
    <div>
      <div>{props.temp.current && printCurrentWeather()}</div>
      <div>{props.temp.day && printDay()}</div>
      <div>{props.temp.eve && printEve()}</div>
      <div>{props.temp.max && printHigh()}</div>
      <div>{props.temp.min && printLow()}</div>
      <div>{props.icon && printIcon()}</div>
    </div>
  );
}
