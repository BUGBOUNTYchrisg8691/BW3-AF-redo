import React, { useState, useEffect } from "react";

import AxiosWithAuth from "../utils/AxiosWithAuth";

export default function InstuctorClasses() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const { id } = JSON.parse(localStorage.getItem("user"));
    AxiosWithAuth()
      .get(`/api/users/${id}/classes`)
      .then((res) => {
        console.log("Fetch Instructors Classes Successful ==>> ", res);
        setClasses(res.data);
      })
      .catch((err) => {
        console.log("Fetch Instructor Classes Failed ==>> ", err);
      });
  }, []);

  return <div>{JSON.stringify(classes)}</div>;
}
