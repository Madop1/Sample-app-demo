import React, { useState, useEffect, useContext } from "react";
import loginImg from "./login.svg";
import "./style.scss";
import { UserContext } from "./UserContext";
export default function Register() {
  const msg = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserdata] = useState([]);

  const handle = () => {
    var data = {
      Username: username,
      Email: email,
      Password: password,
    };
    setUserdata({ ...userdata, data });
  };
  useEffect(() => {
    localStorage.setItem("userdata", JSON.stringify(userdata));
  }, [userdata]);

  function handleUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }
  function handleEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <>
      <h2> {msg}</h2>
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleUsername}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="username">Email </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              ></input>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={handle}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}
