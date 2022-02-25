import React, { useState, useContext } from "react";
import loginImg from "./login.svg";
import "./style.scss";
import { UserContext } from "./UserContext";
const Login = () => {
  const msg = useContext(UserContext);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [users, setUsers] = useState([]);
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

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(users));
  // }, [users]);

  // function handleEmail(e) {
  //   e.preventDefault();
  //   setEmail(e.target.value);
  //   console.log(e.target.value);
  // }
  // function handlePassword(e) {
  //   e.preventDefault();
  //   setPassword(e.target.value);
  //   console.log(e.target.value);
  // }

  function handleChange(e) {
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
                <input
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
                <input
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
            <input type="submit" value="Login" className="btn" />
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
