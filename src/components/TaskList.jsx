import { Task } from "./Task";
import { NewTask } from "./NewTask";

import clipboard from '../assets/clipboard.svg';
import styles from './TaskList.module.css';

import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";





export function TaskList() {
  
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      task: 'Ler um livro',
      isDone: true,
    },
    {
      id: uuidv4(),
      task: 'Beber água',
      isDone: false,
    },
    {
      id: uuidv4(),
      task: 'Jogar vôlei',
      isDone: false,
    },
    {
      id: uuidv4(),
      task: 'Tomar banho',
      isDone: true,
    },
  ])

  function setTaskDone(id) {
    setTasks(
      tasks.map(task => {
        if (task.id === id && !task.isDone) {
          return {...task, isDone: true}
        } else if (task.id === id && task.isDone){
          return {...task, isDone: false}
        } else {
          return task
        }
    }))
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter(task => {
        return task.id !== id
      })
    )
  }

  function addNewTask(task) {
    const newTask = {
      id: uuidv4(),
      task,
      isDone: false,      
    }

    setTasks([ ...tasks, newTask ])
  }

  return (
    <div>
      <NewTask onCreateNewTask={addNewTask}/>
      <div className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <div className={styles.counter}>
              {tasks.length}
            </div>
          </div>
          <div className={styles.tasksDone}>
            <strong>Concluídas</strong>
            <div className={styles.counter}>
              {tasks.filter(task => task.isDone).length} de {tasks.length}
            </div>
          </div>  
        </div>
        {tasks.length !== 0 ? 
          <div className={styles.list}>
            {tasks
              .sort((x, y) => { return (x.task > y.task) ? 1 : -1 })
              .sort((x, y) => { return (x.isDone === y.isDone) ? 0 : x.isDone ? 1 : -1; })
              .map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    isDone={task.isDone}
                    onDeleteTask={deleteTask}
                    onSetTaskDone={setTaskDone}
                  />
                );
            })}
          </div>
          :
          <div className={styles.emptyList}>
            <img src={clipboard} alt="Imagem de uma prancheta sem notas" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        }
      </div>
    </div>
  );
}