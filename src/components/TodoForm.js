import React, { useState,useEffect,useRef } from "react";

const TodoForm = ({addTodo}) => {
  const [input, setInput] = useState("");

    const inputRef= useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })


  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Add a todo "
        value={input}
        onChange={handleChange}
        ref={inputRef}
        className="todo-input"
      />
      <button type="submit" className="todo-btn">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
