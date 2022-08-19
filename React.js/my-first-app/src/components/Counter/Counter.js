import React, {useState} from "react";
export default function Counter(sharedState){
    const inititalCount = 0;
    const [count, setCount] = useState(inititalCount);
    if(!sharedState){
        setCount(0);
    }
    return(
        <>
            <button onClick={()=>setCount(inititalCount)}>Reset</button>
            <button onClick={(prev)=>setCount(prev=>prev +1)}>+</button>
            {/* {sharedState ?  setCount(inititalCount) : undefined} */}
            <p>{count}</p>
            <button onClick = {(prev)=>setCount(prev=>prev - 1)}>-</button>
            
        </>
        
    )
}
