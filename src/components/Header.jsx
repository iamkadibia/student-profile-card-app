import React from "react";

const Header = ({
  title = "Student Roaster",
  studentCount = 0,
  averageScore = 0,
}) => {
  return (
    <header style={{ margin: "2rem" }}>
      <h2 className="title">{title}</h2>
      <div className="class-stats">
        <span>{studentCount} Students Enrolled |</span>
        <span>Class Average: {averageScore}%</span>
      </div>
    </header>
  );
};

export default Header;
