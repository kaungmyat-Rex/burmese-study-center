import React from "react";
import { NavVersion } from "../component/Nav";
import Sidenav from "../component/sidenav/Sidenav";

import Footer from "../component/footer/Footer";
import useScroll from "../component/scrollTop";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
const Contact = ({ scroll, openNav, setopenNav }) => {
  useScroll();
  return (
    <>
      <NavVersion scroll={scroll} openNav={openNav} setopenNav={setopenNav} />
      <Sidenav openNav={openNav} setopenNav={setopenNav} />
      <div className="contact-section">
        <div className="contact-border">
          <div className="contact-main">
            <h4>CONTACT US</h4>
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="form-border">
          <div className="form-main">
            <div className="contact-info">
              <h4>Contact With</h4>
              <p className="contact-info-text">
                Make an appointment to visit, please contact us or if you have
                other request or question, don’t hesitate to use the form.
              </p>
              <p>
                <MdPhoneIphone className="contact-icon" />
                <span>+656-8982749</span>
              </p>

              <p>
                <MdOutlineEmail className="contact-icon" />
                <span>chiangmai@burmastudy.org</span>
              </p>
              <p>
                <MdOutlineLocationOn className="contact-icon" />
                <span>
                  16/8 Nimmanhaemin Road, Soi 13, Chiang Mai, Thailand.
                </span>
              </p>
            </div>
            <div className="input">
              <h4>Send us a message</h4>

              <div className="nameEmail">
                <input type="text" placeholder="  Name" />
                <input type="text" placeholder="  Email" />
              </div>
              <input className="subject" type="text" placeholder="  Subject" />
              <textarea
                placeholder="  
              
                Message"
              ></textarea>
              <div className="form-btn-div">
                <p className="example_f" target="_blank" rel="nofollow">
                  <span>Send Message!</span>
                </p>
              </div>
            </div>
          </div>
          <div className="map">
            {/* <MapContainer /> */}
            <iframe
              title="myFrame"
              className="iframe-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d944.2654383144312!2d98.9688304!3d18.7954011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a884c73fc1b%3A0x607a61c23c8f6770!2sBurma%20Study%20Center!5e0!3m2!1sen!2smm!4v1678820636008!5m2!1sen!2smm"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
