import React from 'react';
import Billboard from './Components/Billboard';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Prop from './Components/Prop';
import Sm from './Components/Socialmedia';
import './Styles/App.css';

function App() {
  return (
      <div className="App" style={{backgroundColor:'#e4c0cb',maxWidth:'100vw'}}>
        
          <Sm />
          <Prop />
          <Header />
          
          <main>
              <section className="billboard">
                  <Billboard />
              </section>
          </main>

          <Footer />
      </div>
  );
}
export default App;