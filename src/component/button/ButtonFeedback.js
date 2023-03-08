import React from "react";
import "./Button.css";

export const ButtonFeedback = ({ viewmore }) => {
  return (
    <p className="example_t" target="_blank" rel="nofollow">
      <span>{viewmore}</span>
    </p>
  );
};

export const ButtonFeedbacktwo = ({ giveFeed }) => {
  return (
    <p className="example_t" target="_blank" rel="nofollow">
      <span>{giveFeed}</span>
    </p>
  );
};

export const ButtonFeedbackthree = ({ moreevent }) => {
  return (
    <p className="example_t" target="_blank" rel="nofollow">
      <span>{moreevent}</span>
    </p>
  );
};
