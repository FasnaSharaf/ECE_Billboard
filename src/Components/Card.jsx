import React from 'react';
import '../Styles/Card.css';
function Card(props){
    const { name, description,url,tag } = props;
    return (
      <li>
      <a href="" class="card">
        <img src={url} class="card__image" alt="" />
        <div class="card__overlay">        
          <div class="card__header">            
            <div class="card__header-text">
              <h3 class="card__title">{name}</h3>
              <span class="card__status">{tag}</span>
            </div>
          </div>
          <p class="card__description">{description}</p>
        </div>
      </a>
    </li>
    );
};
export default Card;
