import React from 'react';
import Nike from './Components/Nike';
import Home from './Components/Home';
import './App.css';
import Navbar from './Components/Navbar'
import Strip from './Components/Strip'
import Eyes from './Components/Eyes'
import AllShoes from './Components/AllShoes';
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='container2'>
      < div clasName='section3' >
      <Navbar/>
      </div>
      <div className='section1'>
        <div style={{height:"80vh"}}>
        <Home />
        </div>
        <div style={{height:"20vh"}}>
          <Strip/>
        </div>

      </div>
      <div className='section2'>
        <Nike />
      </div> 
      <div className='section4'>
      <AllShoes/>
      </div>
      <div className='section5'>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
