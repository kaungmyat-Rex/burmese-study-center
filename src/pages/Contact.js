import React, { useRef, useState } from "react";
import { NavVersion } from "../component/Nav";
import Sidenav from "../component/sidenav/Sidenav";
import { SuccessModel } from "../component/models/Models";
import Footer from "../component/footer/Footer";
import useScroll from "../component/scrollTop";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { WarningModel } from "../component/models/Models";
const Contact = ({ scroll, openNav, setopenNav }) => {
  const form = useRef();
  const [openModel, setOpenModel] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [warningModel, setWarningModel] = useState(false);
  const [warningtext, setWarningtext] = useState("");
  useScroll();

  const timeOut = () => {
    setOpenModel(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handelEmail = (e) => {
    setEmail(e.target.value);
    setValidEmail(validateEmail(e.target.value));
  };

  const sendEmail = () => {
    if (email === "") {
      setWarningModel(true);
      setWarningtext("empty email");
    } else if (name === "") {
      setWarningModel(true);
      setWarningtext("empty name");
    } else if (validEmail === false) {
      setWarningModel(true);
      setWarningtext("wrong email");
    } else {
      emailjs
        .sendForm(
          "service_uxr4nry",
          "template_wmnkznc",
          form.current,
          "N5Rft8vLfPeU2rByh"
        )
        .then(
          (result) => {
            setOpenModel(true);
            setTimeout(timeOut, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <NavVersion scroll={scroll} openNav={openNav} setopenNav={setopenNav} />
      <Sidenav openNav={openNav} setopenNav={setopenNav} />
      <WarningModel
        warningModel={warningModel}
        setWarningModel={setWarningModel}
        warningtext={warningtext}
      />
      <div className="contact-section">
        <div className="contact-border">
          <div className="contact-main">
            <h4
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              CONTACT US
            </h4>
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
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <MdPhoneIphone className="contact-icon" />
                <span>093 625 4182</span>
              </p>

              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <MdOutlineEmail className="contact-icon" />
                <span>chiangmai@burmastudy.org</span>
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                <MdOutlineLocationOn className="contact-icon" />
                <span>
                  16/8 Nimmanhaemin Road, Soi 13, Chiang Mai, Thailand.
                </span>
              </p>
            </div>
            <form
              className="input"
              ref={form}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <h4>Send us a message</h4>

              <div className="nameEmail">
                <input
                  type="text"
                  name="user_name"
                  placeholder="  Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="  Email"
                  onChange={(e) => handelEmail(e)}
                  value={email}
                />
              </div>
              <input className="subject" type="text" placeholder="  Subject" />
              <textarea
                name="message"
                placeholder="  
              
                Message"
              ></textarea>
              <button
                className="form-btn-div"
                onClick={() => sendEmail()}
                type="button"
              >
                <p className="example_f" target="_blank" rel="nofollow">
                  <span>Send Message!</span>
                </p>
              </button>
            </form>
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
      <SuccessModel successModel={openModel} content={"Form"} />
    </>
  );
};

export default Contact;
