import React from "react";
import "./WesternEuropeList.css";

function WesternEuropeList() {
  return (
    <div className="western-europe-list-container">
      <ul className="western-europe-list">
        <li>
          <a href="/france">France</a>
        </li>
        <li>
          <a href="/spain">Spain</a>
        </li>
        <li>
          <a href="/portugal">Portugal</a>
        </li>
        <li>
          <a href="/italy">Italy</a>
        </li>
        <li>
          <a href="/switzerland">Switzerland</a>
        </li>
        <li>
          <a href="/germany">Germany</a>
        </li>
        <li>
          <a href="/netherlands">Netherlands</a>
        </li>
        <li>
          <a href="/united-kingdom">United Kingdom</a>
        </li>
      </ul>
    </div>
  );
}

export default WesternEuropeList;
