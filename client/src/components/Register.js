import React from "react";
import "./mix.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  console.log(inpval);

  const setVal = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return { ...inpval, [name]: value };
    });
  };

  const addUserdata = (e) => {
    e.preventDefault();

    const { fname, password, email, cpassword } = inpval;

    if (fname === "") {
      alert("please enter your name");
    } else if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
    } else if (password === "") {
      alert("please enter your password");
    } else if (password.length < 6) {
      alert("password must be atleast 6 character");
    } else if (cpassword === "") {
      alert("please enter your confirm password");
    } else if (cpassword.length < 6) {
      alert("confirm password must be atleast 6 character");
    } else if (password !== cpassword) {
      alert("password is not matching");
    } else {
      console.log("success");
    }
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Sign Up</h1>
          <p style={{ textAlign: "center" }}>hi, we are you gald lud</p>
        </div>

        <form>
          <div className="form_input">
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter your name"
              onChange={setVal}
              value={inpval.fname}
            />
          </div>

          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address"
              onChange={setVal}
              value={inpval.email}
            />
          </div>

          {/* password show and hide logic */}
          <div className="form_input">
            <label htmlFor="password">Password</label>
            <div className="two">
              <input
                type={!passShow ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Enter your Password"
                onChange={setVal}
                value={inpval.password}
              />
              <div className="showpass" onClick={() => setPassShow(!passShow)}>
                {!passShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>

          <div className="form_input">
            <label htmlFor="password">Confirm Password</label>
            <div className="two">
              <input
                type={!cpassShow ? "password" : "text"}
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Password"
                onChange={setVal}
                value={inpval.cpassword}
              />
              <div
                className="showpass"
                onClick={() => setCPassShow(!cpassShow)}
              >
                {!cpassShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>

          <button className="btn" onClick={addUserdata}>
            Sign up
          </button>
          <p>
            Already have an account? <NavLink to="/">Login</NavLink>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
