import React from "react";
import "./InputComponent.css";

//import { request } from "graphql-request"

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input_data: ""
        };

        this.handleSubjectChange = this.handleSubjectChange.bind(this);
    }

    handleSubjectChange(event) {
        this.setState({ input_data: event.target.value });
    }
    render() {
        return (
            <div className='InputComponent'>
                <label>
                    {this.props.label}
                    <input
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        value={this.state.input_data}
                        onChange={this.handleSubjectChange}
                    />
                </label>
            </div>
        );
    }
}

export default InputComponent;