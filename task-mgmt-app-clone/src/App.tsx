import styles from './App.module.scss';
import { Header } from './components/Header';
import { TaskBoard } from './components/task/TaskBoard';

export const App = () => (
  <div className={styles.ly_background}>
    <Header />
    <TaskBoard />
  </div>
);
