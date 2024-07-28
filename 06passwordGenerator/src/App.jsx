import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)
  // useRef is used to refer the element to manipulate each other

  const passwordGenerator = useCallback(() => {   
    // useCallback is used to memoize the function and store the memory and thread to resuse it again.
    // useCallback(fn, [dependencies])
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*()_+-./:;<=>?"

    for(let i = 0; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)   if need to set the range
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    // useEffect till now we know when the page is load the function is call for the first time.
    // useEffect(fn, [dependencies])
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-blue-700 bg-gray-800'>
        <h1 className='text-4xl text-center text-white my-3 text-decoration-line: underline'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} className='px-3 py-0.5 outline-none text-white shrink-0 bg-blue-700'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min="6" max="100" value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1 my-3'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev);}}/>
            <label>Numbers</label>
            <input type="checkbox" defaultChecked={characterAllowed} id='characterInput' onChange={() => {setCharacterAllowed((prev) => !prev);}}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
