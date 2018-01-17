import React from "react";
import "./DropdownComponent.css";

import InputComponent from "../InputComponent/InputComponent";
import CustomScrollbars from '../CustomScrollbars/CustomScrollbars';
import UserElement from './UserElement'

class DropdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {
            showDropdown: false
        };
    }

    handleFocus() {
        this.setState(prevState => ({ showDropdown: !prevState.showDropdown }))
    }
    render() {
        const showDropdown = this.state.showDropdown
        const users = this.props.users
        const label = this.props.label
        const placeholder = this.props.placeholder

        return (
            <form onFocus={this.handleFocus} onBlur={this.handleFocus} className="DropdownComponent">
                <InputComponent label={label} placeholder={placeholder}></InputComponent>
                {
                    showDropdown &&
                    <CustomScrollbars style={{ width: 420, height: 136 }} className="DropdownList">
                        {users.map(user => { return < UserElement handleAddUser={this.props.handleAddUser} key={user.id} user={user} /> })}
                    </CustomScrollbars>
                }

            </form >
        )
    }
}

export default DropdownComponent