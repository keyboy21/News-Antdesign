import React from 'react'
import HeaderC from './Header';
import FooterC from './FooterC';
import { Layout } from 'antd';
const { Content } = Layout;

type props = {
  children: React.ReactNode
}

const MainLayout: React.FC<props> = ({ children }) => {
  return (
    <Layout>
      <HeaderC />
      <Content style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {children}
      </Content>
      <FooterC />
    </Layout>
  )
}

export default MainLayout