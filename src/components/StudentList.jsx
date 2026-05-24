import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, title = "All students", children, getGrade }) {
  return (
    <div>
      <h2>{title}</h2>

      <div className="grid-container">
        {students.length === 0 ? (
          <p className="no-student">No students to display</p>
        ) : (
          students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              getGrade={getGrade}
            />
          ))
        )}
      </div>

      {children}
    </div>
  );
}

export default StudentList;
