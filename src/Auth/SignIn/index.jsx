import React, { useState } from "react";
import "./sign-in.css";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import logonav from "../../assets/logo.png";
import google from "../../assets/google.png";

const SignIn = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      // setToken(data);
      navigate("/dashboard");
    } catch (error) {
      alert("Error: " + error);
    }
  }

  return (
    <div className="sign_in">
      <Link to="/" className="sign_in_logo">
        <img src={logonav} alt="" className="navlanding_imgs" />
        <p className="navlanding_title">Alvin AI</p>
      </Link>

      <div className="sign_in_box">
        <h1 className="sign_in_box_h1">Sign in</h1>
        <form onSubmit={handleSubmit} className="sign_in_form">
          <input
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="sign_in_box_input"
          />

          <input
            placeholder="Password"
            name="password"
            className="sign_in_box_input"
            type="password"
            onChange={handleChange}
          />

          <div className="sign_in_form_btn">
            <button type="submit" className="sign_in_btn">
              Submit
            </button>
          </div>
        </form>

        <div className="sign_in_ques">
          <p>Don't have an account?</p>
          <Link to="/sign-up" className="sign_in_link decoration">
            Sign Up
          </Link>
        </div>

        <div className="sign_in_or">
          <p className="or">OR</p>
        </div>

        <div className="sign_in_google">
          <img src={google} alt="" className="sign_in_google_imgs" />
          <p className="sign_in_google_p">Continue with Google</p>
        </div>
      </div>

      <div className="cube-loader">
        <div className="cube-top"></div>
        <div className="cube-wrapper">
          <span style={{ "--i": 0 }} className="cube-span"></span>
          <span style={{ "--i": 1 }} className="cube-span"></span>
          <span style={{ "--i": 2 }} className="cube-span"></span>
          <span style={{ "--i": 3 }} className="cube-span"></span>
        </div>
      </div>

      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
