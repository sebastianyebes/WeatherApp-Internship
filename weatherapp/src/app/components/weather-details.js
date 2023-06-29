import { useSelector } from "react-redux";

export default function Card() {
  const weather = useSelector((state) => state.weather.weather);

  return (
    <>
      <div className=" mt-5">
        <h1>Current Weather: </h1>
        <br />
        <h1>Temperature: {weather.current_weather.temperature} °C</h1>
        <h1>Wind speed: {weather.current_weather.windspeed} Km/h</h1>
        <h1>Wind Direction: {weather.current_weather.winddirection} °</h1>
        <h1>Date: {weather.current_weather.time.split("T")[0]}</h1>
        <h1>Time: {weather.current_weather.time.split("T")[1]}</h1>
      </div>
    </>
  );
}
