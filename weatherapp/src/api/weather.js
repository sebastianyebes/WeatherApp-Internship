import axios from "axios";

const baseUrl = "https://api.open-meteo.com/v1/forecast";

export const getWeather = async (lat, lon) => {
  return await axios
    .get(
      `${baseUrl}?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current_weather=true&timezone=Asia%2FSingapore`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
