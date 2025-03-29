import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link as RouterLink, useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const RegistrationPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
  
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      const text = await response.text(); 
      const data = text ? JSON.parse(text) : {};  
  
      if (response.ok) {
        message.success('Registration successful! Redirecting...', 2);
        
        // Delay navigation to show the message properly
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        // Handle specific backend errors (like duplicate email)
        if (data.error) {
          message.error(data.error, 3);
        } else {
          message.error('Registration failed. Please try again.', 3);
        }
      }
    } catch (error) {
      message.error('Something went wrong. Try again later.', 3);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <Title level={2} style={styles.title}>Demo</Title>
        <Text type="secondary">Create a new account:</Text>

        <Form name="register" onFinish={onFinish} layout="vertical" style={{ marginTop: 20 }}>
          {/* Name Input */}
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Enter your full name!' },
              { pattern: /^[a-zA-Z\s]{3,50}$/, message: 'Only letters (3-50 characters).' }
            ]}
          >
            <Input prefix={<UserOutlined style={styles.icon} />} placeholder="Full Name" size="large" style={styles.input} />
          </Form.Item>

          {/* Email Input */}
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Enter your email address!' },
              { type: 'email', message: 'Invalid email format!' }
            ]}
          >
            <Input prefix={<MailOutlined style={styles.icon} />} placeholder="Email Address" size="large" style={styles.input} />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Enter your password!' },
              { min: 8, message: 'Password must be at least 8 characters!' }
            ]}
          >
            <Input.Password prefix={<LockOutlined style={styles.icon} />} placeholder="Password" size="large" style={styles.input} />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block loading={loading} style={styles.button}>
              Sign Up
            </Button>
            <Text type="secondary">
                      Already Have an Acoount?{" "}
                      <RouterLink to="/login" style={{ color: "#3498db" }}>
                        Sign In
                      </RouterLink>
                    </Text>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #386ab3 0%, #e8eef5 100%)',
    padding: '20px',
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    padding: '40px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  title: { color: '#2c3e50', fontWeight: 800, marginBottom: '20px' },
  input: {
    borderRadius: '10px',
    padding: '12px',
    border: '1px solid rgba(0,0,0,0.1)',
    marginBottom: '15px',
  },
  button: {
    borderRadius: '10px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    background: '#4e73df',
    border: 'none',
    boxShadow: '0 6px 15px rgba(78,115,223,0.2)',
    marginTop: '20px',
  },
  icon: { color: '#4e73df' },
};

export default RegistrationPage;
