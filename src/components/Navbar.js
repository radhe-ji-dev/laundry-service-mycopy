import React from "react";
import styles from "./Navbar.css";

function Navbar(props) {
  return (
    <>
      <div className="row height mb-0 ">
        <div className="col-md-5">
          <h2>Laundry</h2>
        </div>
        <div className="col-md-6">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                SIGN IN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
