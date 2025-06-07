import React, { useState } from 'react'

const StateExample = () => {
    // let count = 5;
    const [count,setCount]=useState(5);
    const handleClick = () => {
        // count=count+1
        // count =5
        setCount(count+2) //6
        console.log("clicked",count+2) //count 5
    }
    return (
        <div>
            <h1>count {count}</h1>
            <button onClick={handleClick}>increase count</button>
        </div>
    )
}

export default StateExample
