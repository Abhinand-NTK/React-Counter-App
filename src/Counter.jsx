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
        <div className='card' style={{
            backgroundColor: '#035d2caa',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 0 10px rgba(16, 25, 194, 0.667)',
            textAlign: 'center',
          }}>
 
            <h1 className='text-warning'>Counter App</h1>

            <div>
                <button onClick={decrementCount}>-</button>
                <h1>{count}</h1>
                <button onClick={incrementCount}>+</button>
            </div>
            
        </div>
  )
}

export default Counter
