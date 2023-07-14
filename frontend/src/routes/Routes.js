import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../home/Home";

// all front end routes for the app, including new format for private routes.

const RoutesList = ({ signup, login }) => {
  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default RoutesList;