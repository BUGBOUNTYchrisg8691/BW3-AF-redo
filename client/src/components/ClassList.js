import React, { /*useState,*/ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import AxiosWithAuth from "../utils/AxiosWithAuth";
import { fetchClasses } from "../store/actions/classesActions";

import Class from "./Class";

export default function ClassList() {
  // const [classes, setClasses] = useState([]);
  const classes = useSelector((state) => state.classes.classes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClasses());
    // AxiosWithAuth()
    //   .get("/api/classes")
    //   .then((res) => {
    //     console.log("Classes Fetch Successful ==>> ", res);
    //     setClasses(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("Classes Fetch Failed ==>> ", err);
    //   });
  }, []);

  return (
    <>
      <h2 className="user-heading">Available Classes</h2>
      <h3 className="user-subheading">Enroll Now!</h3>
      <div className="class-list">
        {classes.length > 0 &&
          classes.map((cls) => {
            return <Class cls={cls} />;
          })}
      </div>
    </>
  );
}
