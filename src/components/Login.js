import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { store } from "../App";
import { Navigate } from "react-router-dom";

function Login(props) {
  const [token, setToken] = useContext(store);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4500/login", user)
      .then((res) => setToken(res.data.token));
  };
  // console.log(token)
  if (token) {
    // console.log(user.firstname)
    return <Navigate to="./myprofile.js" />;
  }
  return (
    <div className="col-md-6 shadow-sm pr-3 mb-1 bg-white rounded">
      <form className="col-md-10 ">
        <label>Sign In</label>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control shadow-sm p-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control shadow-sm p-3"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
