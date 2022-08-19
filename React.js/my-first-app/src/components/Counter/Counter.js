import React, {useState} from "react";
export default function Counter(){
    const inititalCount = 0;
    const [count, setCount] = useState(inititalCount);
    return(
        <>
            <button onClick={()=>setCount(inititalCount)}>Reset</button>
            <button onClick={(prev)=>setCount(prev=>prev + 1)}>+</button>
            <button onClick = {(prev)=>setCount(prev=>prev - 1)}>-</button>
            <p>{count}</p>
        </>
        
    )
}
