import React, {useState} from 'react';
import CryptoList from '../CryptoList/CryptoList';
import './CryptoForm.css'
let ides  = 0;// id generator
const Valutes = [{id:0, name: 'dollar', amount:'1', isActiveShow:false, description:'USD valute'}];
export default function CryptoForm(){
    
    const [valute, setValute] = useState({name:'', amount: '', description:''});
    const [list, setList] = useState(Valutes);
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
                    <input className='inputAdd' onFocus={(e)=>{e.target.value='';}}  defaultValue = 'Valute...' onChange = {e=>setValute((prev)=>({...prev, name: e.target.value}))}/>
                    <input className='inputAdd' onFocus={(e)=>{e.target.value='';}} defaultValue='Amount...' amount={valute.amount} onChange={(e)=>{setValute((prev)=>({...prev, amount: e.target.value}))}}/>
                
                </div>
                
                
            </div>
            <input className='inputAdd description' onFocus={(e)=>{e.target.value='';}} description={valute.description} defaultValue='Description...' onChange={(e)=>{setValute((prev)=>({...prev, description: e.target.value}))}}/>
            <button className='addButton' onClick={()=>{
                    setList((list)=>[...list, {id: ides++, name: valute.name, amount: valute.amount, isActiveShow:false, description: valute.description}]);
                    setValute({name:'', amount:'', description: ''});
                    }}>
                    Add
            </button>
            
            
            {/* <ul>
                {list.map((e, i)=>(
                    <li key={e.id}>
                        name:{e.name} value: {e.amount}
                        <button onClick={()=>{deleteList(e.id)}}>delete</button>
                    </li>
                ))}
                value name : {valute.name} value amaount:{valute.amount} valute id{valute.id}
                
            </ul> */}
            {/* <CryptoList props ={list} clickedFunc={(el)=>{deleteList(el)}}/> */}{/*u Crypto.list.js pozivamofju onclick={()=>{clickedFunc
                (e.id)}} */}
            <CryptoList props ={list} stateOfParent={setList} description={list.description}/>
                
            
            
    
        </div>
        

    )
}