import React, { useState, useEffect } from "react";
import "./UniversitySearch.css";

function UniversitySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=United+States&name=${searchTerm}`
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
          placeholder="Search for a university..."
          className="search-box"
        />
      </form>
      <table className="university-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((university) => (
            <tr key={university.id}>
              <td>{university.name}</td>
              <td>{university.country}</td>
              <ul className="url-list">
                {university.domains.map((domain) => (
                  <li key={domain}>{domain}</li>
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
