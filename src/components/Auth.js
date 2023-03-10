import React, {useRef}  from "react";
import "./login.css";
import logof from "../images/google_icon.png";
import Dash from "./Dash";
import { useEffect, useState } from 'react';
import { generateRandomString } from './Utils';



function Auth() {
 
  const email = useRef();
  const password = useRef();
  const handleSubmit=()=>{
    if(email.current.value=="abc@gmail.com" && password.current.value=="12345")
    {
      localStorage.setItem("email","abc@gmail.com")
      localStorage.setItem("password","12345")
    }
  }

  const emaildata = localStorage.getItem("email");
  const passdata = localStorage.getItem("password")

// -----------------------------------------------------------------------------------------------------------------------------

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // check if the user has a session token
    const token = localStorage.getItem('sessionToken');
    if (token) {
      // set the user as logged in
      setIsLoggedIn(true);

      // start a timer to automatically log out the user after the token expires
      const timer = setTimeout(() => {
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('email');
      localStorage.removeItem('password');
        setIsLoggedIn(false);
      }, 60 * 1000); // expire after 30 minutes

      // save the timer ID in state so we can clear it when the component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLogin = () => {
    // generate a new session token
    const token = generateRandomString(32);

    // save the token in local storage as a session cookie
    localStorage.setItem('sessionToken', token);

    // set the user as logged in
    setIsLoggedIn(true);

    // start a timer to automatically log out the user after the token expires
    const timer = setTimeout(() => {
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('emaildata');
      localStorage.removeItem('passdata');

      setIsLoggedIn(false);
    },  60 * 1000); // expire after 1 minutes

    // save the timer ID in state so we can clear it when the component unmounts
    return () => clearTimeout(timer);
  
  };

// ===========================================================================================================================================

  return (
    <>
    {

      emaildata&&passdata? <Dash/>:

    <div className="container bbc">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="email">Email:</label> */}
        <input type="email" id="email" name="email" placeholder="Email"  style={{ fontWeight: "bold" }} ref={email}/>
        {/* <label htmlFor="password">Password:</label> */}
        <input type="password" id="password" name="password"  placeholder="Password"  style={{ fontWeight: "bold" }} ref={password}/>
        <p className="para">Don't have account signup here</p>
        <input type="submit" value="Submit" onClick={handleLogin}/>
      </form>
      <div className="google-login">
      <h3>  <b>OR</b> </h3>
        <button className="gg">
          <img className="log" src={logof} alt='im' />
          Login with Google
        </button>
      </div>
    </div>
    }
    </>
  );
}

export default Auth;

