import AxiosWithHeaders from "./AxiosWithHeaders";

function register(newUser) {
  return AxiosWithHeaders()
    .post("/api/auth/register", newUser)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export default register;
