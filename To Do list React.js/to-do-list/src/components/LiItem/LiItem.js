import React from 'react';
export default function LiItem({content}){
    return(
        <li class="list-group-item">{content} <button class="btn btn-danger btn-sm float-right delete">X</button></li>
    )
}