import AxiosWithHeaders from "./AxiosWithHeaders";

import { LOCAL } from "../constants";

function register(newUser) {
  return AxiosWithHeaders()
    .post(`${LOCAL}/api/auth/register`, newUser)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export default register;
