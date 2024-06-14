import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    
    email:"",
    password:"",
    
  })

  const setVal = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return { ...inpval, [name]: value };
    });
  };

  const loginUser =async (e)=>{
    e.preventDefault();


    const {email, password} = inpval;

    if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
    } else if (password === "") {
      alert("please enter your password");
    } else if (password.length < 6) {
      alert("password must be atleast 6 character");
    }else {
      //console.log("success");
      const data = await fetch("/login",{
        method:'POST',
        headers:{
          "Content-Type": "application/json",

        },
        body:JSON.stringify({
          email,password,
        })
      })

      const res = await data.json();
      //console.log(res.status);
      // if(res.status===201){
      //   alert("user register successfully")
      //   // to clear the sign up page data after successful registration
      //   setInpval({...inpval, email:"", password:""})
      // }
    }

  }

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Welcome to Login</h1>
          <p>hi, we are you</p>
        </div>

        <form>
          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address"
              value={inpval.email}
              onChange={setVal}
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
                value={inpval.password}
                onChange={setVal}
              />
              <div className="showpass" onClick={() => setPassShow(!passShow)}>
                {!passShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>

          <button className="btn" onClick={loginUser}>Login</button>
          <p>dont have an account? <NavLink to='/register'>sign up</NavLink></p>
        </form>
      </div>
    </section>
  );
};

export default Login;
