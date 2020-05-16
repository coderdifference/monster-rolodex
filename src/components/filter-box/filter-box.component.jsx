import React from 'react';
import './filter-box.styles.css';

export const FilterBox = props => 
    <input className='filter-box' placeholder={props.placeholder} type="text" onChange={props.onChange}/>;