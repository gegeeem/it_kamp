import './Weather.css';
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Weather(){
    const [temperature, setTemperature] = useState(0);

    function getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
    let classForBckgrndImg = '';
    if(temperature <= 4){
        classForBckgrndImg += ' cold';
    }else if(temperature >4 && temperature <= 20){
        classForBckgrndImg += ' cool';
    }else if(temperature > 20){
        classForBckgrndImg += ' warm-to-hot';
    }
    return(
        
        <div className={'weatherApp-container' + classForBckgrndImg}>
            <div className='weatherInfo'>
            <h2>
                Novi Pazar
                <div className='mapIcon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" ><path className='svgMap' d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
                </div>
                <FontAwesomeIcon icon="fas fa-map-marker-alt" />

            </h2>
            <h1 className="temperature">{temperature}ºC</h1>
            {
                 temperature <= -10 ? <div className="attention">Attention! Freezing Cold</div> :  
                 temperature >= 33 ?  <div className="attention" >Attention! The weather is tropical</div> : ''
             }

         </div>
            
            <div className="temperatureGenerator" onClick={()=>{setTemperature(getRandomArbitrary(-20, 40))}}>Generate temperature</div>
        </div>
    )
}