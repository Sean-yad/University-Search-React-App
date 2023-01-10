import React, { useState, useEffect } from "react";
import "./UniversitySearch.css";

function UniversitySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://universities.hipolabs.com/search?${searchCountry}&name=${searchTerm}&limit=30`
      );
      const data = await response.json();
      setSearchResults(data);
    }

    fetchData();
  }, [searchTerm, searchCountry]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleCountryChange(event) {
    setSearchCountry(`country=${event.target.value}`);
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
        <label htmlFor="country">Country: </label>
        <select
          id="country"
          onChange={handleCountryChange}
          className="custom-select"
        >
          <option value="">All</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Italy">Italy</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Spain">Spain</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
          <option value="Finland">Finland</option>
          <option value="Iran">Iran</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Turkey">Turkey</option>
          <option value="Norway">Norway</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Romania">Romania</option>
          <option value="Malaysia">Malaysia</option>
        </select>
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
