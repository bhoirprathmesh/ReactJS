import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">Hello ReactJs !!</h1>
      <h2 className="text-center">Counter value: {counter}</h2>

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mx-2" onClick={addValue}>Add value</button>
        <button className="btn btn-danger mx-2" onClick={removeValue}>Remove value</button>
      </div>
    </div>
  );
}

export default App;
