import React from 'react';
import './card-list.styles.css';

// Since card-list will be a display component without any state of it's own
// we can use a functional component
export const CardList = props => (<div className="card-list">{props.children}</div>);
