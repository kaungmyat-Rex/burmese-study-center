import React from "react";
import "./Sidenav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { RiMiniProgramLine } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";
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
              <span>Program</span>
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
              <MdOutlineLibraryBooks className="nav-icon" />
              <span>Library</span>
            </p>
          </Link>
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
              <MdOutlineFeedback className="nav-icon" />
              <span>Feedbacks</span>
            </p>
          </Link>
          <h4 className="sidenav-donate">Donate Us</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
