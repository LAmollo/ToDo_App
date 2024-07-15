// src/App.jsx
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './index.css'; 

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = { id: Date.now(), text: todoText, complete: false };
    setTodos([newTodo, ...todos]);
  };
  return (
    <div>
      
    </div>
  )
}

export default App
