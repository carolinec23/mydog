
import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
// import { SmoothProvider } from 'react-smooth-scrolling';
import { SliderData } from './data/SliderData';
import { ContentData, ContentDataTwo } from './data/ContentData';
import Dropdown from './components/Dropdown';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* <SmoothProvider> */}
        <GlobalStyle />
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Hero slides={SliderData}/>
        <Content {...ContentData}/>
        <Content {...ContentDataTwo}/>
        <Footer />
      {/* </SmoothProvider> */}
    </>
  );
}

export default App;
