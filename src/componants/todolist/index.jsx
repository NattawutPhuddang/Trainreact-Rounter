import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import TodoItem from './todoitem';
import TodoInput from './todoinput';
import TodoDisplay from './displaytodo';

function Todolist() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="todolist">
      <TodoDisplay title="Todo List" list={state.list} />

      <TodoInput
        inputText={state.inputText}
        onInputChange={(e) =>
          dispatch({ type: 'SET_INPUT', payload: e.target.value })
        }
        onAdd={() => {
          if (state.inputText.trim()) {
            dispatch({ type: 'ADD_TODO' });
          }
        }}
      />

      <div className="todo-list">
        {state.list.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onRemove={() => dispatch({ type: 'REMOVE_TODO', payload: index })}
          />
        ))}
      </div>
    </div>
  );
}

export default Todolist;