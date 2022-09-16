import React from 'react'
import { Layout } from 'antd';
const { Header } = Layout;
const HeaderC: React.FC = () => {
  return (
      <Header style={{backgroundColor:"gold",marginBottom:"50px"}}><h1>Hello React and Antd</h1></Header>
  )
}

export default HeaderC