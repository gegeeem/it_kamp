import React from "react";
import './CloseButton.css';
export default function CloseButton({onClickFun}){
    return(
        <div className="CloseBtn" onClick={onClickFun}><span>x</span></div>
    )

}