import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>CHAI AUR CODE | SAIF</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increase}> click here to Increase</button>
      <button onClick={decrease}>Decrease here to decrease</button>
    </div>
  )
}

export default App
