// import logo from './logo.svg';
import React from "react";
import Login from "./login";
import Register from "./register";
import Register1 from "./Register1";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Hello Welcome to">
      < BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register1" element={<Register1 />} />
        </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}
