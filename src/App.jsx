import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const storageKeyName = "count";
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName));

  const [count, setCount] = useState(retrieveCountValue);

  const addCount = (count) => setCount(Number(count) + 1);

  useEffect( () => {
    localStorage.getItem(count);
  }, [count]);
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
