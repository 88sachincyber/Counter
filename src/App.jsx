import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [allowNegative, setAllowNegative] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleDecrement = () => {
    if (count === 0 && !allowNegative) {
      setShowPrompt(true); // Show the prompt instead of decrementing
    } else {
      setCount(count - 1);
    }
  };

  const handleAllowNegative = () => {
    setAllowNegative(true);
    setShowPrompt(false);
    setCount(count - 1); // Proceed with decrement
  };

  const handleCancel = () => {
    setShowPrompt(false);
  };
  return (
    <div className='main'>
      <p>Count: {count}</p>

      {count < 0 && (
        <p style={{ color: 'red' }}>
          You're now counting in negative numbers!
        </p>
      )}

      {showPrompt && (
        <div className='prompt-box' style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <p>Do you want to count into negatives?</p>
          <button onClick={handleAllowNegative}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      )}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
export default App
