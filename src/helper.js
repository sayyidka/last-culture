import axios from "axios";

export function callFlask(resource) {
  const API_URL = "http://127.0.0.1:5000" + resource;
  return axios.get(API_URL);
}
