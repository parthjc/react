import React, { useEffect, useState } from "react";

export const Count = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
  );
};
