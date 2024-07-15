import React, { useState } from 'react';
import Form from './components/Form';
import TodosList from './components/TodosList';
import ToolList from './components/ToolList';
import Draggable from 'react-draggable';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const creatorTagHandle = () => {
    window.location = 'https://github.com/LAmollo/';
  };

  const handleSaveTodo = (newTodo) => {
    // Add newTodo to the beginning of the todos list
    setTodos([newTodo, ...todos]);
  };

  return (
    <>
      <div className='banner'></div>
      <div className='app'>
        <h1 className='title'>TodoMore</h1>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          onSaveTodo={handleSaveTodo} // Pass onSaveTodo handler to Form component
          className="form"
        />
        <TodosList
          todos={todos}
          setTodos={setTodos}
        />
        <ToolList
          todos={todos}
          setTodos={setTodos}
          input={input}
          setEditTodo={setEditTodo}
          setInput={setInput}
        />
      </div>
      <Draggable>
        <div className='creator-tag' onClick={creatorTagHandle}>
          <img src='tag.svg' className='creator-tag-tag'></img>
          <p>Benson Amollo</p>
        </div>
      </Draggable>
      </>
  );
}

export default App;
