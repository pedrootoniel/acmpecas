import React from 'react';
import Header from './Components/Header'
import Home from './Components/Home'
import Singup from './Pages/Singup'
import Footer from './Components/Footer'
import Global from './Global'
import About from './Components/About'


function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <About />
      <Home />
    <Singup />
    <Footer />
    </div>
  );
}

export default App;
