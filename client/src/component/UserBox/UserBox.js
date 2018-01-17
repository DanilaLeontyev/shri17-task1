import React from "react";
import "./UserBox.css";
import close from "./close.svg";

class UserBox extends React.Component {
    render() {
        return (
            <span className="UserBox">
                <img className="Avatar" src={this.props.userAvatar} alt={this.props.userLogin} />
                <p>{this.props.userLogin}</p>
                <button className="DeleteButton"><img src={close} alt="delete" /></button>
            </span>
        )
    }
}

export default UserBox