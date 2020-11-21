import Axios from "axios";
import { BASE_URL, LOCAL } from "../constants";

function AxiosWithHeaders() {
  return Axios.create({
    baseURL: LOCAL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export default AxiosWithHeaders;
