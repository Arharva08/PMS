import React from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const { Text, Title, Link } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #386ab3 0%, #e8eef5 100%)',
        padding: '20px'
      }}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          width: '100%',
          maxWidth: '420px',
          boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}
      >
        <Title 
          level={2} 
          style={{ 
            color: '#2c3e50', 
            fontWeight: 800,
            marginBottom: '30px',
            letterSpacing: '-0.5px'
          }}
        >
          Demo
        </Title>
        <Text type="secondary">
          Don't have an account? <Link style={{ color: '#3498db' }}>Sign Up</Link>
        </Text>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          style={{ marginTop: 40
           }}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Enter your email address!' },
              { type: 'email', message: 'Invalid email format!' }
            ]}
          >
            <Input 
              prefix={<MailOutlined style={{ color: '#4e73df' }} />}
              placeholder="Email Address"
              size="large"
              style={{
                borderRadius: '10px',
                padding: '12px',
                border: '1px solid rgba(0,0,0,0.1)',
                marginBottom: '15px'
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Enter your password!' },
              { min: 6, message: 'Password must be at least 6 characters!' }
            ]}
          >
            <Input.Password 
              prefix={<LockOutlined style={{ color: '#4e73df' }} />}
              placeholder="Password"
              size="large"
              style={{
                borderRadius: '10px',
                padding: '12px',
                border: '1px solid rgba(0,0,0,0.1)',
                marginBottom: '15px'
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large" 
              block
              style={{
                borderRadius: '10px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                background: '#4e73df',
                border: 'none',
                boxShadow: '0 6px 15px rgba(78,115,223,0.2)',
                marginBottom: '30px',
                marginTop: '30px'
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
