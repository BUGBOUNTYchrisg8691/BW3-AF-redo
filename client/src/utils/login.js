import AxiosWithHeaders from "./AxiosWithHeaders";

import LOCAL from "../constants";

function login(newUser) {
  return AxiosWithHeaders()
    .post(`${LOCAL}/api/auth/login`, newUser)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export default login;
