import Display from './displaycount';

function Counter({ count, setCount }) {

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Display title={count} />
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>

  );
}

export default Counter;