import React,{useState} from "react";
export default function Team({name, points, onDelete}){
    return(
        <>
            <p>{name}:{points}<button onClick={onDelete}>x</button></p><br />
        </>
    )
}