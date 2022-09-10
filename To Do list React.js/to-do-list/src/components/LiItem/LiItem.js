import React from 'react';
export default function LiItem({content}){
    const item = document.getElementById('items');
   const  deleteItem = (e) =>{
        // let parent = e.target.parentElement;
        //  item.removeChild(parent);
        // console.log(parent);
        alert(e.target);
    }
    return(
        <li className="list-group-item">{content} <button className="btn btn-danger btn-sm float-right delete" onClick = {deleteItem}  >X</button></li>
    )
}