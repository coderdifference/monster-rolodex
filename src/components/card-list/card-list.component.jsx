import React from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.css';

// Since card-list will be a display component without any state of it's own
// we can use a functional component
export const CardList = ({cards}) => {
    return <div className="card-list">
         {cards.map((card) => (
            <Card cardData={card} key={card.id}/>
          ))}
    </div>;
};
