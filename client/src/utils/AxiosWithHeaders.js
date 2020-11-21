import Axios from "axios";
import { BASE_URL, LOCAL } from "../constants";

function AxiosWithHeaders() {
  return Axios.create({
    // baseURL: LOCAL,
    baseURL: `https://cors-anywhere.herokuapp.com/${BASE_URL}`,
    // baseURL: BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export default AxiosWithHeaders;
