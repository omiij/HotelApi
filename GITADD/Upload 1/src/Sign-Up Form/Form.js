import React from "react";
import "../Sign-Up Form/Form.css";

export default function Form() {
  return (
    <>
      <div className="wrapperr">
        <div className="form-wrapper">
          <h1 className="create">Create Account</h1>
          <form>
            <div className="firstname">
              <label htmlFor="firtsName">First Name</label>
              <input
                type="text"
                className=""
                placeholder="First Name"
                name="FirstName"
              />
            </div>
            <div className="lastname">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                name="LastName"
              />
            </div>
            <div className="Email">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className=""
                placeholder="Email"
                name="Email"
              />
            </div>
            <div className="Password">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className=""
                placeholder="Password"
                name="Password"
              />
            </div>
          </form>
          <div className="Account">
            <button type="submit">Create Account</button>
            <small>Already Have an Account ?</small>
          </div>
        </div>
      </div>
    </>
  );
}
