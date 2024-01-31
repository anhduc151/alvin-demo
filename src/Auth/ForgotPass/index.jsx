// ForgotPassword.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../client';
import './forgot.css'

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(
        values.email
      );

      if (error) {
        throw error;
      }

      message.success('Password reset email sent successfully!');
      // Chuyển hướng đến trang đổi mật khẩu
      navigate('/changepass');
    } catch (error) {
      message.error('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot">
      <h1>Forgot Password</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not a valid email!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
