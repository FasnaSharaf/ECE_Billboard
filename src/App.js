import React from 'react';
import { useState,useEffect } from 'react';
import Airtable from 'airtable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Components/Gallery';
import NavCustom from './Components/Navbars';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import CarouselCustom from './Components/Carousal';
import Billboard from './Components/Billboard';
import LoadingScreen from './Components/Loading';
function App() {
  const [carousalItems, setCarousal] = useState([]);
  const [galleryItems, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var base = new Airtable({apiKey: 'patEIftf6ErouVFwc.f3085100c905da7b0bf5336990947424495795a0b4b0c4ec735384678ca7021e'}).base('app3s7iPWjKOvxwVy');
    base('Carousal').select({
        maxRecords: 10,
        view: "Grid view"
      }).eachPage(function page(carousalItems, fetchNextPage) {
        const updatedCarousalItems = [...carousalItems, ...carousalItems.map(record => ({
          name: record.get('name'),
          description: record.get('description'),
          tag: record.get('tag'),
          imageUrl: record.get('imageUrl')[0].url
        }))];

        setCarousal(updatedCarousalItems);
        fetchNextPage();

    }, function done(err) {
        setLoading(false);
        if (err) { console.error(err); return; }
    });

    base('Gallery').select({
      maxRecords: 10,
      view: "Grid view"
  }).eachPage(function page(galleryItems, fetchNextPage) {
      const updatedGalleryItems = [...galleryItems, ...galleryItems.map(record => ({
        name: record.get('name'),
        description: record.get('description'),
        tag: record.get('tag'),
        imageUrl: record.get('imageUrl')[0].url
      }))];
  
      setGallery(updatedGalleryItems);
      fetchNextPage();
  
  }, function done(err) {
      setLoading(false);
      if (err) { console.error(err); return; }
  });
  }, []);

  return (
    <div>
      {loading ? (
      <div className="loader-container">
          <LoadingScreen/>
      </div>
    ) : (
      <div className="App" style={{ backgroundColor: 'black', maxWidth: '100vw' }}>
      <div id="top" style={{ height: 0 }}/>
      <NavCustom className="sticky-nav"></NavCustom> 
    <main>
      <Router>
        <Routes>
          <Route path="/" element={
          <div className='wrapper_home'>
          <CarouselCustom records={carousalItems}/> 
          <Gallery records={galleryItems}/>
          <Billboard></Billboard>
          </div>
          } />
        </Routes>
      </Router>
    </main>
    <Footer />
    </div>
    )}
    </div>
  );
}

export default App;

