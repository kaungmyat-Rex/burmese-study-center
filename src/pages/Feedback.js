import React, { useState } from "react";
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
const Feedback = ({ scroll, openNav, setopenNav }) => {
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
            {fakedata.slice(0, viewmoreCount).map((e) => (
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
          <div>
            <ButtonFeedbacktwo giveFeed={"Write Your Reviews"} />
          </div>
        </div>
      </div>
      <div className="fb-input-section">
        <div className="fb-input-border">
          <div className="fb-input-main">
            <div className="fb-input-warning">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem iure sed eveniet ducimus provident cum perferendis,
              beatae repellat id aut eaque necessitatibus perspiciatis tempore
              doloremque rem reprehenderit aspernatur inventore saepe.
            </div>
            <div className="fb-input-bar"></div>
            <div className="fb-input-form">
              <input type="text" placeholder="  Name" />
              <select placeholder="Rating">
                {options.map((e) => (
                  <option key={e.value}>{e.text}</option>
                ))}
              </select>
              <textarea placeholder=" Reviews"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
