import React from 'react';
import { Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

const Home = (props) => (
  // console.log(props.menu)
  <>
    <Layout>
      <Header style={{backgroundColor:"white"}}>
        {props.menu({onClick:props.onClick})}
      </Header>
      <Content style={{backgroundColor:"lightgray"}}> This is home content</Content>
      <Footer style={{height:200}}>Footer</Footer>
    </Layout>
  </>
);
export default Home;










