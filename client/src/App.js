import React, { Component } from "react";
import "./App.css";

import HeaderComponent from "./component/HeaderComponent/HeaderComponent";
import CreateNewEvent from "./component/CreateNewEvent/CreateNewEvent";
import FooterComponent from "./component/FooterComponent/FooterComponent";

class App extends Component {
  state = { users: [] };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ users: res.users }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch("/users");
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <h1>Users</h1>
        {this.state.users.map(user => <div key={user.id}>{user.username}</div>)}
        <CreateNewEvent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
