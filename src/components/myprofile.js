import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../App";
import axios from "axios";

const Profile = () => {
  const [token, setToken] = useContext(store);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4500/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setUser(res.user))
      .catch((err) => console.log(err));
  });

  if (!token) {
    return <Navigate to="./login.js" />;
  }
  return <div>{user && <center>Welcome user:{user.firstname}</center>}</div>;
};

export default Profile;
