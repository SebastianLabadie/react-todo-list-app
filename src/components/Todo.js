import React,{useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


const Todo = ({todos,completeTodo,removeTodo,editTodo}) => {
    const [ edit,setEdit] = useState({
        id:null,
        text:''
    })

    return todos.map((todo,i)=>{
            return(
                <div 
                className={todo.isComplete ? "todo-row complete" : "todo-row"}
                key={i}
                >
                    <div className="" key={todo.id} onClick={()=> completeTodo(todo.id)} >
                        {todo.text}
                    </div>
                    <div className="icons">
                        <RiCloseCircleLine 
                         onClick={()=>removeTodo(todo.id)} 
                        className="delete-icon"
                        />
                        <TiEdit 
                        /* onClick={()=>editTodo(id,text)} */
                        className="edit-icon"
                        />
                    </div>
                </div>
            )
        })
    
}

export default Todo
