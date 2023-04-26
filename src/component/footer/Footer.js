import React from "react";
import "./Footer.css";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-border">
          <div className="footer-main">
            <h4 className="footer-title">BURMA STUDY CENTER</h4>
            <div className="footer-menu">
              <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
                <p>HOME</p>
              </Link>
              <Link
                to={"/about"}
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                <p>ABOUT</p>
              </Link>
              <Link
                to={"/program"}
                style={{ color: "white", textDecoration: "none" }}
              >
                <p>PROGRAM</p>
              </Link>
              <Link
                to={"/library"}
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                <p>LIBRARY</p>
              </Link>
              <Link
                to={"/contact"}
                style={{ color: "white", textDecoration: "none" }}
              >
                <p style={{ borderRight: "0px" }}>CONTACT</p>
              </Link>
            </div>
            <div className="footer-bar"></div>
            <div className="policy-main">
              {/* <div className="policy-covid">
                <h4>Covid-19 Update</h4>
                <div className="policy-bar"></div>
                <p>
                  Burma Study Center follows Thai government regulations for
                  COVID-19 protocols and precautions. BSC will resume on-site,
                  in-person classes in August 2022. All students for on-site
                  classes are required to be fully vaccinated against COVID-19.
                </p>
              </div> */}
              <div className="policy-student" data-aos="fade-up">
                <h4>Student Policies</h4>
                <div className="policy-bar"></div>
                <p>
                  Read our Student Policy documents in English and other
                  language versions.
                </p>
              </div>
              <div className="policy-library" data-aos="fade-up">
                <h4>Library Catalog</h4>
                <div className="policy-bar"></div>
                <p>
                  Browse and search our online catalog of resources available
                  through the library.
                </p>
              </div>
              <div className="policy-contact" data-aos="fade-up">
                <h4>Contact Us</h4>
                <div className="policy-bar"></div>
                <p>
                  <MdPhoneIphone className="footer-icon" />
                  <span>093 625 4182</span>
                </p>
                <p>
                  <MdOutlineLocationOn className="footer-icon2" />
                  <span>
                    16/8 Nimmanhaemin Road, Soi 13, Chiang Mai, Thailand.
                  </span>
                </p>
                <p>
                  <MdOutlineEmail className="footer-icon" />
                  <span>chiangmai@burmastudy.org</span>
                </p>
              </div>
            </div>
            <div className="social-icon">
              <FaFacebookF className="facebook" />
              {/* <FaInstagram className="insta" />
              <FaTwitter className="twitar" /> */}
              <MdOutlineEmail className="mail" />
            </div>
          </div>
        </div>
        <p className="copyright">
          COPYRIGHT © 2023 BURMA STUDY CENTER. ALL RIGHTS RESERVED.
        </p>
      </div>
    </>
  );
};

export default Footer;
