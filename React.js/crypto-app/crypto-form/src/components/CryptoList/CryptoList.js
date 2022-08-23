import React, { useState } from "react";
import CloseButton from "../CloseButton/CloseButton";
import List from "../List/List";
import './CryptoList.css'
// export default function CryptoList({props, clickedFunc}){

    export default function CryptoList({props, stateOfParent}){
       

    // let b = props[Object.keys(props)[0]]
    // console.log('ovo je',props.props);
    // const [item, setItem] = useState(props.props);
    // console.log('item: ', item)
   // setItem((prev)=>[prev, ...b]);

        
//    const deleteItem = (list,id) =>{
//     const newListItems = list.filter((element)=>element.id !== id);
//     setState(newListItems);
//   }
// function curry(f) { // curry(f) does the currying transform
  
//     return function(b) {
//       return f(b);
//     };
  
// }
const deleteList = (state,stateOfParent, id) =>{
          const newList = state.filter((list)=>list.id !== id);
          stateOfParent(newList);
        }
const showMore = ()=>{
    
}
// const hajde = curry(clickedFunc);
// console.log('hajde',hajde)

//    console.log('clickedFunc',clickedFunc);
    return(
        
        <ul>
            <h4>CryptoListItems</h4>
            {
                props.map((e, i, array)=>(
                    // <li key={e.id}>
                    //     <div className="addedItem"><span>{e.name}</span> <span>${e.amount}</span></div>
                        
                    //     {/* <button 
                    //         onClick={()=>{array.setState(array.filter((el, i, arr1)=> {return el.id!==e.id}))
                    //         }}>
                    //     x
                    //     </button> */}
                    //     {/* <button onClick={()=>{const hajde = curry(clickedFunc); hajde(e.id)}}>
                    //     x
                    //     </button> */}
                    //     {/* <CloseButton onClickFun={()=>{const hajde = curry(clickedFunc); hajde(e.id)}} /> */}
                    //     <CloseButton onClickFun={()=>{deleteList(props, stateOfParent, e.id)} }/>
                    // </li>
                    
                    <List key={e.id} k={e.id} name={e.name} amount={e.amount} state={props} stateOfParent={stateOfParent} isChangedShow={e.isActiveShow}/>
                )) 
            }
    </ul>
    )
}