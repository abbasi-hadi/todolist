import {
  ADD_TASK, UPDATE_TASK, DELETE_TASK, FILTER_TASK, SET_CURRENT, CLEAR_CURRENT, FILTER_TASKS, CLEAR_FILTER
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case DELETE_TASK:

      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case FILTER_TASKS:
      return {
        ...state,
        filtered: state.tasks.filter(task => {
          return task.status.match(action.payload)
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    default: return state;
  }
}
