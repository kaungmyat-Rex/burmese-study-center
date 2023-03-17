import React from "react";
import { NavVersion } from "../component/Nav";
import Sidenav from "../component/sidenav/Sidenav";
import aboutImg from "../img/story.JPG";
import { TbTargetArrow } from "react-icons/tb";
import { TiLightbulb } from "react-icons/ti";
import { AiOutlineTrophy } from "react-icons/ai";
import Footer from "../component/footer/Footer";
import useScroll from "../component/scrollTop";

const About = ({ scroll, openNav, setopenNav }) => {
  useScroll();
  return (
    <>
      <NavVersion scroll={scroll} openNav={openNav} setopenNav={setopenNav} />
      <Sidenav openNav={openNav} setopenNav={setopenNav} />
      <div className="about-section">
        <div className="about-border">
          <div className="about-main">
            <h4>ABOUT US</h4>
          </div>
        </div>
      </div>
      <div className="about-story-section">
        <div className="about-story-border">
          <div className="about-story-main">
            <div className="about-story-img">
              <img src={aboutImg} alt="" />
            </div>
            <div className="about-story-text">
              <h4>Our Story</h4>
              <p>
                Since welcoming its first members in 2010, Burma Study Center
                has maintained the largest public, English-language collection
                of books, reports, periodicals, and films about Burma in
                Thailand. It has become a vital community resource through its
                partnerships with a number of universities, media groups, and
                organizations. Members have conducted and published research,
                participated in academic events and community forums, and led
                numerous campaigns advocating for genuine political reform and
                respect for the human rights of people of all ethnicities and
                religions in Burma.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-vision-section">
        <h4 className="about-vision-title">Vision & Mission</h4>
        <div className="about-vision-border">
          <div className="about-vision-main">
            <div className="vision-one">
              <TbTargetArrow className="vision-icon-one" />
              <h4 className="vision-one-title">Our Mission</h4>
              <p className="vision-bar"></p>
              <p className="vision-text-one">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt dolores laboriosam ex quasi, saepe maxime dolore
                suscipit, mollitia r
              </p>
            </div>
            <div className="vision-two">
              <TiLightbulb className="vision-icon-two" />
              <h4 className="vision-two-title">Our Vision</h4>
              <p className="vision-bar"></p>
              <p className="vision-text-two">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt dolores laboriosa
              </p>
            </div>
            <div className="vision-three">
              <AiOutlineTrophy className="vision-icon-three" />
              <h4 className="vision-three-title">Our Values</h4>
              <p className="vision-bar"></p>
              <p className="vision-text-three">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt dolores laboriosam ex quasi, saepe maxime dolore
                suscipit, mollitia laboriosam ex quasi, saepe
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
