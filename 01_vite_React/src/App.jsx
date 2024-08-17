import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 0;
  let [counter, setCounter] = useState(0);


  let addValue = () =>{
    if((counter) < 20){
      setCounter(counter+1)
    }
  }

  let removeValue = () =>{
    if((counter) > 0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Hooks</h1>
      <h3>Counter : {counter}</h3>

      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
      
    </>
  )
}

export default App
