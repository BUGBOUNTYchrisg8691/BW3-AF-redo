import React, { /*useState,*/ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import AxiosWithAuth from "../utils/AxiosWithAuth";
import { fetchInstructorClasses } from "../store/actions/instructorActions";

import InstructorClass from "./InstructorClass";

export default function InstuctorClasses() {
  // const [classes, setClasses] = useState([]);
  const classes = useSelector(
    (state) => state.instructorClasses.instructorClasses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = JSON.parse(localStorage.getItem("user"));
    dispatch(fetchInstructorClasses(id));
    // AxiosWithAuth()
    //   .get(`/api/users/${id}/classes`)
    //   .then((res) => {
    //     console.log("Fetch Instructors Classes Successful ==>> ", res);
    //     setClasses(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("Fetch Instructor Classes Failed ==>> ", err);
    //   });
  }, []);

  return (
    <>
      <h2>Your Classes</h2>
      <div className="class-list">
        {classes.length > 0 &&
          classes.map((cls) => {
            return <InstructorClass cls={cls} />;
          })}
      </div>
    </>
  );
}
