import React, { useState } from 'react';
import { DeleteTaskCardBtn } from './button/DeleteTaskCardBtn';
import { TaskAddInputForm } from './TaskAddInputForm';
import { TaskCardTitle } from './TaskCardTitle';
import styles from './TaskCard.module.scss';
import { TaskData } from './type';
import { Tasks } from './Tasks';

export const TaskCard = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const addTask = (newTaskName: string) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: newTaskName,
      },
    ]);
  };
  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <div className={styles.el_task_card}>
      <TaskCardTitle />
      <DeleteTaskCardBtn />
      <TaskAddInputForm addTask={addTask} />
      <Tasks tasks={tasks} removeTask={removeTask} />
    </div>
  );
};
