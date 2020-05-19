import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange}) => {

  return (
    <div><i className="mag-glass fas fa-search fa-2x"> </i>
      <input className="search" type="search" placeholder={placeholder}
        onChange={handleChange}
      />
    </div>

  )
}
