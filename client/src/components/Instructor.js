import React from "react";

import ClassForm from "./ClassForm";
import InstructorClasses from "./InstuctorClasses";

export default function Instructor() {
  return (
    <div>
      {/* Instructor */}
      {/* classlist compoent with ability to edit/remove */}
      <InstructorClasses />
      {/* add class component */}
      <ClassForm />
    </div>
  );
}
