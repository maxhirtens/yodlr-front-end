import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Home() {
  console.log(process.env);

  return (
    <div className="container text-center">
      <h3>Welcome to Yodlr</h3>
      <p>
        <a href="/signup">Registration Page</a>
        <br />
        <a href="/admin">Admin Page</a>
      </p>
    </div>
  );
}

export default Home;
