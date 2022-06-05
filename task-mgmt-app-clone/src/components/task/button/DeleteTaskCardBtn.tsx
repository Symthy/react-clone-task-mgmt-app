import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './DeleteTaskCardBtn.module.scss';
import { TaskCardData } from '../type';

type DeleteTaskCardBtnProps = {
  taskCard: TaskCardData;
  removeTaskCard: (id: string) => void;
};

export const DeleteTaskCardBtn = ({ taskCard, removeTaskCard }: DeleteTaskCardBtnProps) => (
  <div className={styles.bl_delete_btn}>
    <FontAwesomeIcon icon={faXmark} className={styles.el_btn} onClick={(e) => removeTaskCard(taskCard.id)} />
  </div>
);
