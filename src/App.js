import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Billboard from './Components/Billboard';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Prop from './Components/Prop';
import Sm from './Components/Socialmedia';
import Oppam from './Components/Oppam';
import './Styles/App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#e4c0cb', maxWidth: '100vw' }}>
      <Prop />
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Billboard />} />
            <Route path="/oppam" element={<Oppam />} />
          </Routes>
        </Router>
      </main>
      <Footer />
      <Sm />
    </div>
  );
}

export default App;
