import React from "react";
import "./UserCard.css";

const UserCard = ({ firstName, lastName, email, state }) => {
  return (
    <div className="UserCard">
      <h3>
        {firstName} {lastName}
      </h3>
      <ul>
        <li>Email: {email}</li>
        <li>State: {state}</li>
      </ul>
    </div>
  );
};

export default UserCard;
