// src/components/TodoForm.jsx
import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for global styles (or styles.module.css)

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      addTodo(todoText);
      setTodoText('');
    }
  };
  return (
    <div>
      
    </div>
  )
}

export default TodoForm
