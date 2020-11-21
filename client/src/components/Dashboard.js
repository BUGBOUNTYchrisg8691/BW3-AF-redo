import React, { useState, useEffect } from "react";

import Instructor from "./Instructor";
import Student from "./Student";

export default function Dashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div>
      <h2 className="user-heading">
        Welcome back,{" "}
        {user.message &&
          user.message.split(" ")[user.message.split(" ").length - 1]}
        !
      </h2>
      {/* if user is instructor, instructor component */}
      {user.role === 2 && <Instructor />}
      {/* student component */}
      <Student />
    </div>
  );
}
