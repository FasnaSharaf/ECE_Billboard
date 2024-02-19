import React from 'react';
import '../Styles/Card.css';
function Card(props){
    const { name, description,url } = props;
    return (
        <div class="card-container">
        <a href="/" class="hero-image-container">
          <img class="hero-image" src={url} alt="Spinning glass cube"/>
        </a>
        <main class="main-content">
          <h1>{name}</h1>
          <p>{description}</p>
        </main>
      </div>
    );
};
export default Card;
