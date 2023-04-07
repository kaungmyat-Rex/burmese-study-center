import React, { useEffect, useState } from "react";
import { NavVersion } from "../component/Nav";
import { BsArrowDown } from "react-icons/bs";
import { BsChatRightQuote } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";
import bsc from "../img/about.jpg";
import eventOne from "../img/e2.JPG";
import eventTwo from "../img/e1.JPG";
import eventThree from "../img/e3.JPG";
import {
  ButtonFeedback,
  ButtonFeedbacktwo,
  ButtonFeedbackthree,
} from "../component/button/ButtonFeedback";
import Footer from "../component/footer/Footer";
import Sidenav from "../component/sidenav/Sidenav";
import useScroll from "../component/scrollTop";
import { db } from "../component/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Home = ({ scroll, openNav, setopenNav }) => {
  const [feedback, setFeedback] = useState([]);
  const userCollection = collection(db, "reviews");
  useScroll();

  //UseEffect for get reviews from firebase
  useEffect(() => {
    const getreviews = async () => {
      const data = await getDocs(userCollection);

      setFeedback(data.docs.map((e) => ({ ...e.data(), id: e.id })));
    };
    getreviews();
  }, []);

  return (
    <>
      <div className="bg-section">
        <NavVersion scroll={scroll} openNav={openNav} setopenNav={setopenNav} />

        <Sidenav openNav={openNav} setopenNav={setopenNav} />

        <div className="bg-border">
          <div className="bg-main">
            <h4>BURMA STUDY CENTER</h4>
            <p>
              Migrate Educatiom and Empowerment . Public Library . Chiang Mai,
              Thailand
            </p>
            <button>Contact Us</button>
            <a href="#provide">
              <BsArrowDown className="arrow-down" />
            </a>
          </div>
        </div>
      </div>
      <div className="provide-section" id="provide">
        <div className="provide-border">
          <div className="provide-main">
            <div className="pv-text-gp">
              <h4>
                What we're <span>provide</span>
              </h4>
              <p>
                <span style={{ fontWeight: "900" }}>Burma Study Center</span>{" "}
                provides free education and community-building programs for
                migrants and refugees from Burma/Myanmar, as well as information
                and research materials about the country for members of the
                international community.
              </p>
              <div className="pv-btn-div">
                <p className="example_f" target="_blank" rel="nofollow">
                  <span>Learn More</span>
                </p>
              </div>
            </div>
            <div className="provide-img">
              <img src={bsc} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="event-section">
        <p className="event-text">EVENTS</p>
        <h4 className="event-title">Latest campaign</h4>
        <div className="event-border">
          <div className="event-main">
            <div className="event-one">
              <img className="eOne-img" src={eventOne} alt="" />

              <div className="eOne-text">
                <h4>We Study Together</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  nulla laudantium veritatis sunt pariatur nostrum sint numquam
                  iure rerum, perspiciatis, earum excepturi minima voluptates
                  esse labore quod? Magnam, assumenda labore.
                </p>
              </div>
            </div>
            <div className="event-two">
              <img className="eTwo-img" src={eventTwo} alt="" />

              <div className="eTwo-text">
                <h4>We Study Safe</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  nulla laudantium veritatis sunt pariatur nostrum sint numquam
                  iure rerum, perspiciatis, earum excepturi minima voluptates
                  esse labore quod? Magnam, assumenda labore.
                </p>
              </div>
            </div>
            <div className="event-three">
              <img className="eThree-img" src={eventThree} alt="" />

              <div className="eThree-text">
                <h4>We Study Happly</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  nulla laudantium veritatis sunt pariatur nostrum sint numquam
                  iure rerum, perspiciatis, earum excepturi minima voluptates
                  esse labore quod? Magnam, assumenda labore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "40px" }}>
          <ButtonFeedbackthree moreevent={"View More Event"} />
        </div>
      </div>
      <div className="feedback-section">
        <p className="testimontal">TESTIMONIALS</p>
        <h4 className="feedback-title">Student Feedbacks</h4>
        <div className="feedback-border">
          <div className="feedback-main">
            {feedback.slice(-3).map((e) => (
              <div className="home-fb" key={e.id}>
                <div className="fb-title">
                  <span className="fb-icon">
                    {e.rating === "Amazing" ? (
                      <BsEmojiSunglasses className="fb-icon" />
                    ) : e.rating === "Good" ? (
                      <BsEmojiSmile className="fb-icon" />
                    ) : (
                      <BsEmojiFrown className="fb-icon" />
                    )}
                  </span>
                  <p className="fb-rate">{e.rating}</p>
                </div>
                <p className="fb-date">{e.uploadDate}</p>
                <p className="fb-info">{e.info.slice(0, 100)}...see more</p>
                <span className="fb-author">{e.name}</span>
              </div>
            ))}
            {/* <div className="testi-one">
              <h4>
                <BsChatRightQuote className="testi-icon" />
                <span>Amazing</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quibusdam culpa assumenda, aperiam quis veniam,
                velit animi architecto veritatis ullam iusto asperiores aut,
                consectetur blanditiis autem corrupti magni beatae! Iure!
              </p>
              <p style={{ fontSize: "1.2rem" }}>John Snow</p>
            </div>
            <div className="testi-one">
              <h4>
                <BsChatRightQuote className="testi-icon" />
                <span>Professional</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quibusdam culpa assumenda, aperiam quis veniam,
                velit animi architecto veritatis ullam iusto asperiores aut,
                consectetur blanditiis autem corrupti magni beatae! Iure!
              </p>
              <p style={{ fontSize: "1.2rem" }}>Peter Parkar</p>
            </div>
            <div className="testi-one">
              <h4>
                <BsChatRightQuote className="testi-icon" />
                <span>experience</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quibusdam culpa assumenda, aperiam quis veniam,
                velit animi architecto veritatis ullam iusto asperiores aut,
                consectetur blanditiis autem corrupti magni beatae! Iure!
              </p>
              <p style={{ fontSize: "1.2rem" }}>Forrest Gump</p>
            </div> */}
          </div>
        </div>
        <div className="feedback-btn">
          <div>
            <ButtonFeedback viewmore={"View Student Reviews"} />
          </div>
          <div>
            <ButtonFeedbacktwo giveFeed={"Write Your Reviews"} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
