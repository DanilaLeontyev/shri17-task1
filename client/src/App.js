import React, { Component } from "react";
import "./App.css";

import HeaderComponent from "./component/HeaderComponent/HeaderComponent";
import CreateNewEvent from "./component/CreateNewEvent/CreateNewEvent";
import FooterComponent from "./component/FooterComponent/FooterComponent";


class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `{ users { id, login }}` })
    })
      .then(res => res.json())
      .then(res => this.setState({ users: res.data.users }))
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <CreateNewEvent />
        <FooterComponent />


        {/* <h1>Users</h1>
        {this.state.users.map(user => <div key={user.id}>{user.login} and {user.id}</div>)} */}
      </div>
    );
  }
}

export default App;
