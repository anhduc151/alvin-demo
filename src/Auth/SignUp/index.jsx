import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import logonav from "../../assets/logo.png";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.fullName,
          },
        },
      });

      if (error) throw error;
      console.log(data);
      message.success("Check your email for verification link");
      navigate("/sign-in"); // Chuyển hướng sau khi đăng ký thành công
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    document.title = "Sign up - Alvin AI";
  }, []);

  return (
    <div className="sign_in">
      <Link to="/" className="sign_in_logo">
        <img src={logonav} alt="" className="navlanding_imgs" />
        <p className="navlanding_title">Alvin AI</p>
      </Link>

      <div className="sign_in_box">
        <h1 className="sign_in_box_h1">Sign Up</h1>
        <Form
          layout="vertical"
          name="signup"
          onFinish={onFinish}
          className="sign_in_form"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Email" className="sign_in_box_input" />
          </Form.Item>

          <Form.Item
            label="Fullname"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input placeholder="Fullname" className="sign_in_box_input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              className="sign_in_box_input"
            />
          </Form.Item>

          <div className="sign_in_form_btn">
            <Form.Item>
              <Button type="primary" htmlType="submit" className="sign_in_btn">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>

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
