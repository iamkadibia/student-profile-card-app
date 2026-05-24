import React from "react";

function StatBar({ score, label = "Score" }) {
  const barColor =
    score >= 80 ? "#4caf50" : score >= 60 ? "#ff9800" : "#f44336";
  return (
    <div className="statBar">
      <p style={{ fontWeight: "bold" }}>{label}:</p>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${score}%`, backgroundColor: barColor }}
        ></div>
      </div>
      <p>{score}%</p>
    </div>
  );
}

export default StatBar;
