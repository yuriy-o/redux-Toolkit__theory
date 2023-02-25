//! Re-write #3 using createSlice
import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Знищити путіна", completed: false },
  { id: 1, text: "Спалити москву", completed: false },
  { id: 2, text: "Повернути Херсон", completed: true },
  { id: 3, text: "Перемога з нами", completed: true },
  { id: 4, text: "Повернути Крим", completed: false },
  { id: 5, text: "Працюючі закони", completed: false },
  { id: 6, text: "Розмовляти українською", completed: true },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

//! Re-write #1 using Immer
// import { createReducer } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";
// import {
//   addTask,
//   deleteTask,
//   toggleCompleted,
//   setStatusFilter,
// } from "./actions";

// const tasksInitialState = [
//   { id: 0, text: "Знищити путіна", completed: false },
//   { id: 1, text: "Спалити москву", completed: false },
//   { id: 2, text: "Повернути Херсон", completed: true },
//   { id: 3, text: "Перемога з нами", completed: true },
//   { id: 4, text: "Повернути Крим", completed: false },
//   { id: 5, text: "Працюючі закони", completed: false },
//   { id: 6, text: "Розмовляти українською", completed: true },
// ];

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     state.push(action.payload);
//   },

//   [deleteTask]: (state, action) => {
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
//   [toggleCompleted]: (state, action) => {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     // ✅ Immer замінить це на операцію оновлення
//     state.status = action.payload;
//   },
// });

//! Re-write #2 → код викликає помилку "The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer"
//? Тому переписав код використовуючи "builder callback"
// import { createReducer } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";
// import {
//   addTask,
//   deleteTask,
//   toggleCompleted,
//   setStatusFilter,
// } from "./actions";

// const tasksInitialState = [
//   { id: 0, text: "Знищити путіна", completed: false },
//   { id: 1, text: "Спалити москву", completed: false },
//   { id: 2, text: "Повернути Херсон", completed: true },
//   { id: 3, text: "Перемога з нами", completed: true },
//   { id: 4, text: "Повернути Крим", completed: false },
//   { id: 5, text: "Працюючі закони", completed: false },
//   { id: 6, text: "Розмовляти українською", completed: true },
// ];

// export const tasksReducer = createReducer(tasksInitialState, builder => {
//   builder
//     .addCase(addTask, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(deleteTask, (state, action) => {
//       return state.filter(task => task.id !== action.payload);
//     })
//     .addCase(toggleCompleted, (state, action) => {
//       const task = state.find(task => task.id === action.payload);
//       if (task) {
//         task.completed = !task.completed;
//       }
//     });
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, builder => {
//   builder.addCase(setStatusFilter, (state, action) => {
//     state.status = action.payload;
//   });
// });

//! код викликає помилку "The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer"
// import { createReducer } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";
// import {
//   addTask,
//   deleteTask,
//   toggleCompleted,
//   setStatusFilter,
// } from "./actions";

// const tasksInitialState = [
//   { id: 0, text: "Знищити путіна", completed: false },
//   { id: 1, text: "Спалити москву", completed: false },
//   { id: 2, text: "Повернути Херсон", completed: true },
//   { id: 3, text: "Перемога з нами", completed: true },
//   { id: 4, text: "Повернути Крим", completed: false },
//   { id: 5, text: "Працюючі закони", completed: false },
//   { id: 6, text: "Розмовляти українською", completed: true },
// ];

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     return [...state, action.payload];
//   },

//   [deleteTask]: (state, action) => {
//     return state.filter(task => task.id !== action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//     return state.map(task => {
//       if (task.id !== action.payload) {
//         return task;
//       }
//       return { ...task, completed: !task.completed };
//     });
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     return {
//       ...state,
//       status: action.payload,
//     };
//   },
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
//! del
// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
