import React from 'react'; //standardna biblioteka koja se koristi za React.js
import './Title.css'
const Title =({name, age})=>{
    //ovde ide logika, tj, cela logika je iznad return
    return <h3 className = 'title'>Zdravo {name}, imas {age}</h3>;
}
export default Title;