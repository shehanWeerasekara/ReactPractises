import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Count,setCount] = useState(0);

  const decrement = () => {
    setCount(Count - 1)
  }
  const increment = () => {
    setCount(Count + 1)
  }

  return (
    <>
      <h1>Count</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <h3>{Count}</h3>
    </>
  );
}

export default App;
