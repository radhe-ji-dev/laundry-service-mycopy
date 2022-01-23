import React from "react";

function Navbar(props) {
  return (
    <div className="col-md-6  mt-3 " style={{ color: "#5861AE" }}>
      <div className="row ">
        <h1 className="offset-md-3 col-md-6 " style={{ fontSize: "48" }}>
          Laundry Services
        </h1>
        <p className="offset-md-3 col-md-6">
          Laundry Serveces at your doorstep
        </p>
      </div>
      <div className="row">
        <button className="btn">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
