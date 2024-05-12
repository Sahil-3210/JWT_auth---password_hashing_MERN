import React from "react";
import "./mix.css";

const Login = () => {
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

          <div className="form_input">
            <label htmlFor="password">Password</label>
            <div className="two">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
              />
              <div className="showpass">
                show
              </div>
            </div>
          </div>
          <button className="btn">Login</button>
          <p>dont have an account? sign up</p>
        </form>
      </div>
    </section>
  );
};

export default Login;
