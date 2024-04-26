import React from "react";
import '../Styles/Gallery.css'; // Import CSS for styling

import Card from './Card.jsx';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Gallery({records}) {

  const settings = {
    accessibility:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{
      width:"80vh", margin: "0 auto"
    }} >
      <Slider {...settings}>
    
    {records.map(record => (
      // Check if imageUrl is valid before rendering Carousel.Item
      record.imageUrl && (
        <div key={record.name} style = {{height: "450px"}}>
          <div >
          <Card url={record.imageUrl} name={record.name} tag={record.tag} description={record.description}></Card>
          </div>

          
        </div>
        
        )
    ))}
    </Slider>
      
      
    </div>
    
    // <div className="section_cards gallery">
    // <div className="title_cards"><h1>GALLERY</h1></div>
    // <div className="cards">
    // <ul className="card_holder">
    // {records.map(record => (
    //     // Check if imageUrl is valid before rendering Carousel.Item
    //     record.imageUrl && (
    //       <Card url={record.imageUrl} name={record.name} tag={record.tag} description={record.description}></Card>
    //       )
    //   ))}
     
    // </ul>
    // </div>
    // </div>
  );
}

export default Gallery;