// import { combineReducers } from "redux";
import { statusFilters } from "./constants";
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from "./actions";

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
export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type:
      return [...state, action.payload];
    case deleteTask.type:
      return state.filter(task => task.id !== action.payload);
    case toggleCompleted.type:
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
export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

//! del
// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

//! Redux
// import { combineReducers } from "redux";
// import { statusFilters } from "./constants";

// const tasksInitialState = [
//   { id: 0, text: "Знищити путіна", completed: false },
//   { id: 1, text: "Спалити москву", completed: false },
//   { id: 2, text: "Повернути Херсон", completed: true },
//   { id: 3, text: "Перемога з нами", completed: true },
//   { id: 4, text: "Повернути Крим", completed: false },
//   { id: 5, text: "Працюючі закони", completed: false },
//   { id: 6, text: "Розмовляти українською", completed: true },
// ];

// // Відповідає лише за оновлення властивості tasks
// // Тепер значенням параметра state буде масив завдань
// const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return [...state, action.payload];
//     case "tasks/deleteTask":
//       return state.filter(task => task.id !== action.payload);
//     case "tasks/toggleCompleted":
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// // Відповідає лише за оновлення властивості filters
// // Тепер значенням параметра state буде об'єкт фільтрів
// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
