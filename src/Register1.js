import React, { useState, useContext } from "react";
import loginImg from "./login.svg";
import "./style.scss";
import { UserContext } from "./UserContext";
export default function Register() {
  const msg = useContext(UserContext);
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userdata, setUserdata] = useState([]);
  // const [userData, setUserData] = useState({});
  const [userDetail, setuserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setuserDetails({ ...userDetail, [e.target.name]: e.target.value });
    // var data = {
    //   Username: username,
    //   Email: email,
    //   Password: password,
    // };
    // setUserdata([ ...userdata, data ]);
  };
  console.log(userDetail);

  const handle = (e) => {
    let userDetails = localStorage.getItem("user");
    if (userDetails == null) {
      localStorage.setItem("user", JSON.stringify([userDetail]));
    } else {
      let data = JSON.parse(userDetails);
      data.push(userDetail);
      localStorage.setItem("user", JSON.stringify(data));
    }
    setuserDetails({
      username: "",
      email: "",
      password: "",
    })

  };
  // useEffect(() => {
  //   // localStorage.getItem("users", JSON.stringify());
  //   // let arr = localStorage.getItem("users");
  //   // if (arr == null) {
  //   //   localStorage.setItem("userdata", JSON.stringify(userdata));
  //   // }else {
  //   //   let userdata = JSON.parse(arr);

  //   //   localStorage.setItem("users", JSON.stringify(userdata));
  //   // }
  //   let userDetails = localStorage.getItem("user");
  //   if (userDetails == null) {
  //     localStorage.setItem("user", JSON.stringify([userData]));
  //   } else {
  //     let data = JSON.parse(userDetails);
  //     data.push(userData);
  //     localStorage.setItem("user", JSON.stringify(data));
  //   }
  // }, [userData]);

  // function handleUsername(e) {
  //   e.preventDefault();
  //   setUsername(e.target.value);
  // }
  // function handleEmail(e) {
  //   e.preventDefault();
  //   setEmail(e.target.value);
  // }
  // function handlePassword(e) {
  //   e.preventDefault();
  //   setPassword(e.target.value);
  // }

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
                value={userDetail.username}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="username">Email </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userDetail.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userDetail.password}
                onChange={handleChange}
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
