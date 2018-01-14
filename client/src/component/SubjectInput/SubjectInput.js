import React from "react";
import "./SubjectInput.css";

class SubjectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: ""
    };

    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleSabmit = this.handleSabmit.bind(this);
  }

  handleSabmit() {
    console.log(this);
  }

  handleSubjectChange(event) {
    console.log(this);
    this.setState({ subject: event.target.value });
  }
  render() {
    return (
      <form className="SubjectInput" onSubmit={this.handleSabmit}>
        <h1>Тема</h1>
        <input
          type="text"
          placeholder="О чём будете говорить?"
          value={this.state.subject}
          onChange={this.handleSubjectChange}
        />
      </form>
    );
  }
}

export default SubjectInput;
