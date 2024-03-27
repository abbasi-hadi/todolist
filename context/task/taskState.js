import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  ADD_TASK, UPDATE_TASK, DELETE_TASK, SET_CURRENT, CLEAR_CURRENT, FILTER_TASKS, CLEAR_FILTER
} from '../types';
const TaskState = props => {
  const initialState = {
    tasks: [
      {
        id: 1,
        status: 'complate',
        body: 'آپدیت افزونه های وب سایت وردپرسی برای بهینه سازی سرعت و لود تایم'
      },
      {
        id: 2,
        status: 'onhold',
        body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت '
      },
      {
        id: 3,
        status: 'inprogress',
        body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت '
      }, {
        id: 4,
        status: 'onhold',
        body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت '
      },
      {
        id: 5,
        status: 'complate',
        body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت '
      }
    ]
    , current: null
    , filtered: null
  };
  const [state, dispatch] = useReducer(taskReducer, initialState);
  // Add Task
  const addTask = task => {
    // task.id = uuidv4();
    state.tasks.length === 0 ? task.id = 1 : task.id = state.tasks.at(-1).id + 1;
    dispatch({ type: ADD_TASK, payload: task })
  }
  // Update Task
  const updateTask = task => {
    dispatch({ type: UPDATE_TASK, payload: task })
  }
  // Delete Task 
  const deleteTask = id => {
    dispatch({ type: DELETE_TASK, payload: id })
  }
  // Set current task
  const setCurrent = task => {
    dispatch({ type: SET_CURRENT, payload: task })
  }
  // Clear Current Task
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  // Filter Task
  const filterTasks = (status) => {
    dispatch({ type: FILTER_TASKS, payload: status })
  }
  // Clear Filter 
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        filtered: state.filtered,
        addTask, deleteTask, setCurrent, clearCurrent, filterTasks, clearFilter
      }}>
      {props.children}
    </TaskContext.Provider>
  )
}
export default TaskState;
