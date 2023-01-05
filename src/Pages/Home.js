import React from "react";
import UniversitySearch from "../Components/UniversitySearch";
import FourSquareGrid from "../Components/FourSquareGrid";
import WesternEuropeList from "../Components/WesternEuropeList";

function Home() {
  return (
    <div className="main-container">
      <WesternEuropeList />
      <UniversitySearch />
    </div>
  );
}

export default Home;
