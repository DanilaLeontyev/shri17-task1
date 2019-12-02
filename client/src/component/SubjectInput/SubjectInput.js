import React from "react";
import "./SubjectInput.css";

import { request } from "graphql-request"

class SubjectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      events: []
    };

    this.mutation = `mutation {
      updateEvent(id: 1, input: {
        title: "NewTask" 
        dateEnd: "2017-12-13T21:12:36.981Z" 
        dateStart: "2017-12-13T21:12:36.981Z" 
    }) {
      id
    }
  }`

    this.query = `{
    events {
      id,
      title
    }
  }`


    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleSabmit = this.handleSabmit.bind(this);
  }

  handleSabmit(event) {
    request('/graphql', this.mutation).then(data => console.log(data))
    request('/graphql', this.query).then(res => this.setState({ events: res.events }))

    console.log(this.state)
    event.preventDefault()
  }

  handleSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }
  render() {
    return (
      <form className="SubjectInput" onSubmit={this.handleSabmit}>
        <label>Тема</label>
        <input
          type="text"
          placeholder="О чём будете говорить?"
          value={this.state.subject}
          onChange={this.handleSubjectChange}
        />
        {/* <h1>Events</h1>
        {this.state.events.map(event => <div key={event.id}>{event.title} </div>)} */}
      </form>
    );
  }
}

export default SubjectInput;
