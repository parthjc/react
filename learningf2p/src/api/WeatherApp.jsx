import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./WeatherApp.css";

export const WeatherApp = () => {
  const [data, setdata] = useState();
  const submitHandler = async (data) => {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: data.q,
            appid: "fe4feefa8543e06d4f3c66d92c61b69c",
          },
        }
      );
      console.log(res.data);
      setdata(res.data);
    } catch (err) {
      alert("Please enter valid city name");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div className="container">
        <div className="weather__header">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="weather__search"
          >
            <input
              type="text"
              placeholder="Search for a city..."
              className="weather__searchform"
              {...register("q")}
            />
            <i className="fa-solid fa-magnifying-glass" />
          </form>
          <div className="weather__units">
            <span className="weather_unit_celsius">°C</span>
            <span className="weather_unit_farenheit">°F</span>
          </div>
        </div>
        <div className="weather__body">
          <h1 className="weather__city">{data?.name}</h1>
          <div className="weather__datetime"></div>
          <div className="weather__forecast" />
          <div className="weather__icon">{data?.weather[0]?.main}</div>
          <p className="weather__temperature"></p>
          <div className="weather__minmax">
            <p>Min: {(data?.main.temp_min - 273.15).toFixed(2)}</p>
            <p>Max: {(data?.main.temp_max - 273.25).toFixed(2)}</p>
          </div>
        </div>
        <div className="weather__info">
          <div className="weather__card">
            <i className="fa-solid fa-temperature-full" />
            <div>
              <p>Real Feel</p>
              <p className="weather__realfeel">
                {(data?.main?.feels_like - 273).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="weather__card">
            <i className="fa-solid fa-droplet" />
            <div>
              <p>Humidity</p>
              <p className="weather__humidity">{data?.main?.humidity}</p>
            </div>
          </div>
          <div className="weather__card">
            <i className="fa-solid fa-wind" />
            <div>
              <p>Wind</p>
              <p className="weather__wind">{data?.wind?.speed}</p>
            </div>
          </div>
          <div className="weather__card">
            <i className="fa-solid fa-gauge-high" />
            <div>
              <p>Pressure</p>
              <p className="weather__pressure">{data?.main.pressure}</p>
            </div>
          </div>
          {/* <div className="weather__card">
              <i className="fa-solid fa-gauge-high" />
              <div>
                <p>Pressure</p>
                <p className="weather__pressure">{data?.main.pressure}</p>
              </div>
            </div> */}
          {/* <div className="weather__card">
              <i className="fa-solid fa-gauge-high" />
              <div>
                <p>Pressure</p>
                <p className="weather__pressure">{data?.main.pressure}</p>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};
