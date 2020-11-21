import AxiosWithHeaders from "./AxiosWithHeaders";

function login(newUser) {
  return AxiosWithHeaders()
    .post("/api/auth/login", newUser)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export default login;
