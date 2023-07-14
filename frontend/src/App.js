import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes/Routes";
import YodlrApi from "./api";
import "./App.css";

function App() {
  // signup method.
  async function signup(signupData) {
    try {
      await YodlrApi.signup(signupData);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  return (
    <BrowserRouter>
      <RoutesList signup={signup} />
    </BrowserRouter>
  );
}

export default App;
