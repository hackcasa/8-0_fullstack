import React, {Link, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: (
      <a href="/about" rel="noopener noreferrer">
        about
      </a>
    ),
    key: 'About',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: 'Service',
    key: 'serv',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: 'Products',
    key: 'product',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        ext_link
      </a>
    ),
    key: 'ext_link',
  },
];
const TopMenu = (props) => {
  console.log(props)
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);

  const onClick = (x) => {
    console.log('click ', x);
    setSelectedMenu(x.key);

    if(x.key == 'about'){
        setAbout(true)
        setHome(false)
    }
    if(x.key == 'home'){
        setAbout(false)
        setHome(true)
    }
  };

  return (
    <>
    {/* <div>{home ? (<div>This is home page</div>) : (<></>)}</div>
    <div>{about ? (<div>This is about page</div>) : (<></>)}</div> */}
    {/* <Menu onClick={props.onClick} selectedKeys={[selectedMenu]} mode="horizontal" items={items} /> */}
    <Menu selectedKeys={[selectedMenu]} mode="horizontal" items={items} />
    </>
  
  );
};
export default TopMenu;

