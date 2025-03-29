import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Card,
  Row,
  Col,
  Typography,
  Table,
  Avatar,
  Badge,
  Space,
  Progress,
  Statistic,
  Button,
  List,
  Tabs,
  Tag,
  Dropdown
} from 'antd';
import {
  HomeOutlined,
  DollarOutlined,
  TeamOutlined,
  ToolOutlined,
  FileTextOutlined,
  BellOutlined,
  UserOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  CalendarOutlined,
  MessageOutlined,
  SettingOutlined,
  BuildOutlined,
  BankOutlined,
  PieChartOutlined,
  EllipsisOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  // Overview data with trends
  const overviewData = [
    { 
      title: "Total Revenue", 
      value: "$125,000", 
      icon: <DollarOutlined />,
      trend: "+12.5%",
      trendUp: true
    },
    { 
      title: "Occupancy Rate", 
      value: "92%", 
      icon: <HomeOutlined />,
      trend: "+5.2%",
      trendUp: true
    },
    { 
      title: "Active Tenants", 
      value: "48", 
      icon: <TeamOutlined />,
      trend: "-2",
      trendUp: false
    },
    { 
      title: "Properties", 
      value: "12", 
      icon: <BankOutlined />,
      trend: "+1",
      trendUp: true
    }
  ];

  // Properties data
  const properties = [
    {
      id: 1,
      name: "Sunset Apartments",
      units: [
        { number: "12A", status: "Occupied", tenant: "John Doe", rent: 1500 },
        { number: "12B", status: "Vacant", tenant: null, rent: 1600 },
        { number: "15A", status: "Occupied", tenant: "Sarah Wilson", rent: 1650 },
      ],
      totalUnits: 12,
      occupiedUnits: 10,
      monthlyRevenue: 18000,
      maintenanceCosts: 2500,
      location: "123 Sunset Blvd",
      type: "Apartment Complex"
    },
    {
      id: 2,
      name: "Ocean View Residences",
      units: [
        { number: "45", status: "Occupied", tenant: "Jane Smith", rent: 1800 },
        { number: "46", status: "Occupied", tenant: "Mike Johnson", rent: 2100 },
      ],
      totalUnits: 8,
      occupiedUnits: 7,
      monthlyRevenue: 15400,
      maintenanceCosts: 1800,
      location: "456 Ocean Drive",
      type: "Luxury Apartments"
    }
  ];

  // Property columns for table
  const propertyColumns = [
    {
      title: 'Property',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <Space>
          <BankOutlined />
          <Text strong>{text}</Text>
        </Space>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (text) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: 'Occupancy',
      key: 'occupancy',
      render: (text, record) => (
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space>
            <Text>{record.occupiedUnits}/{record.totalUnits} units</Text>
            <Text type="secondary">
              ({Math.round((record.occupiedUnits/record.totalUnits) * 100)}%)
            </Text>
          </Space>
          <Progress 
            percent={Math.round((record.occupiedUnits/record.totalUnits) * 100)} 
            size="small" 
            status={
              (record.occupiedUnits/record.totalUnits) >= 0.9 ? 'success' : 
              (record.occupiedUnits/record.totalUnits) >= 0.7 ? 'normal' : 
              'exception'
            }
          />
        </Space>
      ),
    },
    {
      title: 'Monthly Revenue',
      dataIndex: 'monthlyRevenue',
      key: 'monthlyRevenue',
      render: (amount) => (
        <Text strong style={{ color: '#52c41a' }}>
          ${amount.toLocaleString()}
        </Text>
      ),
    },
    {
      title: 'Maintenance Costs',
      dataIndex: 'maintenanceCosts',
      key: 'maintenanceCosts',
      render: (amount) => (
        <Text type="danger">
          ${amount.toLocaleString()}
        </Text>
      ),
    },
    {
      title: 'Net Income',
      key: 'netIncome',
      render: (text, record) => (
        <Text strong style={{ color: '#1890ff' }}>
          ${(record.monthlyRevenue - record.maintenanceCosts).toLocaleString()}
        </Text>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Dropdown
          menu={{
            items: [
              { key: '1', label: 'View Details' },
              { key: '2', label: 'Edit Property' },
              { key: '3', label: 'View Units' },
              { key: '4', label: 'Maintenance History' },
            ]
          }}
        >
          <Button type="text" icon={<EllipsisOutlined />} />
        </Dropdown>
      ),
    },
  ];

  // Financial summary data
  const financialSummary = {
    totalRevenue: 125000,
    expenses: {
      maintenance: 15000,
      utilities: 8000,
      insurance: 5000,
      taxes: 12000,
      management: 6000
    },
    netIncome: 79000,
    occupancyRate: 92,
    rentCollection: 98
  };

  // Transaction data
  const transactionColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Property',
      dataIndex: 'property',
      key: 'property',
    },
    {
      title: 'Tenant',
      dataIndex: 'tenant',
      key: 'tenant',
      render: (text) => (
        <Space>
          <Avatar size="small" icon={<UserOutlined />} />
          {text}
        </Space>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `$${amount.toLocaleString()}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Badge 
          status={status === 'Paid' ? 'success' : status === 'Pending' ? 'warning' : 'error'} 
          text={status} 
        />
      ),
    },
  ];

  const transactions = [
    { key: 1, date: "Mar 25, 2025", property: "Sunset Apartments #12", tenant: "John Doe", amount: 1500, status: "Paid" },
    { key: 2, date: "Mar 24, 2025", property: "Ocean View #45", tenant: "Jane Smith", amount: 1800, status: "Pending" },
    { key: 3, date: "Mar 23, 2025", property: "Pine Gardens #8", tenant: "Mike Johnson", amount: 2100, status: "Paid" },
    { key: 4, date: "Mar 22, 2025", property: "Sunset Apartments #15", tenant: "Sarah Wilson", amount: 1650, status: "Overdue" },
  ];

  // Maintenance requests
  const maintenanceRequests = [
    { title: "Fix leaking faucet", property: "Sunset Apartments #12", priority: "High", date: "Mar 26, 2025" },
    { title: "AC maintenance", property: "Ocean View #45", priority: "Medium", date: "Mar 27, 2025" },
    { title: "Replace carpet", property: "Pine Gardens #8", priority: "Low", date: "Mar 28, 2025" },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        style={{ background: '#fff' }}
      >
        <div style={{ height: 64, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Title level={4} style={{ margin: 0, color: '#1890ff' }}>
            {collapsed ? 'PMS' : 'PMS Owner'}
          </Title>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="2" icon={<BankOutlined />}>Properties</Menu.Item>
          <Menu.Item key="3" icon={<DollarOutlined />}>Finances</Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>Tenants</Menu.Item>
          <Menu.Item key="5" icon={<ToolOutlined />}>Maintenance</Menu.Item>
          <Menu.Item key="6" icon={<PieChartOutlined />}>Reports</Menu.Item>
          <Menu.Item key="7" icon={<SettingOutlined />}>Settings</Menu.Item>
        </Menu>
      </Sider>
      
      <Layout>
        <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Title level={4} style={{ margin: 0 }}>Owner Dashboard</Title>
          <Space size={24}>
            <Badge count={5}>
              <BellOutlined style={{ fontSize: 20 }} />
            </Badge>
            <Avatar icon={<UserOutlined />} />
          </Space>
        </Header>

        <Content style={{ margin: '24px', minHeight: 280 }}>
          <Row gutter={[24, 24]}>
            {overviewData.map((item, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card>
                  <Statistic
                    title={
                      <Space>
                        {item.icon}
                        <span>{item.title}</span>
                      </Space>
                    }
                    value={item.value}
                    suffix={
                      <Text type={item.trendUp ? 'success' : 'danger'} style={{ fontSize: 14 }}>
                        {item.trend}
                        {item.trendUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                      </Text>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <Card style={{ marginTop: 24 }}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Properties Overview" key="1">
                <Table 
                  columns={propertyColumns} 
                  dataSource={properties}
                  pagination={false}
                />
              </TabPane>
              <TabPane tab="Financial Summary" key="2">
                <Row gutter={[24, 24]}>
                  <Col span={16}>
                    <Card title="Monthly Financial Breakdown">
                      <Row gutter={[16, 16]}>
                        <Col span={8}>
                          <Statistic
                            title="Total Revenue"
                            value={financialSummary.totalRevenue}
                            prefix="$"
                            valueStyle={{ color: '#3f8600' }}
                          />
                        </Col>
                        <Col span={8}>
                          <Statistic
                            title="Total Expenses"
                            value={Object.values(financialSummary.expenses).reduce((a, b) => a + b, 0)}
                            prefix="$"
                            valueStyle={{ color: '#cf1322' }}
                          />
                        </Col>
                        <Col span={8}>
                          <Statistic
                            title="Net Income"
                            value={financialSummary.netIncome}
                            prefix="$"
                            valueStyle={{ color: '#1890ff' }}
                          />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Performance Metrics">
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Statistic
                          title="Occupancy Rate"
                          value={financialSummary.occupancyRate}
                          suffix="%"
                        />
                        <Progress percent={financialSummary.occupancyRate} />
                        <Statistic
                          title="Rent Collection Rate"
                          value={financialSummary.rentCollection}
                          suffix="%"
                        />
                        <Progress percent={financialSummary.rentCollection} status="success" />
                      </Space>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Card>

          <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
            <Col xs={24} lg={16}>
              <Card title="Recent Transactions">
                <Table 
                  columns={transactionColumns} 
                  dataSource={transactions} 
                  pagination={false}
                />
              </Card>
            </Col>
            
            <Col xs={24} lg={8}>
              <Card title="Maintenance Requests">
                <List
                  itemLayout="horizontal"
                  dataSource={maintenanceRequests}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Badge status={
                          item.priority === 'High' ? 'error' : 
                          item.priority === 'Medium' ? 'warning' : 
                          'success'
                        } />}
                        title={item.title}
                        description={
                          <Space>
                            <HomeOutlined /> {item.property}
                            <CalendarOutlined /> {item.date}
                          </Space>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;