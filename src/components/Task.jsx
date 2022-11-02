import checkToDo from '../assets/check-todo.svg';
import checkDone from '../assets/check-done.svg';
import trash from '../assets/trash.svg';

import styles from './Task.module.css';

export function Task({ id, task, isDone, onDeleteTask, onSetTaskDone }) {
  return (
    <div className={isDone ? styles.listItemDone : styles.listItemToDo}>
      <button onClick={() => onSetTaskDone(id)} >
        <img
          src={isDone ? checkDone : checkToDo}
          alt={isDone ? "Checkbox marcado" : "Checkbox vazio"}
        />
      </button>
      <span>{task}</span>
      <button onClick={() => { if (window.confirm('Tem certeza de que deseja apagar esta tarefa?')) onDeleteTask(id) }}>
        <img src={trash} alt="Lixeira" />  
      </button>
    </div>
  )
}

