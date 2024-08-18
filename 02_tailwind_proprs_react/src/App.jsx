import { useState } from 'react' 
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let cardHeading = "Leonel Messi"
  let skills = ['Dribling', "Strike", "Assist"]
  let btnText = "Buy Now";

  let obj = [
    cardHeading, 
    skills,
    btnText
  ]

  return (
    <>
      <Cards cardObj = {obj}/>
    </>
  )
}

export default App
