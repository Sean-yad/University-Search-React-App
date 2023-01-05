import React from "react";
import "./FourSquareGrid.css";

function FourSquareGrid() {
  return (
    <div className="four-square-grid">
      <div className="square">
        <a href="/link1">
          <h2>Square 1</h2>
          <p>Description of Square 1</p>
        </a>
      </div>
      <div className="square">
        <a href="/link2">
          <h2>Square 2</h2>
          <p>Description of Square 2</p>
        </a>
      </div>
      <div className="square">
        <a href="/link3">
          <h2>Square 3</h2>
          <p>Description of Square 3</p>
        </a>
      </div>
      <div className="square">
        <a href="/link4">
          <h2>Square 4</h2>
          <p>Description of Square 4</p>
        </a>
      </div>
    </div>
  );
}

export default FourSquareGrid;
