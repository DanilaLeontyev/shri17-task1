import React from "react";
import HeaderComponentLogo from "./HeaderComponentLogo.svg";
import "./HeaderComponent.css";

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="HeaderComponent">
        <a>
          <img src={HeaderComponentLogo} alt="Logo" />
        </a>
      </header>
    );
  }
}

export default HeaderComponent;
