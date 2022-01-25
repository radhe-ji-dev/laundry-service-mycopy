import React from "react";
import Navbar from "./Navbar";
import Bottumribon from "./Bottumribon";
import { Button } from "reactstrap";

function Orderpage(props) {
  return (
    <div className="">
      <div className="row w-100">
        <Navbar />
      </div>
      <div className="row w-100 flex-fill">
        <div className="col-md-1" style={{ backgroundColor: "var(--blue)" }}>
          <p>a</p>
          <p>b</p>
          <p>c</p>
        </div>
        <div className="col-md-11   bg-danger m-0">
          <div className="row ">
            <p className="col-md-1">orders</p>
            <input className="col-md-2 offset-9" placeholder="search"></input>
          </div>
          <div className="row">
            <button className="btn btn-primary col-md-2 offset-5">
              click here
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div>
          <Bottumribon />
        </div>
      </div>
    </div>
  );
}

export default Orderpage;
