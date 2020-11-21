import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import login from "../utils/login";

const initialFormVals = {
  username: "",
  password: "",
};

export default function SigninForm() {
  const [formVals, setFormVals] = useState(initialFormVals);
  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formVals)
      .then((res) => {
        console.log("Login Successful ==>> ", res);
        localStorage.setItem("user", JSON.stringify(res.data));
        push("/dashboard");
      })
      .catch((err) => {
        console.log("Login Failed ==>>", err);
      });
    setFormVals(initialFormVals);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVals({
      ...formVals,
      [name]: value,
    });
  };
  return (
    <div className="signin-signup signin">
      <h2>Please Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formVals.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formVals.password}
          onChange={handleChange}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
}
