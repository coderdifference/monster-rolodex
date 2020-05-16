import React from 'react';
import './filter-box.styles.css';

export const FilterBox = ({placeholder, onChange}) => 
    <input className='filter-box' placeholder={placeholder} type="text" onChange={onChange}/>;