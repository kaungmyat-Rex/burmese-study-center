import React, { useState, useEffect } from "react";
import { NavVersion } from "../component/Nav";
import Sidenav from "../component/sidenav/Sidenav";
import fakedata from "../component/fakedata";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";
import {
  ButtonFeedback,
  ButtonFeedbacktwo,
} from "../component/button/ButtonFeedback";
import Footer from "../component/footer/Footer";
import useScroll from "../component/scrollTop";
import { db } from "../component/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const Feedback = ({ scroll, openNav, setopenNav, datareviews }) => {
  const userCollection = collection(db, "reviews");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [info, setInfo] = useState("");
  const [datafeedback, setDatafeedback] = useState([]);
  const [shouldupdate, setshouldupdate] = useState(false);

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullDate = `${day}.${month}.${year}.`;

  //Submit Reviews function to the firebase
  const submitReviews = async () => {
    await addDoc(userCollection, {
      name: name,
      rating: rating,
      info: info,
      uploadDate: fullDate,
    })
      .then(() => {
        alert("Your Reviews posted");
        setshouldupdate(!shouldupdate);
      })
      .catch((error) => {
        alert(error);
      });
  };

  //UseEffect for get reviews from firebase
  useEffect(() => {
    const getreviews = async () => {
      const data = await getDocs(userCollection);

      setDatafeedback(data.docs.map((e) => ({ ...e.data(), id: e.id })));
    };
    getreviews();
  }, [shouldupdate]);

  useScroll();
  const options = [
    { value: "", text: "" },
    { value: "Amazing", text: "Amazing" },
    { value: "Good", text: "Good" },
    { value: "Bad", text: "Bad" },
  ];
  const [viewmoreCount, setViewmoreCount] = useState(3);
  return (
    <div>
      <NavVersion scroll={scroll} openNav={openNav} setopenNav={setopenNav} />
      <Sidenav openNav={openNav} setopenNav={setopenNav} />
      <div className="fb-section">
        <h4 className="fb-main-title">Student Feedback</h4>
        <div className="fb-border">
          <div className="fb-main">
            {datafeedback.slice(0, viewmoreCount).map((e) => (
              <div className="fb" key={e.id}>
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
          </div>
        </div>
        <div className="feed-btn-gp">
          <div onClick={() => setViewmoreCount(viewmoreCount + 3)}>
            <ButtonFeedback viewmore={"View More Reviews"} />
          </div>
          <a href="#fb-input">
            <ButtonFeedbacktwo giveFeed={"Write Your Reviews"} />
          </a>
        </div>
      </div>
      <div className="fb-input-section" id="fb-input">
        <h4 className="fb-input-title">Give us feedback</h4>
        <div className="fb-input-border">
          <div className="fb-input-main">
            <div className="fb-input-warning">
              <p className="fb-warning-title">Before Reviews</p>
              <div className="fb-warning-bar"></div>
              <p className="fb-warning-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem iure sed eveniet ducimus provident cum perferendis,
                beatae repellat id aut eaque necessitatibus perspiciatis tempore
                doloremque rem reprehenderit aspernatur inventore saepe.{" "}
              </p>
            </div>
            <div className="fb-input-bar"></div>
            <div className="fb-input-form">
              <p>Name</p>
              <input
                className="fb-form-name"
                type="text"
                placeholder="eg - Terry Kyaw"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <p>Your Rating</p>
              <select
                className="fb-form-select"
                placeholder="Rating"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              >
                {options.map((e) => (
                  <option key={e.value}>{e.text}</option>
                ))}
              </select>
              <p>Your Reviews</p>
              <textarea
                className="fb-form-reviews"
                placeholder="eg - lorem diel ciew jedo"
                onChange={(e) => setInfo(e.target.value)}
                value={info}
              ></textarea>
              <button onClick={() => submitReviews()} className="fb-form-btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
