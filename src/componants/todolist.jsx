import React, { useState } from 'react';

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
      <header className="todolist-header">
        {/* ส่วนที่ 2: เพิ่มข้อความลงใน list */}
        <div>
          {/* input สำหรับรับข้อความจากผู้ใช้ */}
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {/* ปุ่ม Add สำหรับเพิ่มข้อความใน input ลงใน list ถ้าไม่ว่าง */}
          <button
            onClick={() => {
              if (inputText.trim() !== "") {
                setList([...list, inputText]); // เพิ่มข้อความใหม่เข้าไปใน list
              }
            }}
          >
            Add
          </button>
          <p>
            {/* แสดงรายการข้อความที่อยู่ใน list */}
            {list.map((item, index) => (
              <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <p>{item}</p>
                {/* ปุ่ม Remove สำหรับลบรายการออกจาก list */}
                <button onClick={() => Remove(index)}>Remove</button>
              </div>
            ))}
          </p>
        </div>
      </header>
    </div>
  );
}

export default Todolist;