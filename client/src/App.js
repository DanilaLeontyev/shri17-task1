import React, { Component } from "react";
import "./App.css";

import HeaderComponent from "./component/HeaderComponent/HeaderComponent";
import CreateNewEvent from "./component/CreateNewEvent/CreateNewEvent";
import FooterComponent from "./component/FooterComponent/FooterComponent";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <CreateNewEvent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
