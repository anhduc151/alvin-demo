import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sign-up.css";
import { supabase } from "../../client";
import logonav from "../../assets/logo.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) throw error;
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="sign_in">
      <Link to="/" className="sign_in_logo">
        <img src={logonav} alt="" className="navlanding_imgs" />
        <p className="navlanding_title">Alvin AI</p>
      </Link>

      <div className="sign_in_box">
        <h1 className="sign_in_box_h1">Sign Up</h1>
        <form onSubmit={handleSubmit} className="sign_in_form">
          <input
            placeholder="Email"
            name="email"
            className="sign_in_box_input"
            onChange={handleChange}
          />

          <input
            placeholder="Fullname"
            name="fullName"
            onChange={handleChange}
            className="sign_in_box_input"
          />

          <input
            placeholder="Password"
            name="password"
            type="password"
            className="sign_in_box_input"
            onChange={handleChange}
          />
          <div className="sign_in_form_btn">
            <button type="submit" className="sign_in_btn">
              Submit
            </button>
          </div>
        </form>

        <div className="sign_in_ques">
          <p>Already have an account?</p>
          <Link to="/sign-in" className="sign_in_link decoration">
            Login
          </Link>
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

export default SignUp;
