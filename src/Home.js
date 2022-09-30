import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "./config.js";
import "./App.css";
import Button from "@mui/material/Button";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Home() {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  return (
    <div className="App">
      <p>You are logged in as </p>

      <Button variant="contained">Logout</Button>
    </div>
  );
}
