import Footer from "./Footer";
import Navbar from "./Navbar";
import Referbanner from "./Referbanner";
import { useState } from "react";
import Bottomribon from "./Bottumribon";
import axios from "axios";
import { Link } from "react-router-dom";
function Register(props) {
  const [user, setUser] = useState({
    firstname: "",
    secondname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
  });
  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4500/register", user).then((res) => {
      alert(res.user);
      setUser({
        firstname: "",
        secondname: "",
        email: "",
        mobile: "",
        state: "",
        district: "",
        address: "",
        pincode: "",
        password: "",
        confirmpassword: "",
      });
    });
  };
  return (
    <>
      <div className="row mb-0">
        <Navbar />
      </div>
      <div className="row mt-0 mb-0">
        <div className="col-md-3  mt-3 " style={{ color: "#5861AE" }}>
          <div className="row ">
            <h1 className="offset-md-3 col-md-6 " style={{ fontSize: "48" }}>
              Laundry Services
            </h1>
            <p className="offset-md-3 col-md-6">
              Laundry Serveces at your doorstep
            </p>
            <small className="offset-md-3 col-md-7">
              <p>Already have an Acoount</p>
            </small>
            <button className="btn btn-secondary offset-md-3 col-md-6">
              Login
            </button>
          </div>
        </div>
        {/*here i am dividing varicle */}
        <div
          className="col-md-9 mb-0"
          style={{ backgroundColor: "var(--lightblue)" }}
        >
          <form onSubmit={submitHandler}>
            <div class="row align-items-center g-3">
              <div class="col-md-5">
                <label class="visually-hidden" for="inputEmail">
                  Fisrt Name
                </label>
                <input
                  type="First Name"
                  class="form-control"
                  id="First Name"
                  placeholder="First Name"
                  onChange={changeHandler}
                />
              </div>
              <div class="col-md-5">
                <label class="visually-hidden" for="inputPassword">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Last Name"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div class="row align-items-center g-3">
              <div class="col-md-5">
                <label class="visually-hidden" for="inputEmail">
                  Email
                </label>
                <input
                  type="First Name"
                  class="form-control"
                  id="First Name"
                  placeholder="Email"
                  onChange={changeHandler}
                />
              </div>
              <div class="col-md-5">
                <label class="visually-hidden" for="inputPassword">
                  Phone
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Phone"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div class="row align-items-center g-3">
              <div class="col-md-5">
                <label class="visually-hidden" for="inputEmail">
                  State
                </label>
                <input
                  type="First Name"
                  class="form-control"
                  id="First Name"
                  placeholder="State"
                  onChange={changeHandler}
                />
              </div>
              <div class="col-md-5">
                <label class="visually-hidden" for="inputPassword">
                  Distict
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  placeholder="District"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div class="row align-items-center g-3">
              <div class="col-md-5">
                <label class="visually-hidden" for="inputEmail">
                  Address
                </label>
                <input
                  type="First Name"
                  class="form-control"
                  id="First Name"
                  placeholder="Address"
                  onChange={changeHandler}
                />
              </div>
              <div class="col-md-5">
                <label class="visually-hidden" for="inputPassword">
                  Pincode
                </label>
                <input
                  type="Password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Pincode"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div class="row align-items-center g-3">
              <div class="col-md-5">
                <label class="visually-hidden" for="inputEmail">
                  Password
                </label>
                <input
                  type="First Name"
                  class="form-control"
                  id="First Name"
                  placeholder="Password"
                  onChange={changeHandler}
                />
              </div>

              <div class="col-md-5">
                <label class="visually-hidden" for="inputEmail">
                  Password
                </label>
                <input
                  type="First Name"
                  class="form-control"
                  id="First Name"
                  placeholder="Confirm Password"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div>
              <p>
                <span>
                  <div class="form-check offset-md-5 ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Accept Terms and Conditions
                    </label>
                  </div>
                </span>
              </p>
            </div>
            <div className="offset-md-5">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-0 ">
        <Referbanner />
      </div>
      <div className="row">
        <Footer />
      </div>
      <div>
        <Bottomribon />
      </div>
    </>
  );
}

export default Register;
