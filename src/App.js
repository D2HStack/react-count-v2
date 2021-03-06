import React, { useState } from "react";

import Counter from "./Counter";

import "./style.css";

function App() {
  const [counters, setCounters] = useState([]);

  let tab = [];
  tab = counters.map((counter, index) => {
    return (
      <Counter
        index={index}
        counters={counters}
        setCounters={setCounters}
      ></Counter>
    );
  });

  return (
    <div className="App">
      <h1>React Counter v2</h1>
      <div>
        {counters.length < 4 && (
          <button
            onClick={() => {
              const countersCopy = [...counters];
              countersCopy.push(0);
              setCounters(countersCopy);
            }}
          >
            Add counter
          </button>
        )}
      </div>
      <div className="tab">{tab}</div>

      <p>Made with React at le Reacteur by Hoang</p>
    </div>
  );
}

export default App;
