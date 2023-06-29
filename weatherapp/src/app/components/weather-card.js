"use client";

import React, { useState, useEffect } from "react";
import { fetchLocation } from "@/redux/features/location-slice";
import { fetchWeather } from "@/redux/features/weather-slice";
import { useDispatch, useSelector } from "react-redux";
import WeatherDetails from "./weather-details";

export default function Card() {
  const distpatch = useDispatch();
  const [input, setInput] = useState("");
  const location = useSelector((state) => state.location.location);
  const weather = useSelector((state) => state.weather.weather);

  const textInputHandler = (event) => {
    setInput(event.target.value);
  };

  const searchHandler = () => {
    distpatch(fetchLocation(input));
  };

  useEffect(() => {
    if (location.length > 0) {
      distpatch(fetchWeather({ lat: location[0].lat, lon: location[0].lon }));
    }
  }, [location]);

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold mt-11 text-center">
            Weather Forecast
          </h1>
          <div className=" mt-20">
            {location.length > 0 && weather.current_weather && weather && (
              <h1 className=" text-center">{location[0].display_name}</h1>
            )}
            <div className=" flex gap-5 mt-11">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={textInputHandler}
              />
              <button className="btn btn-primary" onClick={searchHandler}>
                Search
              </button>
            </div>
            {weather && weather.current_weather && <WeatherDetails />}
          </div>
        </div>
      </div>
    </>
  );
}
