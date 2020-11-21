import React, { useState } from "react";

import Toggle from "./Toggle";

const initialFormVals = {
  username: "",
  password: "",
  role: false,
};

export default function SignupForm() {
  const [formVals, setFormVals] = useState(initialFormVals);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formVals,
      role: formVals.role ? 2 : 1,
    };
    register(newUser);
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
  );
}
