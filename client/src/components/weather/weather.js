import React, { Component } from "react";
import "./weather.css";
export default class Weather extends Component {
  showWeather = data => {
    const { main, description, icon } = data.weather[0];
    return (
      <div className="card weather-card">
        <img
          className="climate-icon"
          height="50"
          width="50"
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="Weather icon"
        />
        <div className="card-body weather-card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{main}</h6>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  };

  render() {
    const { weather, isLoading } = this.props;
    return (
      <div>{isLoading ? <p>isLoading...</p> : this.showWeather(weather)}</div>
    );
  }
}
