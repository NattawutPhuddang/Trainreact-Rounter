import React from 'react';

function Todolist({ inputText, setInputText, list, setList }) {
  const handleAdd = () => {
    if (inputText.trim()) {
      setList([...list, inputText.trim()]);
      setInputText("");
    }
  };

  const handleRemove = (indexToRemove) => {
    setList(list.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="todolist">
      <header className="todolist-header">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>

        <div style={{ marginTop: "16px" }}>
          {list.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px"
              }}
            >
              <p>{item}</p>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Todolist;