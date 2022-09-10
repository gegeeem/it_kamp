import React, { useReducer } from "react";

const inititalState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return inititalState;
    default:
      return state;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, inititalState);
  return (
    <div>
      <div>Counter {count}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}
