import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return ;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const removeTodo = (id) => {
    let updatedTodo = todos.filter((todo)=> todo.id !== id)
    setTodos(updatedTodo)
  }

  const updateTodo = (id,newText) => {
    if (!newText|| /^\s*$/.test(newText)) {
        return ;
      }
  
      setTodos(prev=>prev.map(todo =>( todo.id === id ? todo.text=newText : todo )))
  }




  return (
    <div >
      <h1>What's the Plane for Today?</h1>
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
