import React from 'react';
import { useState,useEffect } from 'react';
import Airtable from 'airtable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Billboard from './Components/Billboard';
import NavCustom from './Components/Navbars';
import Footer from './Components/Footer';
import Card from './Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
const CarouselCustom = React.lazy(()=> import('./Components/Carousal'));

function App() {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
    useEffect(() => {
    var base = new Airtable({apiKey: 'patEIftf6ErouVFwc.f3085100c905da7b0bf5336990947424495795a0b4b0c4ec735384678ca7021e'}).base('app3s7iPWjKOvxwVy');

    base('Carousal').select({
        maxRecords: 10,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        const updatedRecords = [...records, ...records.map(record => ({
          name: record.get('name'),
          description: record.get('description'),
          tag: record.get('tag'),
          imageUrl: record.get('imageUrl')[0].url
        }))];

        setRecords(updatedRecords);
        fetchNextPage();

    }, function done(err) {
        if (err) { setLoading(false);console.error(err); return; }
        setLoading(false);
    });
  }, []);




  return (
    <div>{
    <div className="App" style={{ backgroundColor: 'black', maxWidth: '100vw' }}>
        <div id="top" style={{ height: 0 }}/>
        <NavCustom className="sticky-nav"></NavCustom>
        <CarouselCustom data={records}/>   
      <main>
        <Card name="test" description="test2" url="www.google.com"></Card>
        <Router>
          <Routes>
            <Route path="/" element={<Billboard />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
      }
    </div>
  );
}

export default App;
