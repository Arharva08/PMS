import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

const { Text, Title } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Used for redirecting after login

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/login", values);
      console.log("Response:", response.data);

      if (response.data.error === false) {
        message.success("Login successful!");
        
        // Store token in localStorage for authentication
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.data));

        // Redirect user to Home Page
        navigate("/tenant");
      } else {
        message.error("Invalid login credentials!");
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error("Failed to login. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #386ab3 0%, #e8eef5 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "40px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <Title
          level={2}
          style={{
            color: "#2c3e50",
            fontWeight: 800,
            marginBottom: "30px",
            letterSpacing: "-0.5px",
          }}
        >
          Demo
        </Title>
        <Text type="secondary">
          Don't have an account?{" "}
          <RouterLink to="/register" style={{ color: "#3498db" }}>
            Sign Up
          </RouterLink>
        </Text>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          style={{ marginTop: 40 }}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Enter your email address!" },
              { type: "email", message: "Invalid email format!" },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: "#4e73df" }} />}
              placeholder="Email Address"
              size="large"
              style={{
                borderRadius: "10px",
                padding: "12px",
                border: "1px solid rgba(0,0,0,0.1)",
                marginBottom: "15px",
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Enter your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "#4e73df" }} />}
              placeholder="Password"
              size="large"
              style={{
                borderRadius: "10px",
                padding: "12px",
                border: "1px solid rgba(0,0,0,0.1)",
                marginBottom: "15px",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={loading} // Show loading state
              style={{
                borderRadius: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                background: "#4e73df",
                border: "none",
                boxShadow: "0 6px 15px rgba(78,115,223,0.2)",
                marginBottom: "30px",
                marginTop: "30px",
              }}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
