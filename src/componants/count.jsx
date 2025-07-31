import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div >
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
}

export default Counter;