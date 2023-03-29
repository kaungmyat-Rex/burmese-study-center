import React from "react";
import { CiWarning } from "react-icons/ci";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Models.css";
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

export const SuccessModel = ({ successModel }) => {
  return (
    <div
      className={`success-section ${
        successModel ? "success-section-show" : ""
      }`}
    >
      <div className="success-main">
        <AiFillCheckCircle className="success-icon" />
        <p className="success-info">Review submit completed!</p>
      </div>
    </div>
  );
};
