
import React from 'react';
import './Card.css';
const Card  = ({src, name, occupation})=>{
    return(
        <div className="card">
  <img src={src} alt="Avatar"/>
  <div className="container">
    <h4><b>{name}</b></h4> 
    <p>{occupation}</p> 
  </div>
</div>
    )
}
export default Card;