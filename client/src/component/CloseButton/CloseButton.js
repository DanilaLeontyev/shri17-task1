import React from "react";
import "./CloseButton.css";
import close from "./close.svg";

class CloseButton extends React.Component {
  render() {
    return (
      <button className="CloseButton">
        <img src={close} alt="close" />
      </button>
    );
  }
}

export default CloseButton;
