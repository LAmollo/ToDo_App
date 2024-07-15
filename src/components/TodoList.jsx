import React from "react";
import TodoList from './components/TodoList';

const TodoList = ({ todo, onEditTodo, onDeleteTodo, onToggleCompleted }) => {
  const reversedTodos = todos.slice().reverse();
  return (
    <ul className=" ">
      {reversedTodos.map((todo) => (
        <Task
          key={todo.id}
          task={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;