import { combineReducers } from "redux";
import { statusFilters } from "./constants";

const tasksInitialState = [
  { id: 0, text: "Знищити путіна", completed: false },
  { id: 1, text: "Спалити москву", completed: false },
  { id: 2, text: "Повернути Херсон", completed: true },
  { id: 3, text: "Перемога з нами", completed: true },
  { id: 4, text: "Повернути Крим", completed: false },
  { id: 5, text: "Працюючі закони", completed: false },
  { id: 6, text: "Розмовляти українською", completed: true },
];

// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань
const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "taski/addTask":
      return [...state, action.payload];
    case "taski/deleteTask":
      return state.filter(task => task.id !== action.payload);
    case "taski/toggleCompleted":
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  taski: tasksReducer,
  filters: filtersReducer,
});
