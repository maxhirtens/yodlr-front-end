import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YodlrApi from "../api";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState(null);

  // get users from API.
  async function searchUsers() {
    console.log(`searching API for all users`);
    let users = await YodlrApi.getUsers();
    setUsers(users);
  }

  // get companies from API on mount.
  useEffect(() => {
    console.log("useEffect on Users Page");
    searchUsers();
  }, []);

  // Response if search turns up empty.
  if (!users)
    return (
      <p>
        No users found. <Link to="/">Try Again</Link>
      </p>
    );

  // map through list of users to display.
  return (
    <div className="container text-center">
      <div>
        {users.map((c) => (
          <UserCard
            key={c.id}
            firstName={c.firstName}
            lastName={c.lastName}
            email={c.email}
            state={c.state}
          />
        ))}
      </div>
      <a href="/">Home</a>
    </div>
  );
};

export default Users;
