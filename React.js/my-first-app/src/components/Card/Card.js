
import React from 'react';
import './Card.css';
const Card  = ({src, name, occupation, verification})=>{
    return(
        <div className="card">
  <img src={src} alt="Avatar"/>
  <div className="container">
    {/* <h4>{verification ? <b>{name}✓</b>: <b>{name}</b>}</h4>  prvi nacin kondicionala */}
    <h4>{name}{verification && '✓'}</h4>
    <p>{occupation}</p> 
  </div>
</div>
    )
}
export default Card;