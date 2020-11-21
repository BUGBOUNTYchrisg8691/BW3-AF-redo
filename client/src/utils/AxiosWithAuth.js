import Axios from "axios";

export default function AxiosWithAuth() {
  const token = JSON.parse(localStorage.getItem("user")).token;
  return Axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://covid-bod.herokuapp.com",
    headers: {
      Authorization: `${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
}
