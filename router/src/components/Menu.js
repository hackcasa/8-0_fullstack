import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: 'About',
    key: 'about',
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
const TopMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);

  const onClick = (x) => {
    console.log('click ', e);
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
    <div>{home ? (<div>This is home page</div>) : (<></>)}</div>
    <div>{about ? (<div>This is about page</div>) : (<></>)}</div>
    <Menu onClick={onClick} selectedKeys={[selectedMenu]} mode="horizontal" items={items} />
    </>
  
  );
};
export default TopMenu;
