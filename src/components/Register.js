import Footer from "./Footer";
import Navbar from "./Navbar";
import Referbanner from "./Referbanner";
import Dropdown from "./dropdown";
import Bottomribon from "./Bottumribon";

function register() {
  return (
    <>
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
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
          className="col-md-9"
          style={{ backgroundColor: "var(--lightblue)" }}
        >
          <div className="row">
            <div className="col-md-5">
              <div className="form-group col-md-12">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-12">
                <label for="exampleInputEmail1">Phone</label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group col-md-12">
                <p className="mb-0">District</p>
                <Dropdown />
              </div>
              <div className="form-group col-md-12">
                <label for="exampleInputEmail1">Pincode</label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Pincode"
                />
              </div>
            </div>
            <div className="col-md-5">
              {" "}
              {/*this is right part*/}
              <div className="form-group col-md-12">
                <label for="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-12">
                <p className="mb-0">State</p>
                <Dropdown />
              </div>
              <div className="form-group col-md-12">
                <label for="exampleInputEmail1">Address</label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                />
              </div>
              <div className="form-group col-md-12">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                />
              </div>
              <div className="form-group col-md-12">
                <label for="exampleInputEmail1">Confirm Password</label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                />
              </div>
            </div>
            <div>
              <p>
                <span>
                  <div class="form-check offset-md-5">
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
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
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

export default register;
