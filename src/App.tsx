import { useCallback, useEffect,MouseEvent, KeyboardEvent, useState, useMemo, useRef } from 'react'
import './App.css'

interface User {
  id: number,
  username: string,
}
type fibFunc = (n: number) => number

const fib: fibFunc = (n)=>{
  if (n <2) return n
  return fib(n-1) + fib(n-2)
}

const myNum: number  = 43

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  
  useEffect(()=>{
    console.log('mounting')
    console.log('Users: ', users)
  },[users])

  const addOne = useCallback((e: MouseEvent<HTMLButtonElement>|KeyboardEvent<HTMLButtonElement>): void => setCount(prev=>prev+1),[])

  const result = useMemo<number>(()=> fib(myNum),[myNum])
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addOne}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} />
    </div>
  )
}

export default App
