import Axios from "axios";

import { BASE_URL } from "../constants";
// import { LOCAL } from "../constants";

export default function AxiosWithAuth() {
  const token = JSON.parse(localStorage.getItem("user")).token;
  return Axios.create({
    // baseURL: LOCAL,
    // baseURL: `https://cors-anywhere.herokuapp.com/${BASE_URL}`,
    baseURL: BASE_URL,
    headers: {
      Authorization: `${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
}
