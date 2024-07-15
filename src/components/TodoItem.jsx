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
    <div className={`todo-item ${editMode ? 'edit-mode' : ''}`}>
      {editMode ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleComplete(todo.id)}
          />
          <span className={todo.complete ? 'completed' : ''}>{todo.text}</span>
          <button
            onClick={() => deleteTodo(todo.id)}
            disabled={!todo.complete}
          >
            Delete
          </button>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
