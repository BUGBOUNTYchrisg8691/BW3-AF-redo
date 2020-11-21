import React, { useState, useEffect } from "react";

import AxiosWithAuth from "../utils/AxiosWithAuth";

import Class from "./Class";

export default function ClassList() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("/api/classes")
      .then((res) => {
        console.log("Classes Fetch Successful ==>> ", res);
        setClasses(res.data);
      })
      .catch((err) => {
        console.log("Classes Fetch Failed ==>> ", err);
      });
  }, []);

  return (
    <div>
      {classes.length > 0 &&
        classes.map((cls) => {
          return <Class cls={cls} />;
        })}
    </div>
  );
}
