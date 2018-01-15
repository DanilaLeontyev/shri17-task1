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
  //   const response = await fetch("/graphql", {
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query: "{ users {id, login}}" })
  //   });
  //   const body = await response.json();
  //   console.log(response)
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  componentDidMount() {
    fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ users { id, login }}" })
    })
      .then(res => res.json())
      .then(res => this.setState({ users: res.data.users }))
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <h1>Users</h1>
        {console.log(this.state.users)}
        {this.state.users.map(user => <div key={user.id}>{user.login} and {user.id}</div>)}
        <CreateNewEvent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
