import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { DeleteTaskCardBtn } from './button/DeleteTaskCardBtn';
import { TaskCardTitle } from './TaskCardTitle';
import styles from './TaskCard.module.scss';
import { TaskCardData } from './type';
import { Tasks } from './Tasks';

type TaskCardProps = {
  index: number;
  taskCard: TaskCardData;
  removeTaskCard: (id: string) => void;
};

export const TaskCard = ({ index, taskCard, removeTaskCard }: TaskCardProps) => (
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

        <Tasks />
      </div>
    )}
  </Draggable>
);
