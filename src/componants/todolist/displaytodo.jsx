function TodoDisplay({ title, list }) {
  return (
    <header className="todolist-header">
      <h1>{title}</h1>
      <p>จำนวนรายการ: {list.length}</p>
    </header>
  );
}

export default TodoDisplay;