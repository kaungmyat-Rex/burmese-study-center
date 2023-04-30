import React from "react";
import "./Sidenav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { RiMiniProgramLine } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";

import { Link } from "react-router-dom";

const Sidenav = ({ openNav, setopenNav }) => {
  const closeNav = () => {
    setopenNav(false);
  };

  return (
    <div className={`sidenav-section ${openNav ? "sidenav-section-show" : ""}`}>
      <div className="sidenav-border">
        <div className="sidenav-main">
          <Link
            style={{
              width: "100%",
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            to={"/"}
            onClick={() => closeNav()}
          >
            <p>
              <AiOutlineHome className="nav-icon" />
              <span>Home</span>
            </p>
          </Link>
          <Link
            style={{
              width: "100%",
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            to={"/about"}
            onClick={() => closeNav()}
          >
            {" "}
            <p>
              <FiAlertCircle className="nav-icon" />
              <span>About Us</span>
            </p>
          </Link>
          <Link
            style={{
              width: "100%",
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            to={"/"}
            onClick={() => closeNav()}
          >
            {" "}
            <p>
              <RiMiniProgramLine className="nav-icon" />
              <span>Programs</span>
            </p>
          </Link>
          <a
            href="https://catalog9.burmastudy.org/"
            target="_blank"
            style={{
              width: "100%",
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onClick={() => closeNav()}
          >
            {" "}
            <p>
              <MdOutlineLibraryBooks className="nav-icon" />
              <span>Library Catalog</span>
            </p>
          </a>
          <Link
            style={{
              width: "100%",
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            to={"/contact"}
            onClick={() => closeNav()}
          >
            {" "}
            <p>
              <AiOutlineContacts className="nav-icon" />
              <span>Contact Us</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
