import React from "react";

const Nav = ({ scroll }) => {
  return (
    <div className={`nav-section ${scroll ? "nav-section-bg" : ""}`}>
      <div className="nav-main">
        <div className="nav-logo">
          <h4>Logo</h4>
        </div>
        <div className={`nav-list ${scroll ? "nav-list-color" : ""}`}>
          <p className="home">Home</p>
          <p className="about">About</p>
          <p className="program">Program</p>
          <p className="library">Library</p>
          <p className="contact">Contact</p>
          <p className="feedback">Feedback</p>
          <p className="donate">Donate</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
