import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div classname="App">
        Hello World

<button onClick={() => setCount((count) => count + 1)}>
Count is {count}
</button>

    </div>
  
  )
}

export default App
