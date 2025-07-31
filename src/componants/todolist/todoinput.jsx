function TodoInput({ inputText, onInputChange, onAdd }) {
  return (
    <div>
      <input value={inputText} onChange={onInputChange} />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
export default TodoInput;