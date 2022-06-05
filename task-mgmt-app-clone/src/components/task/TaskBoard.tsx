import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
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

  const reorderTaskCards = (startIndex: number, endIndex: number) => {
    const remove = taskCards.splice(startIndex, 1);
    taskCards.splice(endIndex, 0, remove[0]);
    setTaskCards(taskCards);
  };

  const onDragEndSortTasks = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    reorderTaskCards(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEndSortTasks}>
      <Droppable droppableId='taskCardDroppable' direction='horizontal'>
        {(provided) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div className={styles.bl_task_board} {...provided.droppableProps} ref={provided.innerRef}>
            {taskCards.map((taskCard, index) => (
              <TaskCard key={taskCard.id} index={index} taskCard={taskCard} removeTaskCard={removeTaskCard} />
            ))}
            {provided.placeholder}
            <AddTaskCardBtn addTaskCard={addTaskCard} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
