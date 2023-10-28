import React from "react";
import "./Opinion.css";
import Star from "../Star";

function Opinion({ opinion, transform }) {
  let stars = [];

  for (let i = 0; i < opinion.stars; i++) {
    stars.push(<Star />);
  }
  return (
    <div
      className="opinion"
      style={{ transform: "translateX(" + transform + "%)" }}
    >
      <div>{opinion.name}</div>
      <div>{stars}</div>
      <div>{opinion.date}</div>
      <div>{opinion.content}</div>
    </div>
  );
}

export default Opinion;
