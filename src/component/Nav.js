import React from "react";
import { Divide as Hamburger } from "hamburger-react";

const Nav = ({ scroll, openNav, setopenNav }) => {
  return (
    <div className={`nav-section ${scroll ? "nav-section-bg" : ""}`}>
      <div className="nav-main">
        <div className="nav-logo">
          <h4>Logo</h4>
        </div>
        <div className={`nav-list ${scroll ? "nav-list-color" : ""}`}>
          <p className="home">Home</p>
          <p className="about">About Us</p>
          <p className="program">Program</p>
          <p className="library">Library</p>
          <p className="contact">Contact Us</p>
          <p className="feedback">Feedbacks</p>
          <p className="donate">Donate</p>
        </div>
        <div className="hamburgar">
          <Hamburger color="#252525" toggle={setopenNav} toggled={openNav} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
