import React from "react";
import { Layout, Card, Row, Col, Statistic, Table, Avatar, Button } from "antd";
import { HomeOutlined, DollarCircleOutlined, ShopOutlined, PlusOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import "antd/dist/reset.css";

const { Header, Content } = Layout;

const PropertyOwnerDashboard = () => {
  // Sample Data
  const totalProperties = 25;
  const rentedProperties = 10;
  const propertiesForSale = 15;

  const upcomingLeases = [
    { key: 1, name: "John Doe", property: "Sunset Villa", date: "2025-04-15", amount: "$1,500", address: "123 Street, City" },
    { key: 2, name: "Jane Smith", property: "Ocean View", date: "2025-05-01", amount: "$2,000", address: "456 Avenue, City" },
  ];

  const listedProperties = [
    { id: 1, title: "Luxury Apartment", price: "$500,000", image: "https://via.placeholder.com/150", location: "Downtown" },
    { id: 2, title: "Modern Condo", price: "$350,000", image: "https://via.placeholder.com/150", location: "Suburbs" },
    { id: 3, title: "Beach House", price: "$800,000", image: "https://via.placeholder.com/150", location: "Seaside" },
  ];

  const columns = [
    { title: "Tenant", dataIndex: "name", key: "name" },
    { title: "Property", dataIndex: "property", key: "property" },
    { title: "Lease Date", dataIndex: "date", key: "date" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Address", dataIndex: "address", key: "address" },
  ];

  return (
    <Layout style={{ minHeight: "100vh", padding: "20px", background: "#f0f2f5" }}>
      <Header style={{ background: "#fff", padding: "10px 20px", fontSize: "20px", fontWeight: "bold" }}>Property Owner Dashboard</Header>
      <Content style={{ marginTop: "20px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card bordered>
              <Statistic title="Total Properties" value={totalProperties} prefix={<HomeOutlined />} />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered>
              <Statistic title="Rented Properties" value={rentedProperties} prefix={<ShopOutlined />} />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered>
              <Statistic title="Properties for Sale" value={propertiesForSale} prefix={<DollarCircleOutlined />} />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          {/* Left - Listed Properties */}
          <Col xs={24} md={16}>
            <Card title="Listed Properties" bordered extra={<Button type="primary" icon={<PlusOutlined />}>Add Property</Button>}>
              <Row gutter={[16, 16]}>
                {listedProperties.map((property) => (
                  <Col xs={24} sm={12} lg={8} key={property.id}>
                    <Card
                      hoverable
                      cover={<img alt={property.title} src={property.image} style={{ height: "150px", objectFit: "cover" }} />}
                    >
                      <Meta title={property.title} description={property.location} />
                      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{property.price}</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
          {/* Right - Upcoming Leases */}
          <Col xs={24} md={8}>
            <Card title="Upcoming Leases" bordered>
              <Table dataSource={upcomingLeases} columns={columns} pagination={false} size="small" />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PropertyOwnerDashboard;
