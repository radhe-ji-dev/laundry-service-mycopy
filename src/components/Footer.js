import React from "react";

function Footer(props) {
  return (
    <div>
      <footer className="row">
        <div className="col-md-4">
          <h5>about us</h5>
          <p>Doorstep wash and delivery</p>
        </div>
        <div className="col-md-1">
          <h5>Home</h5>
          <a href="#">Sign In</a>
          <a href="#">Register</a>
        </div>
        <div className="col-md-1">
          <h5>Pricing</h5>
        </div>
        <div className="col-md-1">
          <h5>Career</h5>
          <a href="#">Blogs</a>
          <br></br>
          <a href="#">Create</a>
        </div>

        <div className="col-md-1">
          <h5>Contact</h5>
        </div>
        <div className="col-md-4">
          <h5>Social Media</h5>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
