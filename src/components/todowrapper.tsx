import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";

interface TodoType {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (task: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id: string) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const editTodo = (id: string) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );

  const editTask = (id: string, task: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  console.log("todos", todos);

  return (
    <div className="Todowrapper">
      <h1>Web Development Tasks</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
