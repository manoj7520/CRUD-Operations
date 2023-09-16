import React, { useEffect, useState } from 'react'

function ROUGH() {
    const [state,setState]=useState(0)
    
    useEffect(()=>{
       document.getElementById("id").innerHTML=state
    
    },[state])
  return (
    <div>
 <h1 id='id'>0</h1>
 <button onClick={()=>{setState(state+1)}}>click</button>
    </div>
  )
}

export default ROUGH