import React from "react";
import Nav from "../component/Nav";
const Home = ({ scroll }) => {
  return (
    <div className="bg-section">
      <Nav scroll={scroll} />
      <div className="bg-border">
        <div className="bg-main">
          <h4>BURMA STUDY CENTER</h4>
          <p>
            Migrate Educatiom and Empowerment . Public Library . Chiang Mai,
            Thailand
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
