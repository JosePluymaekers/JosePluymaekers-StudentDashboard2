import React from "react";
import { withRouter } from "react-router-dom";

function Dashboard(props) {
  const options = props.students.map((student) => {
    return (
      <option key={student.id} value={student.id}>
        {student.firstName}
      </option>
    );
  });
  console.log(options);

  const optionsAssignment = props.assignments.map((assignment) => {
    return (
      <option key={assignment.id} value={assignment.id}>
        {assignment.assignment}
      </option>
    );
  });
  console.log(optionsAssignment);

  const studentSelectHandleChange = (event) => {
    props.history.push(`${event.target.value}`);
  };

  const assignmentSelectHandleChange = (event) => {
    props.history.push(`${event.target.value}`);
  };

  const buttonHandleChange = (event) => {
    props.history.push("/container");
  };

  return (
    <div className="filter-div" style={{ position: "relative", zIndex: "2" }}>
      <button id="selectAllStudents" onClick={buttonHandleChange}>
        See all results
      </button>
      <label>
        <select
          name="select-student"
          id="selectStudent"
          onChange={studentSelectHandleChange}
        >
          <option value="container">Select single student</option>
          {options}
        </select>
      </label>
      <label>
        <select
          name="select-assignment"
          id="selectAssignment"
          onChange={assignmentSelectHandleChange}
        >
          <option value="container">Select single assignment</option>
          {optionsAssignment}
        </select>
      </label>
    </div>
  );
}

export default withRouter(Dashboard);
