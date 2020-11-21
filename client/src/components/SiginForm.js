import React, { useState } from "react";

import login from "./utils/login";

const initialFormVals = {
  username: "",
  password: "",
};

export default function SiginForm() {
  const [formVals, setFormVals] = useState(initialFormVals);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formVals);
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
  );
}
