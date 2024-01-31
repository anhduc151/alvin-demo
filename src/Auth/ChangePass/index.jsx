// ChangePass.js
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";

const ChangePass = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFinish = async () => {
    try {
      if (newPassword !== confirmPassword) {
        throw new Error("Passwords do not match!");
      }

      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        throw error;
      }

      message.success("Password updated successfully!");
      navigate("/sign-in");
    } catch (error) {
      // message.error("Error: " + error.message);
      message.error("Please confirm your email and return change password!");
    }
  };

  return (
    <div className="sign_in">
      <div className="sign_in_box">
        <h1>Change Password</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input your new password!",
              },
            ]}
          >
            <Input.Password onChange={(e) => setNewPassword(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please confirm your new password!",
              },
            ]}
          >
            <Input.Password
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangePass;
