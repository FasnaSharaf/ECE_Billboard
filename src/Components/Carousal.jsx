import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Airtable from 'airtable';
import '../Styles/Carousal.css';
function CarouselCustom() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    var base = new Airtable({apiKey: 'patEIftf6ErouVFwc.f3085100c905da7b0bf5336990947424495795a0b4b0c4ec735384678ca7021e'}).base('app3s7iPWjKOvxwVy');

    base('Carousal').select({
        maxRecords: 3,
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
        if (err) { console.error(err); return; }
    });
  }, []);
  return (
    <Carousel>
      {records.map(record => (
        // Check if imageUrl is valid before rendering Carousel.Item
        record.imageUrl && (
          <Carousel.Item key={record.name} className='carousalItem'>
            <Image src={record.imageUrl}></Image>
            <Carousel.Caption>
              <h3>{record.name}</h3>
              <p>{record.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      ))}
    </Carousel>
  );
}

export default CarouselCustom;