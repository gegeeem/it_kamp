import React,{useState} from "react";
import CloseButton from "../CloseButton/CloseButton";
import './List.css'
export default function List({state, k, name, amount, stateOfParent, isChangedShow, description}){

    //const [isActiveShow, setIsActiveShow] = useState(false);
    const deleteList = (state,stateOfParent, id) =>{
        const newList = state.filter((list)=>list.id !== id);
        stateOfParent(newList);
      }

      const showMore = (state, stateOfParent, id)=>{
        const newShow = state.map((e)=>{
            if(e.id===id){
                e.isActiveShow = !e.isActiveShow
                return e;
            }else{
                e.isActiveShow = false;
                return e;
            }
        }
        
        );
        stateOfParent(newShow);
    }
    return(
        
        <li key={k}>
                        {/* <div className="addedItem"><span>{name}</span> <span>${amount}<button onClick={()=>{showMore(state,stateOfParent, k)}}>Show more</button></span></div> */}
                        {/* <div isActiveShow={isChangedShow} className={isActiveShow ?'showActive' : 'showNotActive'}>Opis</div>  */}
                        {/* {console.log(isActiveShow)} */}
                        <div className="item-container">
                            <div className="addedItem">
                                <span>{name}</span> 
                                <span>${amount}
                                <button className="btnShow" onClick={()=>{showMore(state, stateOfParent, k)}}>
                                    {isChangedShow ? <i className="arrow up"></i>: <i className="arrow down"></i>}
                                </button></span>
                            </div>
                            <CloseButton onClickFun={()=>{deleteList(state, stateOfParent, k)} }/>
                        </div>
                        
                        <div className={isChangedShow ?'showActive' : 'showNotActive'}>{description}</div> 

                        
        </li>
    )
}