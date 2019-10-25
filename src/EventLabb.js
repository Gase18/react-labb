import React from "react";


function Display(props){
    return <p>Nuvarande Värde:{props.value}</p>
}

export function EventLabb(props){

    const [counter, setCounter] = React.useState(2);


    function increase(){
        setCounter(Math.random()*6);
    }
    function decrease(){
        setCounter(counter -1);
    }


    return <div>

        <Display value={counter}/>
        <button onClick= {increase}>Öka!</button>
        <button onClick= {decrease}>Minska!</button>
        
        
        
        </div>
}