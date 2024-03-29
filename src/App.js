import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Billboard from './Components/Billboard';
import NavCustom from './Components/Navbars';
import Footer from './Components/Footer';
import Oppam from './Components/Oppam';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import CarouselCustom from './Components/Carousal';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#e4c0cb', maxWidth: '100vw' }}>
        <div id="top" style={{ height: 0 }}/>
        <NavCustom className="sticky-nav"></NavCustom>
        <CarouselCustom/>   
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Billboard />} />
            <Route path="/oppam" element={<Oppam />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
