import React from "react"


class UserElement extends React.Component {
    render() {
        const user = this.props.user
        return (
            <li onClick={this.props.handleAddUser} className="DropdownElement" value={user.id} >
                <img src={user.avatarUrl} alt={user.login} />
                <p>{user.login} <span> · {user.homeFloor} этаж</span> </p>
            </li >
        )
    }
}

export default UserElement