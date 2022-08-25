import './Weather.css';
import React,{useState} from 'react';

export default function Weather(){
    const [weather, setWeather] = useState(['cold', 'cool', 'warm', 'warm to hot']);
    const [temperature, setTemperature] = useState(0);

    function getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
    let classForBckgrndImg = 'weatherApp-container';
    if(temperature <= 4){
        classForBckgrndImg += ' cold';
    }else if(temperature >4 && temperature <= 20){
        classForBckgrndImg += ' warm';
    }else if(temperature > 20){
        classForBckgrndImg += ' warm-to-hot';
    }
    return(
        
        <div className={classForBckgrndImg}>
            <h1 className="temperature">{temperature}</h1>
            {temperature <= -10 ? <div className="attention">Freezing</div> :  temperature >= 33 ?  <div className="attention" >To hot</div> : <div className="attention" >It's cool</div>}
            <div className="temperatureGenerator" onClick={()=>{setTemperature(getRandomArbitrary(-20, 40))}}>Generate temperature</div>
        </div>
    )
}