import React from "react";
import "./Sidenav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { RiMiniProgramLine } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";

const Sidenav = ({ openNav, setopenNav }) => {
  return (
    <div className={`sidenav-section ${openNav ? "sidenav-section-show" : ""}`}>
      <div className="sidenav-border">
        <div className="sidenav-main">
          <p>
            <AiOutlineHome className="nav-icon" />
            <span>Home</span>
          </p>
          <p>
            <FiAlertCircle className="nav-icon" />
            <span>About Us</span>
          </p>
          <p>
            <RiMiniProgramLine className="nav-icon" />
            <span>Program</span>
          </p>
          <p>
            <MdOutlineLibraryBooks className="nav-icon" />
            <span>Library</span>
          </p>
          <p>
            <AiOutlineContacts className="nav-icon" />
            <span>Contact Us</span>
          </p>
          <p>
            <MdOutlineFeedback className="nav-icon" />
            <span>Feedbacks</span>
          </p>
          <h4 className="sidenav-donate">Donate Us</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
