import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}>
        Increment
      </button>
    </div>
  );
}

export default App;
