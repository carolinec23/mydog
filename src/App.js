import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Questions from './pages/Questions';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/dogs" component={Gallery} />
          <Route path="/faq" component={Questions} />
          <Route path="/services" component={Services} />
        </Switch>
        <Footer />
      </Router>  
    </>
  );
}

export default App;
