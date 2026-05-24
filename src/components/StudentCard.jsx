import React from "react";
import Badge from "./Badge";
import StatBar from "./StatBar";

const StudentCard = ({ student, getGrade }) => {
  if (!student) return null;
  return (
    <div className={`student-card ${!student.isActive ? "inactive" : ""}`}>
      <img
        src={student.avatar}
        alt={`${student.firstName} ${student.lastName}`}
        style={{ width: "200px", borderRadius: "50%", margin: "1rem" }}
      />
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <div className="badgeContainer">
        <Badge label={student.track} type="track" />
        <Badge label={student.isActive ? "Active" : "Inactive"} type="status" />
        <Badge label={`Grade: ${getGrade(student.score)}`} type="grade" />
      </div>
      <StatBar score={student.score} />
      {student.skills?.length > 0 ? (
        <p>
          {student.skills.map((skill) => (
            <span key={skill} className="skill">
              {skill}
            </span>
          ))}
        </p>
      ) : (
        <p>No skill listed yet</p>
      )}
    </div>
  );
};

export default StudentCard;
