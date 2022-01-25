import React from "react";

function Navbar(props) {
  return (
    <>
    <div className="col-xs-12">
      <h2>Laundry</h2>
    </div>
    <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Career</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Pricing</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">SIGN IN</a>
    
  </li>
</ul>
    </>
  );
}

export default Navbar;
