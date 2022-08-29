import React,{useState} from "react";
import Item from "../Item/Item";
import './PostsItems.css';

export default function Postitem({postItems}){
    const [showMore, setShowMore]= useState(false);
    function showMoreFunc(id, prev){
        if(prev===id){
            setShowMore(prev=>!prev)
        }else{
            setShowMore(false);
        }
    }
    
    return(
        <ul>
            {
                postItems.map((post, i, array)=>
                        <Item key={post.id} ident={post.id} title={post.title} description={post.body} showBtn={showMore} showBtnFunc={() =>
                            setShowMore((prevValue) => {
                              if (prevValue === post.id) {
                                return false;
                              } else{
                                return post.id;
                              }
                            })}/>

                )
              
            }
        </ul>
    )

}