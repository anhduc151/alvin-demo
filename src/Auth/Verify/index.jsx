import React, { useState } from "react";
import { message, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import "./verify.css";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = async () => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        otp,
      });

      if (error) {
        throw error;
      }

      message.success("OTP verified successfully!");
      navigate("/dashboard");
    } catch (error) {
      message.error("Error verifying OTP: " + error.message);
    }
  };

  return (
    <div>
      <p>Enter the OTP sent to your email:</p>
      <Input
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <Button type="primary" onClick={handleVerifyOTP}>
        Verify OTP
      </Button>
    </div>
  );
};

export default VerifyEmail;
