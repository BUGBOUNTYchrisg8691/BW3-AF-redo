import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  searchClasses,
  searchClassesTime,
  fetchClasses,
} from "../store/actions/classesActions";

const initialFormVals = {
  category: "category",
  search: "",
};

export default function SearchForm() {
  const [formVals, setFormVals] = useState(initialFormVals);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVals({
      ...formVals,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formVals.category === "duration") {
      dispatch(searchClassesTime(formVals.search));
      setFormVals(initialFormVals);
    } else {
      dispatch(searchClasses(formVals));
      setFormVals(initialFormVals);
    }
  };

  return (
    <div className="search-form-container">
      <h2>Search Classes</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <label>Category</label>
        <select
          name="category"
          value={formVals.category}
          onChange={handleChange}
        >
          <option value="category">Select a Category...</option>
          <option value="class_name">By Class Name</option>
          <option value="start_time">By Time</option>
          <option value="duration">By Duration</option>
          <option value="location">By Location</option>
          <option value="type">By Type</option>
          <option value="intensity">By Intensity</option>
        </select>
        <label>Search Criteria</label>
        <input
          type="text"
          name="search"
          value={formVals.search}
          onChange={handleChange}
        />
        <button>Submit</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(fetchClasses());
            setFormVals(initialFormVals);
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
