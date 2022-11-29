import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "bulma/css/bulma.min.css";
import React from 'react';
import Global from './Global'
import Header from './Components/Header'
import About from './Components/About'
import Home from './Components/Home';
import Singup from './Pages/Singup'
import Footer from './Components/Footer'

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <About />
      <Home />
      <Singup />
      <Footer />
      <Global />
    </Router>

  );
}

export default App;
