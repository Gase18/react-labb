import React from "react";
import "./DiceLabb.css";

function DiceValue(props){
    return <p>{props.value}</p>
}

export function MyDices(props){

    const [RedCounter, setRedCounter] = React.useState(0);
    const [BlueCounter, setBlueCounter] = React.useState(0);
    const [GreenCounter, setGreenCounter] = React.useState(0);
    

    function RedDice(){
        let number = 1 + Math.floor(Math.random()*6);

        setRedCounter(number);
    }
    function BlueDice(){
        let number = 1 + Math.floor(Math.random()*6);

        setBlueCounter(number);
    }
    function GreenDice(){
        let number = 1 + Math.floor(Math.random()*6);

        setGreenCounter(number);
    }
  

    return <div>
        <button id="RedDice" onClick= {RedDice}> <DiceValue value={RedCounter}/></button>
        <button id="BlueDice" onClick= {BlueDice}> <DiceValue value={BlueCounter}/></button>
        <button id="GreenDice" onClick= {GreenDice}> <DiceValue value={GreenCounter}/></button>        
        </div>
}

