import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AddTaskCardBtn } from './button/AddTaskCardBtn';
import { TaskCard } from './TaskCard';
import styles from './TaskBoard.module.scss';
import { TaskCardData } from './type';

const buildTaskCard = (): TaskCardData => {
  const cardId: string = uuid();
  return { id: cardId, draggableId: `taskCard-${cardId}` };
};

export const TaskBoard = () => {
  const [taskCards, setTaskCards] = useState<TaskCardData[]>([buildTaskCard()]);

  const addTaskCard = () => {
    setTaskCards([...taskCards, buildTaskCard()]);
  };

  const removeTaskCard = (id: string) => {
    const newTaskCards = taskCards.filter((card) => card.id !== id);
    setTaskCards(newTaskCards);
  };

  return (
    <div className={styles.bl_task_board}>
      {taskCards.map((taskCard) => (
        <TaskCard key={taskCard.id} taskCard={taskCard} removeTaskCard={removeTaskCard} />
      ))}
      <AddTaskCardBtn addTaskCard={addTaskCard} />
    </div>
  );
};
