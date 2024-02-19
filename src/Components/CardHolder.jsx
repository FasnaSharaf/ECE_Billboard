import React from "react";
import '../Styles/CardHolder.css'; // Import CSS for styling

import Card from './Card.jsx';

function CardHolder({records}) {
  return (
    
    <div className="section_cards">
    <div className="title_cards">Gallery</div>
    <div className="cards">
    <ul className="card_holder">
    {records.map(record => (
        // Check if imageUrl is valid before rendering Carousel.Item
        record.imageUrl && (
          <Card url={record.imageUrl} name={record.name} tag={record.tag} description={record.description}></Card>
          )
      ))}
     
    </ul>
    </div>
    </div>
  );
}

export default CardHolder;