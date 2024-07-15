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
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
