import React from "react";
import { Layout, Button, Typography, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      {/* Header Section */}
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#001529",
          padding: "0 40px",
        }}
      >
        <Title level={3} style={{ color: "white", margin: 0 }}>
          🏠 Property Management System
        </Title>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/login")}
          style={{
            background: "#1890ff",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Login
        </Button>
      </Header>

      {/* Hero Section */}
      <Content
        style={{
          textAlign: "center",
          padding: "100px 50px",
          background: "linear-gradient(135deg, #2b5876, #4e4376)",
          color: "white",
        }}
      >
        <Title
          level={1}
          style={{ color: "#ffffff", fontSize: "48px", fontWeight: "bold" }}
        >
          Welcome to Property Management System
        </Title>
        <Paragraph
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "auto",
            color: "#e0e0e0",
          }}
        >
          Your all-in-one solution to manage properties, track maintenance, and
          streamline operations. Stay organized effortlessly!
        </Paragraph>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Button
            type="primary"
            size="large"
            style={{
              padding: "10px 30px", // Prevents extra height
              fontSize: "18px",
              borderRadius: "40px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50px", // Consistent height
              lineHeight: "1",
            }}
            onClick={() => navigate("/register")}
          >
            Get Started
          </Button>
        </div>
      </Content>

      {/* Features Section */}
      <Content style={{ padding: "80px 50px", background: "#fff" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: "50px" }}>
          Why Choose Us?
        </Title>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{ textAlign: "center", borderRadius: "10px" }}
            >
              <HomeOutlined style={{ fontSize: "50px", color: "#1890ff" }} />
              <Title level={3}>Manage Properties</Title>
              <Paragraph>
                Track all property details, tenants, and lease agreements in one
                place.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{ textAlign: "center", borderRadius: "10px" }}
            >
              <SettingOutlined style={{ fontSize: "50px", color: "#52c41a" }} />
              <Title level={3}>Maintenance Requests</Title>
              <Paragraph>
                Handle maintenance issues quickly with an organized request
                system.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{ textAlign: "center", borderRadius: "10px" }}
            >
              <TeamOutlined style={{ fontSize: "50px", color: "#faad14" }} />
              <Title level={3}>Tenant Management</Title>
              <Paragraph>
                Communicate with tenants and handle leasing with ease.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer Section */}
      <Footer
        style={{
          textAlign: "center",
          background: "#001529",
          color: "white",
          padding: "20px",
        }}
      >
        Property Management System © {new Date().getFullYear()} | Built with ❤️
      </Footer>
    </Layout>
  );
};

export default Home;
