import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    {/* <Card  channel="prathmesh" someObj={myObj}/> --> in this we can pass the vlaue by obj and arr using props */}
    <Card username="Pratham" btnText="Click Me !"/>
    <Card username="Niki" btnText="Visit Again !"/>
    </>
  )
}

export default App
