import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Draggable } from 'react-beautiful-dnd';
import { DeleteTaskCardBtn } from './button/DeleteTaskCardBtn';
import { TaskAddInputForm } from './TaskAddInputForm';
import { TaskCardTitle } from './TaskCardTitle';
import styles from './TaskCard.module.scss';
import { TaskCardData, TaskData } from './type';
import { Tasks } from './Tasks';

type TaskCardProps = {
  index: number;
  taskCard: TaskCardData;
  removeTaskCard: (id: string) => void;
};

export const TaskCard = ({ index, taskCard, removeTaskCard }: TaskCardProps) => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const addTask = (newTaskName: string) => {
    const taskId: string = uuid();
    setTasks([
      ...tasks,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        name: newTaskName,
      },
    ]);
  };

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const reorderTasks = (startIndex: number, endIndex: number) => {
    const remove = tasks.splice(startIndex, 1);
    tasks.splice(endIndex, 0, remove[0]);
    setTasks(tasks);
  };

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className={styles.bl_task_card}
          ref={provided.innerRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
        >
          <div
            className={styles.bl_task_card_header}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <DeleteTaskCardBtn taskCard={taskCard} removeTaskCard={removeTaskCard} />
          </div>
          <TaskAddInputForm addTask={addTask} />
          <Tasks tasks={tasks} removeTask={removeTask} reorderTasks={reorderTasks} />
        </div>
      )}
    </Draggable>
  );
};
