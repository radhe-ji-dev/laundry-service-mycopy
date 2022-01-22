import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import HomepageLeft from "./HomepageLeft";

function homepage(props) {
  return (
    <>
      <Navbar />
      <div className="row">
        <HomepageLeft />
        <Login />
      </div>
    </>
  );
}

export default homepage;
