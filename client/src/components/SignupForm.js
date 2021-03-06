import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import login from "../utils/login";
import register from "../utils/register";

import Toggle from "./Toggle";

const initialFormVals = {
  username: "",
  password: "",
  role: false,
};

export default function SignupForm() {
  const [formVals, setFormVals] = useState(initialFormVals);
  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formVals,
      role: formVals.role ? 2 : 1,
    };
    register(newUser)
      .then((res) => {
        console.log("Register Successful ==>> ", res);
      })
      .catch((err) => {
        console.log("Register Failed ==>> ", err);
      });
    login(newUser)
      .then((res) => {
        console.log("Login Successful ==>> ", res);
        localStorage.setItem("user", JSON.stringify(res.data));
        push("/dashboard");
      })
      .catch((err) => {
        console.log("Login Failed ==>> ", err);
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

  const handleRoleChange = (checked) => {
    setFormVals({
      ...formVals,
      role: checked,
    });
  };
  return (
    <div className="signin-signup signup">
      <h2>Sign Up Today!</h2>
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
        <label>Are you an Instructor?</label>
        <Toggle
          id="role"
          name="role"
          checked={formVals.role}
          onChange={handleRoleChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
