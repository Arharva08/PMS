import React from "react";
import { Card, Typography, Table, Button, Upload, Input, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const { Title, Text } = Typography;
const { Option } = Select;

const TenantDashboard = () => {
  const paymentColumns = [
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Amount Paid", dataIndex: "amount", key: "amount" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  const paymentData = [
    { key: "1", date: "March 1, 2025", amount: "$1200", status: "Paid" },
    { key: "2", date: "April 1, 2025", amount: "$1200", status: "Pending" },
  ];

  return (
    <div style={{ padding: 40, background: "#f5f7fa", minHeight: "100vh" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 20 }}>
        Tenant Dashboard
      </Title>

      {/* Property Details */}
      <Card title="🏠 My Property Details" style={{ marginBottom: 20 }}>
        <Text strong>Property Name:</Text> Sunset Apartments<br />
        <Text strong>Address:</Text> 123 Street, City, Country<br />
        <Text strong>Type:</Text> Apartment<br />
        <Text strong>Lease Status:</Text> Active<br />
        <Text strong>Lease Duration:</Text> Jan 2025 - Jan 2026<br />
        <Text strong>Landlord Contact:</Text> John Doe (555-1234)
      </Card>

      {/* Lease Agreement */}
      <Card title="📜 Lease Agreement" style={{ marginBottom: 20 }}>
        <Button type="primary" style={{ marginRight: 10 }}>Download Lease PDF</Button>
        <Button>View Lease Terms</Button>
      </Card>

      {/* Rent Payment Details */}
      <Card title="💰 Rent Payment Details" style={{ marginBottom: 20 }}>
        <Text strong>Next Rent Due Date:</Text> April 1, 2025<br />
        <Text strong>Total Rent Amount:</Text> $1200<br />
        <Text strong>Pending Dues:</Text> $1200<br /><br />
        <Title level={5}>Payment History</Title>
        <Table columns={paymentColumns} dataSource={paymentData} pagination={false} />
      </Card>

      {/* Maintenance Requests */}
      <Card title="🔧 Maintenance Requests">
        <Title level={5}>View Submitted Requests</Title>
        <Table
          columns={[
            { title: "Issue Type", dataIndex: "type", key: "type" },
            { title: "Description", dataIndex: "description", key: "description" },
            { title: "Status", dataIndex: "status", key: "status" },
          ]}
          dataSource={[
            { key: "1", type: "Plumbing", description: "Leaky faucet", status: "In Progress" },
          ]}
          pagination={false}
        />
        <br />
        <Title level={5}>Submit New Request</Title>
        <Select placeholder="Select Issue Type" style={{ width: "100%", marginBottom: 10 }}>
          <Option value="plumbing">Plumbing</Option>
          <Option value="electrical">Electrical</Option>
          <Option value="other">Other</Option>
        </Select>
        <Input.TextArea placeholder="Describe the issue..." rows={3} style={{ marginBottom: 10 }} />
        <Upload>
          <Button icon={<UploadOutlined />}>Attach Image (Optional)</Button>
        </Upload>
        <Button type="primary" block style={{ marginTop: 10 }}>Submit Request</Button>
      </Card>
    </div>
  );
};

export default TenantDashboard;