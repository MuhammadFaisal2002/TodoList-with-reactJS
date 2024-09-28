import React from "react"
import '../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDeleteLeft, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'

function Todo({task , deleteTodo, toggleComplete, editTodo}) {
    return(
        <div className="Todo">
            <p className={`${task.completed ? 'completed' : 'not-completed'}`} onClick={()=>toggleComplete(task.id)}>{task.task }</p>
            <div><FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=>editTodo(task.id)} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=> deleteTodo(task.id)}/></div>
        </div>
    )
}
export default Todo