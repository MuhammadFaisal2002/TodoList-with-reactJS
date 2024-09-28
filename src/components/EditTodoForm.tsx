import React, { useState } from "react"
function EditTodoForm({editTodo, task}) {
    const [value, setValue] = useState(task.task) 
    const handleSubmit = (e)=>{
        e.preventDefault();
        editTodo(task.id, value)

    }
    return(
        <form onSubmit={handleSubmit} className="Todo-form">
            <input type="text" value={value} placeholder="Edit Field" onChange={(e)=>setValue(e.target.value)} className="Todo-input"/>
            <button type="submit" className="Todo-btn" >Add Task</button>
        </form>
    )
    
}
export default EditTodoForm