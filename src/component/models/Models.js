import React from "react";
import { CiWarning } from "react-icons/ci";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Models.css";
import mentordata from "../fakedata";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdClose } from "react-icons/md";
export const WarningModel = ({
  warningtext,
  warningModel,
  setWarningModel,
}) => {
  return (
    <div className={`warning ${warningModel ? "warning-show" : ""}`}>
      <div className="warning-section">
        <div className="warning-border">
          <div className="warning-main">
            <div className="warning-header">
              <div className="warning-header-text">
                <p className="warning-title">Warning message</p>
                <div className="warning-bar"></div>
              </div>
              <div className="warning-icon">
                <CiWarning />
              </div>
            </div>
            <p className="warning-info">
              You can't submit your reviews with empty{" "}
              <span style={{ color: "#de5a5a" }}>{warningtext}</span> field,
              Please ,Check your form again
            </p>

            <button
              className="warning-btn"
              onClick={() => setWarningModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SuccessModel = ({ successModel, content }) => {
  return (
    <div
      className={`success-section ${
        successModel ? "success-section-show" : ""
      }`}
    >
      <div className="success-main">
        <AiFillCheckCircle className="success-icon" />
        <p className="success-info">{content} submit completed!</p>
      </div>
    </div>
  );
};

export const MentorModel = ({ mentorId, setmentorModel, mentorModel }) => {
  return (
    <div style={{ display: `${mentorModel ? "block" : "none"}` }}>
      <div className="mentorModel-section">
        <div className="mentorModel-body">
          {mentordata
            .filter((e) => e.id === mentorId)
            .map((e) => (
              <div className="mentorModel-main" key={e.id}>
                <div className="mentorModel-image-info">
                  <img src={e.image} alt="" className="mentorModel-image" />
                  <div className="mentorModel-text">
                    <span>
                      <MdDriveFileRenameOutline className="mentorMdoel-icon" />
                      <h4 className="mentorModel-name">{e.name}</h4>
                    </span>
                    <span>
                      <MdWorkOutline className="mentorMdoel-icon" />
                      <p className="mentorModel-carrier">{e.carrier}</p>
                    </span>
                    <span>
                      <MdMailOutline className="mentorMdoel-icon" />
                      <p className="mentorModel-gmail">{e.gmail}</p>
                    </span>
                  </div>
                </div>

                <p className="mentorModel-info">{e.info}</p>
                <MdClose
                  className="mentormodel-close"
                  onClick={() => setmentorModel(false)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
