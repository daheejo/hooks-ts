import Counter from "./Counter"

function App() {

  return (
    <div className="App">
     <Counter>{(num: number)=> <>Current count: {num}</>}</Counter>
     </div>
  )
}

export default App
