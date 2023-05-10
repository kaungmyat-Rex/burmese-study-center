import React, { useState } from "react";
import { NavVersion } from "../component/Nav";
import Sidenav from "../component/sidenav/Sidenav";
import mentordata from "../component/fakedata";
import { TbTargetArrow } from "react-icons/tb";
import { TiLightbulb } from "react-icons/ti";
import { AiOutlineTrophy } from "react-icons/ai";
import Footer from "../component/footer/Footer";
import useScroll from "../component/scrollTop";
import { ButtonMentor } from "../component/button/ButtonFeedback";
import { MentorModel } from "../component/models/Models";
import aboutImg from "../img/aboutImg.jpg";
const About = ({ scroll, openNav, setopenNav }) => {
  useScroll();

  const [mentorModel, setmentorModel] = useState(false);
  const [mentorId, setMentorId] = useState(null);

  const openMentorModel = (id) => {
    setmentorModel(true);
    setMentorId(id);
  };

  return (
    <>
      <NavVersion scroll={scroll} openNav={openNav} setopenNav={setopenNav} />
      <Sidenav openNav={openNav} setopenNav={setopenNav} />
      <MentorModel
        mentorId={mentorId}
        setmentorModel={setmentorModel}
        mentorModel={mentorModel}
      />
      <div className="about-section">
        <div className="about-border">
          <div className="about-main">
            <h4
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              ABOUT US
            </h4>
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
      <div className="about-story-section">
        <div className="about-story-border">
          <div className="about-story-main">
            <div className="about-story-img">
              <img src={aboutImg} alt="" />
            </div>
            <div className="about-story-text">
              <h4>Our Story</h4>
              <p>
                The Burma Study Center in Chiang Mai is a non-profit
                organization. Burma Study Center provides free education for the
                people of Burma/Myanmar, as well as information and research
                materials about the country for members of the international
                community.
                <br></br>Since welcoming its first members in 2010, Burma Study
                Center has maintained the largest public, English-language
                collection of books, reports, periodicals, and films about Burma
                in Thailand. It has become a vital community resource through
                its partnerships with a number of universities, media groups,
                and organizations. Members have conducted and published
                research, participated in academic events and community forums,
                and led numerous campaigns advocating for genuine political
                reform and respect for the human rights of people of all
                ethnicities and religions in Burma.
                <br></br> In addition, more than 300 young migrant students in
                Chiang Mai have completed courses in English, health, and
                computers at Burma Study Center. Librarians at Burma Study
                Center are often asked to recommend resources on certain topics
                or issues. We present this brochure below, highlighting what we
                feel are some of the most interesting, useful, and engaging
                Burma-related books, films, and websites. All of the books and
                films featured in the brochure are available on loan to our
                members at the Chiang Mai Burma Study Center.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mentor-section">
        <h4 className="mentor-title">Staff</h4>
        <div className="mentor-border">
          <div className="mentor-main">
            {mentordata.map((e) => (
              <div className="mentor-list" key={e.id}>
                <div className="mentor-list-body">
                  <img className="mentor-list-image" src={e.imageNoBg} alt="" />
                  <div className="mentor-list-info">
                    <h4 className="mentor-list-name">{e.name}</h4>
                    <p className="mentor-list-bar"></p>
                    <p className="mentor-list-carrier">{e.carrier}</p>
                    {/* <p className="mentor-list-gmail">{e.gmail}</p> */}
                    <p className="mentor-list-info">
                      {e.info.slice(0, 100)} ......
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => openMentorModel(e.id)}
                  style={{ marginBottom: "15px", marginTop: "0px" }}
                >
                  <ButtonMentor mentorMore={"See More"} />
                </div>
              </div>
            ))}

            {/* <div className="first-mentor">
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
            </div> */}
          </div>
        </div>
      </div>

      <div className="about-vision-section">
        <h4 className="about-vision-title" data-aos="fade-up">
          Vision & Mission
        </h4>
        <div className="about-vision-border">
          <div className="about-vision-main">
            <div
              className="vision-one"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <TbTargetArrow className="vision-icon-one" />
              <h4 className="vision-one-title">Our Mission</h4>
              <p className="vision-bar"></p>
              <p className="vision-text-one">
                To provide accessible and quality education for migrants and
                displaced persons, empowering them with the knowledge and skills
                they need to rebuild their lives and contribute to their
                communities.
              </p>
            </div>
            <div
              className="vision-two"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <TiLightbulb className="vision-icon-two" />
              <h4 className="vision-two-title">Our Vision</h4>
              <p className="vision-bar"></p>
              <p className="vision-text-two">
                To become a leading platform for migrant education, creating a
                global community of learners who have access to innovative and
                personalized learning experiences
              </p>
            </div>
            <div
              className="vision-three"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <AiOutlineTrophy className="vision-icon-three" />
              <h4 className="vision-three-title">Our Values</h4>
              <p className="vision-bar"></p>
              <p className="vision-text-three">
                promoting diversity and inclusivity by providing accessible
                education to people of all backgrounds and circumstances.
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
