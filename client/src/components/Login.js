import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Welcome to Login</h1>
          <p>hi, we are you gald lud</p>
        </div>

        <form>
          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address"
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
              />
              <div className="showpass" onClick={() => setPassShow(!passShow)}>
                {!passShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>

          <button className="btn">Login</button>
          <p>dont have an account? <NavLink to='/register'>sign up</NavLink></p>
        </form>
      </div>
    </section>
  );
};

export default Login;
