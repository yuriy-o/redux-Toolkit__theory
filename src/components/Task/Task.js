// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 3. Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from "redux/delete/actions";

import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  // 2. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
