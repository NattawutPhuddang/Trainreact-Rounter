import React from 'react';

function Counter({ count, setCount }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment +</button>
      {count < 1 || <button onClick={() => setCount(count - 1)}>Increment -</button>}
    </div>
  );
}

export default Counter;