import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import HomepageLeft from "./HomepageLeft";
import Referbanner from "./Referbanner";
import Footer from "./Footer";
function homepage(props) {
  return (
    <>
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <HomepageLeft />
        <Login />
      </div>
      <div className="row " style={{ Color: "red" }}>
        <Referbanner />
      </div>
      <Footer />
    </>
  );
}

export default homepage;
