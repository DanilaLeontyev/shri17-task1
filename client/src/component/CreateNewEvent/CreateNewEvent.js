import React from "react";
import "./CreateNewEvent.css";
import { request } from "graphql-request";

import CloseButton from "../CloseButton/CloseButton";
import InputComponent from "../InputComponent/InputComponent";
import UserBox from "../UserBox/UserBox";
import DropdownComponent from "../DropdownComponent/DropdownComponent";

class CreateNewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      rooms: [],
      selectedUsers: [],
      selectedRoom: "",
      subject: ""
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
    this.setState({
      selectedUsers: [...this.state.selectedUsers, event.currentTarget.value]
    });
    console.log(this.state.selectedUsers);
  }

  handleSubjectChange(event) {
    console.log("sdfkl");
  }

  render() {
    const users = this.state.users;
    // const rooms = this.state.rooms

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
          value={this.state.subject}
          handleChange={this.state.handleSubjectChange}
        />

        <DropdownComponent
          handleAddUser={this.handleAddUser}
          label="Участники"
          placeholder="Например, Тор Одинович"
          users={users}
        />

        {selectedUser !== undefined && (
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
        )}
      </main>
    );
  }
}

export default CreateNewEvent;
