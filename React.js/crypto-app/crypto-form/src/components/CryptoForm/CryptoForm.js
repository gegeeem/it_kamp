import React, {useState} from 'react';
import CryptoList from '../CryptoList/CryptoList';
import './CryptoForm.css'
let ides  = 0;// id generator
export default function CryptoForm(){
    
    const [valute, setValute] = useState({name:'', amount: ''});
    const [list, setList] = useState([{id:0, name: 'dollar', amount:'1'}]);
    // const clsBtn = (el)=>{
    //     setList(
    //         el.filter(a =>
    //           a.id !== list.id
    //         )
    //       )
    //    }
    
    
// const deleteList = (id) =>{
//   const newList = list.filter((list)=>list.id !== id);
//   setList(newList);
// }
// const deleteList = (id) =>{
//       const newList = list.filter((list)=>list.id !== id);
//       setList(newList);
//     }
    return(
        <div className='cryptoForm'>
            <h2>CryptoForm</h2>
            <div className='input-container'>
                <div className='inputs'>
                <input className='inputAdd' onFocus={(e)=>{e.target.value='';}}  defaultValue = {valute.name} onChange = {e=>setValute((prev)=>({...prev, name: e.target.value}))}/>
                <input className='inputAdd' onFocus={(e)=>{e.target.value='';}} amount={valute.amount} onChange={(e)=>{setValute((prev)=>({...prev, amount: e.target.value}))}}/>
                </div>
                
                <button className='addButton' onClick={()=>{
                setList((list)=>[...list, {id: ides++, name: valute.name, amount: valute.amount}]);
                setValute({name:'', amount:''});
                }}>
                    Add
            </button>
            </div>
            
            
            {/* <ul>
                {list.map((e, i)=>(
                    <li key={e.id}>
                        name:{e.name} value: {e.amount}
                        <button onClick={()=>{deleteList(e.id)}}>delete</button>
                    </li>
                ))}
                value name : {valute.name} value amaount:{valute.amount} valute id{valute.id}
                
            </ul> */}
            {/* <CryptoList props ={list} clickedFunc={(el)=>{deleteList(el)}}/> */}
            <CryptoList props ={list} stateOfParent={setList}/>
                
            
            
    
        </div>
        

    )
}