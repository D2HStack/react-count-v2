// App without using array in useState

import React, { useState } from "react";

import Counter from "./Counter";

import "./style.css";

function App() {
  const [nbCounter, setNbCounter] = useState(0);

  let tab = [];

  for (let i = 0; i < nbCounter; i++) {
    tab.push(<Counter></Counter>);
  }

  // console.log(nbCounter);

  return (
    <div className="App">
      <h1>React Counter v2</h1>
      <div>
        {nbCounter < 3 && (
          <button
            onClick={() => {
              setNbCounter(nbCounter + 1);
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
