import React from "react";

function Footer(props) {
  return (
    <div>
      <footer className="row" style={{ color: "var(--blue)" }}>
        <div className="offset-md-2 col-md-3">
          <h5>about us</h5>
          <p>Doorstep wash and delivery</p>
        </div>
        <div className="col-md-1">
          <h5>Home</h5>
          <a href="/" style={{ color: "var(--blue)" }}>
            SignIn
          </a>
          <br></br>
          <a href="/" style={{ color: "var(--blue)" }}>
            Register
          </a>
        </div>
        <div className="col-md-1">
          <h5>Pricing</h5>
        </div>
        <div className="col-md-1">
          <h5>Career</h5>
          <a href="/" style={{ color: "var(--blue)" }}>
            Blogs
          </a>
          <br></br>
          <a href="/" style={{ color: "var(--blue)" }}>
            Create
          </a>
        </div>

        <div className="col-md-1">
          <h5>Contact</h5>
        </div>
        <div className="col-md-3">
          <h5>Social Media</h5>
          <a href="/"
            style={{ color: "var(--blue)" }}
            className="fa fa-facebook m-1"
          ></a>
          <a
            href="/"
            style={{ color: "var(--blue)" }}
            className="fa fa-twitter m-1"
          ></a>
          <a
            href="/"
            style={{ color: "var(--blue)" }}
            className="fa fa-linkedin m-1"
          ></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
