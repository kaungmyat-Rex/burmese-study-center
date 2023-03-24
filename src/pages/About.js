import React from "react";
import { NavVersion } from "../component/Nav";
import Sidenav from "../component/sidenav/Sidenav";
import aboutImg from "../img/story.JPG";
import { TbTargetArrow } from "react-icons/tb";
import { TiLightbulb } from "react-icons/ti";
import { AiOutlineTrophy } from "react-icons/ai";
import Footer from "../component/footer/Footer";
import useScroll from "../component/scrollTop";
import mentorOne from "../img/Garrett-png.png";
import mentorTwo from "../img/Sai-png.png";

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
      {/* <div className="about-story-section">
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
      </div> */}

      <div className="mentor-section">
        <h4 className="mentor-title">Our Mentor</h4>
        <div className="mentor-border">
          <div className="mentor-main">
            <div className="first-mentor">
              <div className="mentor-img-div">
                <img src={mentorOne} alt="" className="mentor-img" />
              </div>
              <div className="first-mentor-info">
                <h4 className="mentor-name">Garrett Kostin</h4>
                <p className="mentor-info">
                  Garrett Kostin is the founder and director of Burma Study
                  Center. Originally from Seattle, Washington, USA, Garrett has
                  nearly 20 years of teaching experience and has been working
                  closely with marginalized communities of Myanmar/Burma since
                  2009. Garrett earned his Master of Social Work (MSW) degree
                  from the University of Washington and holds certificates in
                  Teaching English as a Foreign Language from both Seattle
                  Pacific University and Chiang Mai University. Garrett
                  currently teaches Level 3 at BSC.
                </p>
              </div>
            </div>
            <div className="second-mentor">
              <div className="mentor-img-div">
                <img src={mentorTwo} alt="" className="mentor-img" />
              </div>
              <div className="second-mentor-info">
                <h4 className="mentor-name">Sai Sailern (Beam)</h4>
                <p className="mentor-info">
                  Sailern (Beam) is a full-time teacher at Burma Study Center.
                  Born in Hsipaw, northern Shan State, Beam migrated to Thailand
                  in 2012 after five years of teaching displaced students on the
                  Thai-Burma border. Beam teaches Level 2 in the evening, as
                  well as individual students in the afternoons. In his free
                  time, Beam enjoys singing, playing piano and guitar, and
                  gardening. Beam says: "I see the importance of English for
                  migrant students because English can help them create new
                  opportunities in their personal and professional lives."
                </p>
              </div>
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
