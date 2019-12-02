import React from "react";

function UserElement(props) {
  const user = props.user;
  return (
    <li
      onClick={props.handleAddUser}
      className="DropdownElement"
      value={user.id}
    >
      <img src={user.avatarUrl} alt={user.login} />
      <p>
        {user.login} <span> · {user.homeFloor} этаж</span>{" "}
      </p>
    </li>
  );
}

export default UserElement;
