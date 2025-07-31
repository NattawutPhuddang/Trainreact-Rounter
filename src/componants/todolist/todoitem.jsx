function TodoItem({item, onRemove}){
  return (
    <div>
      <p>{item}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}
export default TodoItem;