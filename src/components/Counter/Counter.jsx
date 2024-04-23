"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count {count}</h2>
      <button className="border m-2 p-2" onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button className="border m-2 p-2" onClick={() => setCount(count - 1)}>
        Subtract
      </button>
    </div>
  );
};

export default Counter;
