import axios from "axios";

const baseUrl = "https://geocode.maps.co/search?q=";

export const getLocation = async (address) => {
  return await axios
    .get(`${baseUrl}${address}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
