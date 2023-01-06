import React from 'react';
import { Layout } from 'antd';
// import TopMenu from './Menu';


const { Header, Footer, Sider, Content } = Layout;

const About = (props) => (
  <>
    <Layout>
      <Header style={{backgroundColor:"white"}}>
        {/* <TopMenu /> */}
        {props.menu({onClick:props.onClick})}
      </Header>
      <Content style={{backgroundColor:"lightgray"}}>this is about page</Content>
      <Footer style={{height:200}}>Footer</Footer>
    </Layout>
  </>
);
export default About;


