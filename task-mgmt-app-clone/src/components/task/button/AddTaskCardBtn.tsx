import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './AddTaskCardBtn.module.scss';

type AddTaskCardBtnProps = {
  addTaskCard: () => void;
};

export const AddTaskCardBtn = ({ addTaskCard }: AddTaskCardBtnProps) => (
  <div>
    <FontAwesomeIcon icon={faSquarePlus} className={styles.el_btn} onClick={addTaskCard} />
  </div>
);
