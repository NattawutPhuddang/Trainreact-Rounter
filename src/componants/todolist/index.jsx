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
      {/* แสดงหัวข้อและรายการทั้งหมดผ่านคอมโพเนนต์ Display */}
      <Display title="Todo List" list={list} />
      
      {/* กล่องรับข้อความและปุ่มเพิ่มรายการใหม่ ผ่านคอมโพเนนต์ TodoInput */}
      <TodoInput 
        inputText={inputText} // ส่งค่าข้อความที่พิมพ์อยู่
        onInputChange={(e) => setInputText(e.target.value)} // อัปเดตข้อความเมื่อผู้ใช้พิมพ์
        onAdd={() => {
          // เมื่อกดเพิ่ม ถ้ามีข้อความ (ไม่ใช่ช่องว่าง) ให้เพิ่มเข้า list และล้างช่อง input
          if (inputText.trim()) {
            setList([...list, inputText]);
            setInputText("");
          }
        }} 
      />
      
      {/* แสดงรายการ todo ทั้งหมด โดยวนลูปผ่าน list */}
      <div className="todo-list">
        {list.map((item, index) => (
          // แสดงแต่ละรายการด้วย TodoItem และส่งฟังก์ชันลบรายการไปด้วย
          <TodoItem key={index} item={item} onRemove={() => Remove(index)} />
        ))}
      </div>
    </div>

  )
    
}


export default Todolist;