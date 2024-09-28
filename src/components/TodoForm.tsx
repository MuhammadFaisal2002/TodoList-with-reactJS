import React, { useState } from "react";
function TodoForm({addTodo}){
    const [value, setValue] = useState('')
    const handleSubmit = (e : any)=>{
        e.preventDefault()
        if (value) {
            addTodo(value)
            setValue('')
        }
    }
    return(
        <form onSubmit={handleSubmit} className="Todo-form">
            <input type="text" className="Todo-input" value={value} placeholder="What is the task today" onChange={(e)=>setValue(e.target.value) }  />
            <button className="Todo-btn" type="submit">Add Task</button>
        </form>
    )
}
export default TodoForm