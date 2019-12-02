import React from "react";
import "./CreateNewEvent.css";
import { request } from "graphql-request";

import CloseButton from "../CloseButton/CloseButton";
import InputComponent from "../InputComponent/InputComponent";
// import UserBox from "../UserBox/UserBox";
import DropdownComponent from "../DropdownComponent/DropdownComponent";

class CreateNewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      rooms: [],
      subject: "",
      selectedUser: []
    };

    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.getRooms = `{
      rooms {
        id,
        title,
        floor,
        capacity
      }
    }`;

    this.getUsers = `{
      users {
        id,
        login,
        homeFloor,
        avatarUrl
      }
    }`;
  }

  componentWillMount() {
    request("/graphql", this.getRooms)
      .then(res => this.setState({ rooms: res.rooms }))
      .catch(err => console.log(err));

    request("/graphql", this.getUsers)
      .then(res => this.setState({ users: res.users }))
      .catch(err => console.log(err));
  }

  handleAddUser(event) {
    console.log(this.state.selectedUsers);
  }

  handleSubjectChange(event) {
    this.setState({
      subject: event.target.value
    });
  }

  render() {
    const users = this.state.users;
    // const rooms = this.state.rooms
    const subject = this.state.subject;
    const selectedUser = this.state.selectedUser;

    return (
      <main className="CreateNewEvent">
        <div className="HeaderWrapper">
          <h1 className="HeaderTitle">Новая встреча</h1>
          <CloseButton />
        </div>
        <InputComponent
          label="Тема"
          placeholder="О чём будете говорить?"
          value={subject}
          handleChange={this.handleSubjectChange}
        />

        <DropdownComponent
          handleAddUser={this.handleAddUser}
          label="Участники"
          placeholder="Например, Тор Одинович"
          data={users}
        />

        {/* {selectedUser !== undefined && (
          <div className="UserContainer">
            {selectedUser.map(user => (
              <UserBox
                key={user.id}
                userAvatar={user.avatarUrl}
                userLogin={user.login}
                userFloor={user.homeFloor}
              />
            ))}
          </div>
        )} */}
      </main>
    );
  }
}

export default CreateNewEvent;
