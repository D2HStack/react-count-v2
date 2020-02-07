import React from "react";

function Counter(props) {
  const { index, counters, setCounters } = props;
  console.log(props);
  console.log(counters);

  return (
    <>
      <div key={index}>
        <button
          onClick={() => {
            const countersCopy = [...counters];
            countersCopy[index] = countersCopy[index] - 1;
            setCounters(countersCopy);
          }}
        >
          -
        </button>
        <span>{counters[index]}</span>
        <button
          onClick={() => {
            const countersCopy = [...counters];
            countersCopy[index] = countersCopy[index] + 1;
            setCounters(countersCopy);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            const countersCopy = [...counters];
            countersCopy[index] = 0;
            setCounters(countersCopy);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
