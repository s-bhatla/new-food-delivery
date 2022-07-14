import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Auth = () => {
  const [loginemail, setloginemail] = useState("");
  const [loginpwd, setloginpwd] = useState("");
  const [signupemail, setsignupemail] = useState("");
  const [signuppwd, setsignuppwd] = useState("");
  console.log("loginemail -> ", signupemail);

  const loginfunc = (e) => {
    e.preventDefault()
    console.log("loginemail in func-> ", signupemail);
    signInWithEmailAndPassword(auth, loginemail, loginpwd)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("logged in as", user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signupfunc = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, signupemail, signuppwd)
      .then((cred) => {
        console.log("User created : ", cred.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const logoutfunc = (e) => {
    e.preventDefault();
    signOut(auth)
    .then(()=>{
      console.log("User has signed out.")
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  return (
    <div>
      Auth
      <div>
        Login
        <form>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={loginemail}
            onChange={(e) => {
              setloginemail(e.target.value);
            }}
          ></input>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={loginpwd}
            onChange={(e) => {
              setloginpwd(e.target.value);
            }}
          ></input>
          <button onClick={loginfunc} type="submit">Login</button>
        </form>
      </div>
      <div>
        Signup
        <form>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={signupemail}
            onChange={(e) => {
              setsignupemail(e.target.value);
            }}
          ></input>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={signuppwd}
            onChange={(e) => {
              setsignuppwd(e.target.value);
            }}
          ></input>
          <button onClick={signupfunc} type="submit">Signup</button>
        </form>
      </div>
      <br></br>
      <button onClick={logoutfunc}>Logout</button>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default Auth;
