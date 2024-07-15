// src/components/TodoItem.jsx
import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for global styles (or styles.module.css)

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, editText);
    setEditMode(false);
  };
  return (
    <div>
      
    </div>
  )
}

export default TodoItem
