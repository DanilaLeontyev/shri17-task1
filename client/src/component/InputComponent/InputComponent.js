import React from "react";
import "./InputComponent.css";

//import { request } from "graphql-request"

function InputComponent(props) {
  return (
    <div className="InputComponent">
      <label>
        {props.label}
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleChange}
        />
      </label>
    </div>
  );
}

export default InputComponent;
