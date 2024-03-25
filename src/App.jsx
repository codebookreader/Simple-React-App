import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const storageKeyName = "count";
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) | 0);

  const [count, setCount] = useState(retrieveCountValue);

  const addCount = (count) => setCount(Number(count) + 1);

  useEffect( () => {
    localStorage.setItem("count", String(count));
  }, [count]);
  return (
    
      <div classname="App">
        Hello World

<button onClick={() => addCount(count)}>
Count is {count}
</button>

    </div>
  
  )
}

export default App
