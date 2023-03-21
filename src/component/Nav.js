import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import logo from "../img/log-bsc.png";
import logoBlack from "../img/bsc-blue-logo.png";

export const Nav = ({ scroll, openNav, setopenNav }) => {
  return (
    <div className={`nav-section ${scroll ? "nav-section-bg" : ""}`}>
      <div className="nav-main">
        <div className="nav-logo">
          {scroll ? (
            <img className="nav-black-logo" src={logoBlack} alt="logo-white" />
          ) : (
            <img className="nav-white-logo" src={logo} alt="logo" />
          )}
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
          <Hamburger
            color={`${scroll ? "#252525" : "#ffffff"}`}
            toggle={setopenNav}
            toggled={openNav}
          />
        </div>
      </div>
    </div>
  );
};

export const NavVersion = ({ scroll, openNav, setopenNav }) => {
  return (
    <div
      className={`nav-section-version ${
        scroll ? "nav-section-version-show" : ""
      }`}
    >
      <div className="nav-main">
        <div className="nav-logo">
          <img className="nav-black-logo" src={logoBlack} alt="logo-white" />
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
