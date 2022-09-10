import React from "react";
import './Card.css';
export default function Card(props){
    const {src, nameOf, grade,typeOfAprtmnt, price} = props;
    return(
        <div className="Card">
            <div className = 'Image'><img alt='' src={src}/></div>
            <div className="Content">
                <div className="Title">
                    <div className ='NameOf'><h3>{nameOf}</h3></div>
                    <div className="Grades">{grade}</div>
                </div>
                <div className="Description">
                    <div className="TypeOfAprtmnt">{typeOfAprtmnt}</div>
                    <div className="Price"><span>RSD {price}</span></div>

                </div>
                
            </div>
        </div>
    )
    
}