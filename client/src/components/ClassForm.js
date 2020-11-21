import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const initialFormVals = {
  class_name: "",
  type: "",
  start_time: "",
  end_time: "",
  intensity: "",
  location: "",
  max_size: "",
};

export default function ClassForm({ classEdit }) {
  const [formVals, setFormVals] = useState(initialFormVals);

  useEffect(() => {
    if (classEdit) {
      // delete classEdit.instructor;
      setFormVals(classEdit);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = JSON.parse(localStorage.getItem("user")).id;
    if (classEdit) {
      const newClass = {
        ...formVals,
        // instructor_id: id,
        intensity: Number(formVals.intensity),
        max_size: Number(formVals.max_size),
      };
      AxiosWithAuth()
        .post(`/api/classes/${formVals.id}`, newClass)
        .then((res) => {
          console.log("Add Class Successful ==>> ", res);
        })
        .catch((err) => {
          console.log("Add Class Failed ==>> ", err);
        });
    } else {
      const newClass = {
        ...formVals,
        instructor_id: id,
        enrolled: 0,
        intensity: Number(formVals.intensity),
        max_size: Number(formVals.max_size),
      };
      AxiosWithAuth()
        .post("/api/classes", newClass)
        .then((res) => {
          console.log("Add Class Successful ==>> ", res);
        })
        .catch((err) => {
          console.log("Add Class Failed ==>> ", err);
        });
    }
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
    <form className="add-form" onSubmit={handleSubmit}>
      <label>Class Name</label>
      <input
        type="text"
        name="class_name"
        value={formVals.class_name}
        onChange={handleChange}
      />
      <label>Type</label>
      <input
        type="text"
        name="type"
        value={formVals.type}
        onChange={handleChange}
      />
      <label>Start Time</label>
      <input
        type="time"
        name="start_time"
        value={formVals.start_time}
        onChange={handleChange}
      />
      <label>End Time</label>
      <input
        type="time"
        name="end_time"
        value={formVals.end_time}
        onChange={handleChange}
      />
      <label>Intensity</label>
      <input
        type="number"
        name="intensity"
        value={formVals.intensity}
        onChange={handleChange}
        min="0"
        max="10"
      />
      <label>Location</label>
      <input
        type="text"
        name="location"
        value={formVals.location}
        onChange={handleChange}
      />
      <label>Max Class Size</label>
      <input
        type="number"
        name="max_size"
        value={formVals.max_size}
        onChange={handleChange}
        min="0"
      />
      <button>Submit</button>
    </form>
  );
}

ClassForm.defaultProps = {
  classEdit: false,
};
