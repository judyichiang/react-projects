import React from 'react';
import './card-lis.styles.css'

export const CardList = (props) => {
  // console.log(props)
  return (
  // <div><h1>{props.children}</h1></div>
  <div className="card-list">{props.children}</div>
  )
}
