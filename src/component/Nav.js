import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export const Nav = ({ scroll, openNav, setopenNav }) => {
  return (
    <div className={`nav-section ${scroll ? "nav-section-bg" : ""}`}>
      <div className="nav-main">
        <div className="nav-logo">
          <h4>Logo</h4>
        </div>
        <div className={`nav-list ${scroll ? "nav-list-color" : ""}`}>
          {" "}
          <p className="home">
            {" "}
            <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
              Home
            </Link>
          </p>{" "}
          <p className="about">
            {" "}
            <Link
              to={"/about"}
              style={{ color: "unset", textDecoration: "none" }}
            >
              About Us
            </Link>
          </p>
          <p className="program">
            {" "}
            <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
              Program
            </Link>
          </p>
          <p className="library">
            {" "}
            <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
              Library
            </Link>
          </p>
          <p className="contact">
            {" "}
            <Link
              to={"/contact"}
              style={{ color: "unset", textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </p>
          <p className="feedback">
            {" "}
            <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
              Feedbacks
            </Link>
          </p>
          <p className="donate">Donate</p>
        </div>
        <div className="hamburgar">
          <Hamburger color="#252525" toggle={setopenNav} toggled={openNav} />
        </div>
      </div>
    </div>
  );
};

export const NavVersion = ({ scroll, openNav, setopenNav }) => {
  return (
    <div className="nav-section-version">
      <div className="nav-main">
        <div className="nav-logo">
          <h4>Logo</h4>
        </div>
        <div className="nav-list-version">
          <p className="home">
            {" "}
            <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
              Home
            </Link>
          </p>{" "}
          <p className="about">
            {" "}
            <Link
              to={"/about"}
              style={{ color: "unset", textDecoration: "none" }}
            >
              About Us
            </Link>
          </p>
          <p className="program">
            {" "}
            <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
              Program
            </Link>
          </p>
          <p className="library">
            {" "}
            <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
              Library
            </Link>
          </p>
          <p className="contact">
            {" "}
            <Link
              to={"/contact"}
              style={{ color: "unset", textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </p>
          <p className="feedback">
            {" "}
            <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
              Feedbacks
            </Link>
          </p>
          <p className="donate">Donate</p>
        </div>
        <div className="hamburgar">
          <Hamburger color="#252525" toggle={setopenNav} toggled={openNav} />
        </div>
      </div>
    </div>
  );
};
