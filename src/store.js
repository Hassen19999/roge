// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  tasks: [],
};

// Action types
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    default:
      return state;
  }
};

// Action creators
export const addTask = (id, description, isDone = false) => ({
  type: ADD_TASK,
  payload: { id, description, isDone },
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: id,
});

// Create store
const store = createStore(reducer);

export default store;