import React from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

export default function Class({ cls }) {
  const handleEnroll = (e) => {
    e.preventDefault();
    const { id } = JSON.parse(localStorage.getItem("user"));
    // console.log(id);
    AxiosWithAuth()
      .post(`/api/classes/${cls.id}/attendees`, { user_id: id, id: cls.id })
      .then((res) => {
        console.log("Enrollment Successful ==>> ", res);
      })
      .catch((err) => {
        console.log("Enrollment Failed ==>> ", err);
      });
    AxiosWithAuth()
      .get(`/api/classes/${cls.id}/attendees`)
      .then((res) => {
        console.log("Fetch Attendees Successful ==>> ", res);
      })
      .catch((err) => {
        console.log("Fetch Attendees Failed ==>> ", err);
      });
  };

  return (
    <div>
      <form>
        <button onClick={handleEnroll}>Enroll</button>
        <label>Class Name</label>
        <h3>{cls.class_name}</h3>
        <label>Instructor</label>
        <h3>{cls.instructor}</h3>
        <label>Type</label>
        <h5>{cls.type}</h5>
        <label>Location</label>
        <h4>{cls.location}</h4>
        <label>Start Time</label>
        <p>{cls.start_time}</p>
        <label>End Time</label>
        <p>{cls.end_time}</p>
        <label>Intensity</label>
        <p>{cls.intensity}</p>
        <label>Max Class Size</label>
        <p>{cls.max_size}</p>
      </form>
    </div>
  );
}
