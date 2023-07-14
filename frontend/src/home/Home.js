import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Home() {
  console.log("test" + process.env.REACT_APP_BASE_URL);

  return (
    <div className="container text-center">
      <h3>Welcome to Yodlr</h3>
      <p>
        <a href="/signup.html">Registration Page</a>
        <br />
        <a href="/admin.html">Admin Page</a>
      </p>
    </div>
  );
}

export default Home;
