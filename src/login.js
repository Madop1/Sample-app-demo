import React, { useState, useContext } from "react";
import loginImg from "./login.svg";
import "./style.scss";
import { UserContext } from "./UserContext";
const Login = () => {
  const msg = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.getItem("users", JSON.stringify());
    let arr = localStorage.getItem("users");
    if (arr == null) {
      localStorage.setItem("users", JSON.stringify([data]));
    } else {
      let userdata = JSON.parse(arr);
      userdata.push(data);
      localStorage.setItem("users", JSON.stringify(userdata));
    }
    setData({
      email: "",
      password: "",
    });
  };

  function handleChange(e) {
    console.log("e.target.value",e.target.value)
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h2> {msg}</h2>
      <form onSubmit={handleSubmit}>
        <div className="base-container">
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="" />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="Email">Email </label>
                <input data-testid="emails"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password </label>
                <input data-testid="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>
          </div>
          <div>
            <input type="submit" value="Login" className="btn" data-testid="btn"/>
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
