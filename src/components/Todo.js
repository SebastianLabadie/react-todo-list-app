import React,{useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from './TodoForm'


const Todo = ({todos,completeTodo,removeTodo,updateTodo}) => {

    const [edit,setEdit] = useState({
        id:null,
        text:''
    })

    const submitUpdate=(text)=>{
            updateTodo(edit.id,text)
            setEdit({
                id:null,
                text:''
            })
    }

    if(edit.id){
        return <TodoForm edit={edit} addTodo={submitUpdate} />
    }


    return todos.map((todo,i)=>{
            return(
                <div 
                className={todo.isComplete ? "todo-row complete" : "todo-row"}
                key={i}
                >
                    <div  key={todo.id} onClick={()=> completeTodo(todo.id)} >
                        {todo.text}
                    </div>
                    <div className="icons">
                        <RiCloseCircleLine 
                         onClick={()=>removeTodo(todo.id)} 
                        className="delete-icon"
                        />
                        <TiEdit 
                        onClick={()=>setEdit({id:todo.id,text:''})} 
                        className="edit-icon"
                        />
                    </div>
                </div>
            )
        })
    
}

export default Todo
