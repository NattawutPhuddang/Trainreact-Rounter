import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CountDisplay from './displaycount';

function Counter() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <CountDisplay title={state.count} />
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Subtract</button>
    </div>
  );
}

export default Counter;