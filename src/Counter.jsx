import React, { useState } from 'react'

const Counter = () => {

    const [count,Setcount] = useState(0);

    const incrementCount =  () =>{
        Setcount(count + 1);
    }

    
    const decrementCount =  () =>{
        if(count>0){
            Setcount(count - 1);
        }
        else{
            alert('The counter is out of range')
        }
    }

  return (
    <div>

        <h1>Counter App </h1>

        <div>
            <button onClick={decrementCount}>-</button>
            <input type="text" value={count}  name="" id="" />
            <button onClick={incrementCount}>+</button>
        </div>
        
    </div>
  )
}

export default Counter
