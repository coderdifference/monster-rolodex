import React from 'react';
import './card.styles.css';

export const Card = props => 
    <div className="card-container">
        <h1 className="card-title">{props.cardData.title}</h1>
        <img className="card-image" src={`http://robohash.org/${props.cardData.id}?set=set4&size=180x180`} alt={props.cardData.title} />
        <p className="card-motto"><strong>Motto: </strong>{props.cardData.motto}</p>
    </div>;