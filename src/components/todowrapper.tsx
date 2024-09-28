import React, { useState } from "react"
import TodoForm from "./TodoForm"
import {v4 as uuidv4} from 'uuid';
import '../App.css'
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
function TodoWrapper() {
    const [todos, setTodos] : any = useState([]) 
    const addTodo = (todo : any) =>{
        setTodos([
            ...todos,{id : uuidv4(),task:todo,completed: false,isEditing:false },
        ])
    }
    const deleteTodo = (id)=>setTodos(todos.filter((todo)=> todo.id !== id))
    const toggleComplete = (id: string) => 
        setTodos(todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
        const editTodo = (id)=>setTodos(todos.map((todo)=> todo.id === id ? {...todo, isEditing : !todo.isEditing}:todo))
        const editTask = (id , task)=>{
            setTodos(
                todos.map((todo)=>todo.id === id ? {...todo, task, isEditing:!todo.isEditing}:todo)
            )
        }
    console.log("todos" , todos);
    
    return( 
        <div className="Todowrapper">
            <h1>
                Web Development Tasks
            </h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo : any)=>todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ) : (
                    <Todo
                    key= {todo.id}
                    task = {todo}
                    deleteTodo= {deleteTodo}
                    editTodo = {editTodo}
                    toggleComplete = {toggleComplete}
                    />
                )
            )}
        </div>
    )
}
export default TodoWrapper