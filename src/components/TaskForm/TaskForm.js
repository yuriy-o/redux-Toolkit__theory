// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 3. Імпортуємо генератор екшену
import { addTask } from "redux/delete/actions";

import { Button } from "components/Button/Button";
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  // 2. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    // console.log("value", form.elements.text.value);

    //4.
    dispatch(addTask(form.elements.text.value));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
