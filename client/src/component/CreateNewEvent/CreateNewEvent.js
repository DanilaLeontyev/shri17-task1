import React from "react";
import "./CreateNewEvent.css";

import CloseButton from "../CloseButton/CloseButton";
import SubjectInput from "../SubjectInput/SubjectInput";
import InputComponent from "../InputComponent/InputComponent"

class CreateNewEvent extends React.Component {
  render() {
    return (
      <main className="CreateNewEvent">
        <div className="HeaderWrapper">
          <h1 className="HeaderTitle">Новая встреча</h1>
          <CloseButton />
        </div>
        <SubjectInput />
        <InputComponent label="Участники"></InputComponent>
      </main>
    );
  }
}

export default CreateNewEvent;
