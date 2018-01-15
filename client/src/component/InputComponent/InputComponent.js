import React from "react";
import "./InputComponent.css";

//import { request } from "graphql-request"

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleSabmit = this.handleSabmit.bind(this);
    }

    handleSabmit(event) {

    }

    handleSubjectChange(event) {
        this.setState({ subject: event.target.value });
    }
    render() {
        return (
            <div className='InputComponent'>
                <label>{this.props.label}</label>
                <input
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.state.users}
                    onChange={this.handleSubjectChange}
                />
            </div>
        );
    }
}

export default InputComponent;