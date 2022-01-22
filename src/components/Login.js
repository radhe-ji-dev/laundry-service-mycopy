import React from "react";

function login(props) {
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

export default login;
