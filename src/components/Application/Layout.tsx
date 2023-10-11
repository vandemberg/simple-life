import React, { ReactNode } from "react";
import { Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";

const projects = ["Painel", "C2S"].map((key) => ({
  key,
  label: `${key}`,
}));

interface LayoutProps {
  children: ReactNode;
}

const { Header, Content, Footer } = Layout;
const App: React.FC<LayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ width: "100%", height: "100%" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={projects}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
            >
              <Menu.Item key="team">
                <Link to="/teams/1/members">Members</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Sistema do berg
      </Footer>
    </Layout>
  );
};

export default App;
