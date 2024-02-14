import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import '../Styles/Carousal.css';
function CarouselCustom({records}) {
  return (
    <Carousel>
      {records.map(record => (
        // Check if imageUrl is valid before rendering Carousel.Item
        record.imageUrl && (
          <Carousel.Item key={record.name} className='carousalItem'>
            <Image src={record.imageUrl}></Image>
            <Carousel.Caption>
              <div className='textCarousal'>
              <h3>{record.name}</h3>
              <p>{record.description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        )
      ))}
    </Carousel>
  );
}

export default CarouselCustom;