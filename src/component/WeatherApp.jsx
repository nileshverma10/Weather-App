import React from "react";
import { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [weather, setWeather] = useState([]);
  // const [temp, setTemp] = useState();
  const handleClick = (e) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38081323c5081e13ab9787ab61ae3007`
      )
      .then((res) => {
        // console.log(res.data.weather[0].description);
        setData(res.data);
        // const curr = ((temp - 32) * 5) / 9;
        // setTemp(curr);
        setWeather(res.data.weather[0].description);
      })
      .catch((error) => {
        console.log(error);
        setData(error);

        setCity("");
        setData("");
        e.preventDefault();
      });
  };
  return (
    <>
      <div className="box1">
        <input
          className="input"
          type="text"
          placeholder="Enter the City"
          id="city"
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <br />
        <button className="btn" onClick={handleClick}>
          Search
        </button>
        <div className="container1">
          <div className="box2">
            {
              <h3 className="temp">
                Temperature
                <br />
                {data?.main?.temp}
              </h3>
            }
          </div>
          <div className="box3">
            {
              <h3 className="temp">
                Wind Speed
                <br />
                {data?.wind?.speed}
              </h3>
            }
          </div>
        </div>
        <div className="container2">
          <div className="box4">
            {
              <h3 className="temp">
                Pressure
                <br />
                {data?.main?.pressure}
              </h3>
            }
          </div>
          <div className="box5">
            {
              <h3 className="temp">
                Weather
                <br />
                {weather}
              </h3>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
