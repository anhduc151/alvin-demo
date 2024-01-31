import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../client";
import logonav from "../../../assets/logo.png";

const SignInOTP = () => {
  const navigate = useNavigate();
  const [emailForOTP, setEmailForOTP] = useState("");

  const sendOTP = async (emailForOTP) => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: emailForOTP,
        options: {
          redirectTo: `${window.location.origin}/verify-email/${emailForOTP}`,
        },
      });

      if (error) {
        throw error;
      }

      navigate(`/verify-email/${emailForOTP}`);
      console.log("OTP sent to email", emailForOTP);
    } catch (error) {
      console.log("Error sending OTP", error.message);
    }
  };

  return (
    <div className="sign_in">
      <Link to="/" className="sign_in_logo">
        <img src={logonav} alt="" className="navlanding_imgs" />
        <p className="navlanding_title">Alvin AI</p>
      </Link>

      <div className="sign_in_box">
        <h1>Sign In OTP</h1>
        <Input
          type="text"
          placeholder="Enter Email Address or Phone Number"
          onChange={(e) => setEmailForOTP(e.target.value)}
        />
        <Button type="primary" onClick={() => sendOTP(emailForOTP)}>
          Send OTP
        </Button>
      </div>
    </div>
  );
};

export default SignInOTP;
