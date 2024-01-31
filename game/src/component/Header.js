import React from "react";

export default function Header() {
  return (
    <div className="heading">
      <h1 className="title">2048</h1>
      <div className="scores-container">
        <div className="score-container">0</div>
        <div className="best-container">내가 최고</div>
      </div>
    </div>
  );
}
