import { useState } from "react"

function CounterApp(){
  const[counter, setCounter]=useState(0);

  const handleIncrease=() => {
    counter > 0 ? setCounter(counter-1) : 0

    
  }
  const handleDecrease=() => {
    setCounter(counter+1)
  }

  return(
    <>
    <button onClick={handleIncrease}>Increase Counter</button>
    <p>Counter: {counter}</p>
    <button onClick={handleDecrease}>Decrease Counter</button>
    </>
  )
}
export default CounterApp;
