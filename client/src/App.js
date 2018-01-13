import React, { Component } from "react";
import "./App.css";

import HeaderComponent from "./component/HeaderComponent/HeaderComponent";
import CreateNewEvent from "./component/CreateNewEvent/CreateNewEvent";
import FooterComponent from "./component/FooterComponent/FooterComponent";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
