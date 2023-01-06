import React from 'react';
import { Layout } from 'antd';
import TopMenu from './Menu';


const { Header, Footer, Sider, Content } = Layout;

const Product = () => (
  <>
    <Layout>
      <Header style={{backgroundColor:"white"}}>
        <TopMenu />
      </Header>
      <Content style={{backgroundColor:"lightgray"}}>This is product page</Content>
      <Footer style={{height:200}}>Footer</Footer>
    </Layout>
  </>
);
export default Product;


