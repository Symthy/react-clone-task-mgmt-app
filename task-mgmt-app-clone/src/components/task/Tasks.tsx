import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Task } from './Task';
import { TaskData } from './type';
import styles from './Tasks.module.scss';

type TaskProps = {
  tasks: TaskData[];
  removeTask: (id: string) => void;
  reorderTasks: (startIdx: number, endIdx: number) => void;
};

export const Tasks = ({ tasks, removeTask, reorderTasks }: TaskProps) => {
  const onDragEndSortTasks = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    reorderTasks(result.source.index, result.destination.index);
  };

  return (
    <div className={styles.bl_tasks}>
      <DragDropContext onDragEnd={onDragEndSortTasks}>
        <Droppable key='taskDroppable' droppableId='taskDroppable'>
          {(provided) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, i) => (
                <div key={task.id}>
                  <Task index={i} task={task} removeTask={removeTask} />
                </div>
              ))}
              <div>{provided.placeholder}</div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
