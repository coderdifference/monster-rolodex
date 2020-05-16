import React from 'react';
import './card.styles.css';

export const Card = ({cardData}) => 
    <div className="card-container">
        <h1 className="card-title">{cardData.title}</h1>
        <img className="card-image" src={`http://robohash.org/${cardData.id}?set=set4&size=180x180`} 
            alt={cardData.title} />
        <p className="card-motto"><strong>Motto: </strong>{cardData.motto}</p>
    </div>;