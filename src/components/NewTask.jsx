import { PlusCircle } from "phosphor-react";
import { useState } from "react";

import styles from './NewTask.module.css';

export function NewTask({ onCreateNewTask }) {

  const [newTask, setNewTask] = useState('');

  function handleNewTaskChange() {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleCreateNewTask() {
    event.preventDefault();
    onCreateNewTask(newTask);
    setNewTask('');
  }
  return (
    <form onSubmit={handleCreateNewTask} className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={newTask}
        required
      />

      <button type="submit">
        <strong>Criar </strong>
        <PlusCircle size={16} />
      </button>
      
    </form>
  )
}