import { useState } from 'react';

import './App.css';

function App() {
  const [queue, setQueue] = useState([]);

  const handleClickAdd = () => {
    const updatedQueue = [...queue, parseInt(Math.random() * 299) + 1];
    setQueue(updatedQueue);
  }

  const handleClickRemove = () => {
    const updatedQueue = queue.slice(1);
    setQueue(updatedQueue);
  }

  return (
    <div className="App">
      <div className="box">
        <p className="label">Queue</p>
        <div className="box-content">
          <div className="queue">
            {
              queue.map(item => (
                <span className="number">{item}</span>
              ))
            }
          </div>
          <div className="buttons">
            <button onClick={handleClickAdd}>Add</button>
            <button onClick={handleClickRemove}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
