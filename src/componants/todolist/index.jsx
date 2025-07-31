import React, { useState } from 'react';
import TodoItem from './todoitem';
import TodoInput from './todoinput';
import Display from './displaytodo';
import './todo.css';


// ฟังก์ชันหลักของแอปพลิเคชัน
function Todolist() {
  // สร้าง state สำหรับเก็บข้อความที่ผู้ใช้กรอกใน input
  const [inputText, setInputText] = useState("");
  // สร้าง state สำหรับเก็บรายการข้อความที่เพิ่มเข้ามา
  const [list, setList] = useState([]);

  // ฟังก์ชันสำหรับลบรายการออกจาก list ตาม index ที่ระบุ
  const Remove = (indexToRemove) => {
    setList(list.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="todolist">
      <Display title="Todo List" list={list} />
      <TodoInput 
        inputText={inputText} 
        onInputChange={(e) => setInputText(e.target.value)} 
        onAdd={() => {
          if (inputText.trim()) {
            setList([...list, inputText]);
            setInputText("");
          }
        }} 
      />
      <div className="todo-list">
        {list.map((item, index) => (
          <TodoItem key={index} item={item} onRemove={() => Remove(index)} />
        ))}
      </div>
    </div>

  )
    
}


export default Todolist;