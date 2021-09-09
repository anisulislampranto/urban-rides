import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../App";

initializeApp(firebaseConfig);

const Login = () => {
  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    if (e.target.name === "email") {
      const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      console.log(isEmailValid);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNUmber = /\d{1}/.test(e.target.value);
      console.log(isPasswordValid, passwordHasNUmber);
    }
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSubmit = (e) => {
    
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        setLoggedInUser(res.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  const handleLoginForm = () => {};
  return (
    <div>
      <Navbar></Navbar>
      <div className="account-create-section">
        <form onSubmit={handleSubmit}>
          <h1> Create an account</h1>
          <br />
          <input
            className="input"
            name="name"
            onBlur={handleBlur}
            type="text"
            placeholder="Name"
            required
          />
          <br />
          <input
            className="input"
            name="email"
            onBlur={handleBlur}
            type="text"
            placeholder="Username or Email"
            required
          />
          <br />
          <input
            className="input"
            name="password"
            onBlur={handleBlur}
            type="text"
            placeholder=" password"
            required
          />
          <br />
          <input
            className="input"
            name="confirm password"
            onBlur={handleBlur}
            type="text"
            placeholder=" Confirm Password"
            required
          />
          <br />
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
        <h4>
          Already have an account ?
          <Link onClick={handleLoginForm} to="/login">
            Login
          </Link>
        </h4>

        <h3>or</h3>

        <div>
          <button onClick={handleGoogleSignIn} className="google-log-in">
            <FontAwesomeIcon
              style={{ color: "black", marginRight: "10px" }}
              icon={faGoogle}
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
