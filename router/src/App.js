
import {React, useState } from 'react'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Products'
import TopMenu from './components/Menu';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [product, setProduct] = useState(false);

  const onClick = (x) => {
    console.log('on app click ', x);
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
    <div>
      {home ? (<Home menu={TopMenu} onClick={onClick} />) : (<></>)}
      {about ? (<About menu={TopMenu} onClick={onClick} />) : (<></>)}
      {contact ? (<Contact menu={TopMenu} />) : (<></>)}
      {product ? (<Product menu={TopMenu} />) : (<></>)}
    </div>
  );
}

export default App;