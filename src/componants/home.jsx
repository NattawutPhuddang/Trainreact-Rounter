import Counter from './count.jsx';
import Todolist from './todolist.jsx';
import React, { useState } from 'react';

function Home() {
  const [showCounter, setShowCounter] = useState(false);
  const [showTodolist, setShowTodolist] = useState(false);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const counterProps = { count, setCount };
  const todolistProps = { inputText, setInputText, list, setList };

  return (
    <div className="home">
      <header className="home-header">
        <h1 style={{ textAlign: "center" }}>Welcome to the Home Page</h1>
        <div style={{ display: "flex", gap: "32px", marginTop: "32px" }}>
          <div style={{ flex: 1 }}>
            <button onClick={() => setShowCounter(!showCounter)}>Counter</button>
            {showCounter && <Counter {...counterProps} />}
          </div>
          <div style={{ flex: 1 }}>
            <button onClick={() => setShowTodolist(!showTodolist)}>Todolist</button>
            {showTodolist && <Todolist {...todolistProps} />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;