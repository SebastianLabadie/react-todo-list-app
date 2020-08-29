import React,{useState} from 'react'

const TodoForm = () => {
    const [input,setInput] = useState('')


    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    return (
        <form className="todo-form">
            <input type="text" name='text' 
            placeholder="Add a todo " 
            value={input} 
            onChange={handleChange}
            className='tood-input'

            />
            <button className="todo-btn">
               Add Todo 
            </button>
        </form>
    )
}

export default TodoForm
