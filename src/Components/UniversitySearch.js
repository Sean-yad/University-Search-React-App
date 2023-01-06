import React, { useState, useEffect } from "react";
import "./UniversitySearch.css";

function UniversitySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=&name=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data);
    }

    fetchData();
  }, [searchTerm]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="university-search">
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search from over 20000 universities across the globe..."
          className="search-box"
        />
      </form>
      <table className="university-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Alpha 2</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.slice(0, 20).map((university) => (
            <tr key={university.id}>
              <td>{university.name}</td>
              <td>{university.country}</td>
              <td>{university.alpha_two_code}</td>
              <ul className="url-list">
                {university.web_pages.map((web_pages) => (
                  <li key={web_pages}>
                    <a href={`http://${web_pages}`} target="_blank">
                      {web_pages}
                    </a>
                  </li>
                ))}
              </ul>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UniversitySearch;
