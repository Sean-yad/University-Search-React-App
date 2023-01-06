import React, { useState, useEffect } from "react";
import "./UniversitySearch.css";

function UniversitySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=&name=${searchTerm}&limit=30`
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
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.slice(0, 30).map((university) => (
            <tr key={university.id}>
              <td>{university.name}</td>
              <td>{university.country}</td>
              <ul className="url-list">
                {university.domains.map((domain) => (
                  <li key={domain}>
                    <a href={`http://${domain}`} target="_blank">
                      {domain}
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
