import React, { useState, ChangeEvent, FormEvent } from "react";
interface Task {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}


interface EditTodoFormProps {
  editTodo: (id: string, newTask: string) => void; 
  task: Task; 
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

 
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    editTodo(task.id, value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="Todo-form">
      <input
        type="text"
        value={value}
        placeholder="Edit Field"
        onChange={handleChange}
        className="Todo-input"
      />
      <button type="submit" className="Todo-btn">Update Task</button>
    </form>
  );
};

export default EditTodoForm;
