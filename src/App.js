import React from 'react';
import Billboard from './Components/Billboard';
import NavCustom from './Components/Navbars';
import Footer from './Components/Footer';
import Sm from './Components/Socialmedia';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';

function App() {
  return (
      <div className="App" style={{backgroundColor:'#e4c0cb'}}>
            <div id="top" style={{ height: 0 }}/>
        <NavCustom className="sticky-nav"></NavCustom>
          <main>
              <section className="billboard">
                  <Billboard />
              </section>
          </main>

          <Footer />
          <Sm />
      </div>
  );
}
export default App;