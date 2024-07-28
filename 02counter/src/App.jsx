import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /* Hooks :
  useState - Hook to keep track of the application state
              useState(<variable>, <function>)
  useEffect - Hook allows you to perform side effects in your components
              useEffect(<function>, <dependency>)
  React Context - React Context is a way to manage state globally
              1. createContext
              3. Context Provider - Wrap child components in the Context Provider and supply the state value
              2. useContext
  useRef - Hook allows you to persist values between renders
  */

  let [counter, setcounter] = useState(0)
  // [variable, function(use to update the variable)]

  //let counter = 4

  const addValue  = () => {
    if (counter < 20) {
      counter = counter + 1
      setcounter(counter)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      counter = counter - 1
      setcounter(counter)
    }
  }

  return (
    <>
      <h1>Hello ReactJs !!</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
