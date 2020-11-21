import Axios from "axios";

function AxiosWithHeaders() {
  return Axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export default AxiosWithHeaders;
