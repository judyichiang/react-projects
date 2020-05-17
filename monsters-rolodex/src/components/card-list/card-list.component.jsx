import React from 'react';
import './card-lis.styles.css'

export const CardList = (props) => {
  console.log(props)
  return (
  // <div><h1>{props.children}</h1></div>
  <div className="card-list">
  {props.monsters.map(monster => (
    <h1 key={monster.id}>{monster.name}</h1>
  ))}

  </div>
  )
}
