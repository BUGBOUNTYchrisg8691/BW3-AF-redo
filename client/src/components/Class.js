import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

export default function Class({ cls }) {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get(`/api/classes/${cls.id}/attendees`)
      .then((res) => {
        console.log("Fetch Attendees Successful ==>> ", res);
        setAttendees(
          res.data.map((attendee) => {
            return attendee.username;
          })
        );
      })
      .catch((err) => {
        console.log("Fetch Attendees Failed ==>> ", err);
      });
  }, []);

  const handleEnroll = (e) => {
    e.preventDefault();
    const { id } = JSON.parse(localStorage.getItem("user"));
    AxiosWithAuth()
      .post(`/api/classes/${cls.id}/attendees`, { user_id: id })
      .then((res) => {
        console.log("Enrollment Successful ==>> ", res);
      })
      .catch((err) => {
        console.log("Enrollment Failed ==>> ", err);
      });
  };

  // const handleUnenroll = (e) => {
  //   e.preventDefault();
  //   const { id } = JSON.parse(localStorage.getItem("user"));
  //   AxiosWithAuth()
  //     .delete(`/api/classes/${cls.id}/attendees`, { id: id })
  //     .then((res) => {
  //       console.log("Unenrollment Successful ==>> ", res);
  //     })
  //     .catch((err) => {
  //       console.log("Unenrollment Failed ==>> ", err);
  //     });
  // };

  return (
    <div className="class-card">
      <form>
        {/* {attendees.includes(
          JSON.parse(localStorage.getItem("user")).message.split(" ")[
            JSON.parse(localStorage.getItem("user")).message.split(" ").length -
              1
          ]
        ) ? (
          <button onClick={handleUnenroll}>Unenroll</button>
        ) : (
          <button onClick={handleEnroll}>Enroll</button>
        )} */}
        {!attendees.includes(
          JSON.parse(localStorage.getItem("user")).message.split(" ")[
            JSON.parse(localStorage.getItem("user")).message.split(" ").length -
              1
          ]
        ) && <button onClick={handleEnroll}>Enroll</button>}
        <label>Class Name</label>
        <h3>{cls.class_name}</h3>
        <label>Instructor</label>
        <h3>{cls.instructor}</h3>
        <label>Type</label>
        <h5>{cls.type}</h5>
        <label>Location</label>
        <p>{cls.location}</p>
        <label>Start Time</label>
        <p>{cls.start_time}</p>
        <label>End Time</label>
        <p>{cls.end_time}</p>
        <label>Intensity</label>
        <p>{cls.intensity}</p>
        <label>Max Class Size</label>
        <p>{cls.max_size}</p>
        <label>Spots Left</label>
        <p>{cls.max_size - attendees.length}</p>
      </form>
    </div>
  );
}
