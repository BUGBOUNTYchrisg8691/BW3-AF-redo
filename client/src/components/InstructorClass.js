import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import AxiosWithAuth from "../utils/AxiosWithAuth";
import { fetchClasses } from "../store/actions/classesActions";

export default function InstructorClass({ cls }) {
  const [formVals, setFormVals] = useState(cls);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClasses());
  }, [isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVals({
      ...formVals,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .put(`/api/classes/${cls.id}`, formVals)
      .then((res) => {
        console.log("Put Class Successful ==>> ", res);
      })
      .catch((err) => {
        console.log("Put Class Successful ==>> ", err);
      });
    setIsEditing(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .delete(`/api/classes/${cls.id}`)
      .then((res) => {
        console.log("Delete Class Successful ==>> ", res);
      })
      .catch((err) => {
        console.log("Delete Class Failed ==>> ", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button onClick={handleDelete}>X</button>
        <label>Class Name</label>
        {isEditing ? (
          <input
            type="text"
            name="class_name"
            value={formVals.class_name}
            onChange={handleChange}
          />
        ) : (
          <h3>{cls.class_name}</h3>
        )}
        <label>Type</label>
        {isEditing ? (
          <input
            type="text"
            name="type"
            value={formVals.type}
            onChange={handleChange}
          />
        ) : (
          <>
            <h5>{cls.type}</h5>
          </>
        )}
        <label>Location</label>
        {isEditing ? (
          <input
            type="text"
            name="location"
            value={formVals.location}
            onChange={handleChange}
          />
        ) : (
          <h4>{cls.location}</h4>
        )}
        <label>Start Time</label>
        {isEditing ? (
          <input
            type="time"
            name="start_time"
            value={formVals.start_time}
            onChange={handleChange}
          />
        ) : (
          <p>{cls.start_time}</p>
        )}
        <label>End Time</label>
        {isEditing ? (
          <input
            type="time"
            name="end_time"
            value={formVals.end_time}
            onChange={handleChange}
          />
        ) : (
          <p>{cls.end_time}</p>
        )}
        <label>Intensity</label>
        {isEditing ? (
          <input
            type="number"
            name="intensity"
            value={formVals.intensity}
            onChange={handleChange}
          />
        ) : (
          <p>{cls.intensity}</p>
        )}
        <label>Max Class Size</label>
        {isEditing ? (
          <input
            type="number"
            name="max_size"
            value={formVals.max_size}
            onChange={handleChange}
          />
        ) : (
          <p>{cls.max_size}</p>
        )}
        {!isEditing ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        )}
        <button>Submit</button>
      </form>
    </div>
  );
}
