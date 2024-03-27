import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import TaskContext from "@/context/task/taskContext";

const TaskItem = ({ task }) => {
  const taskContext = useContext(TaskContext)
  const { deleteTask, setCurrent, clearCurrent } = taskContext;
  const { id, status, body } = task;
  const onDelete = () => {
    deleteTask(id)
    clearCurrent()
  }
  let shadow = '';
  let ring = '';
  if (status === 'complate') {
    ring = 'ring-green-600/50';
    shadow = 'shadow-green-500/50';

  }
  if (status === 'onhold') {
    ring = 'ring-red-600/50';
    shadow = 'shadow-red-500/50';
  }
  if (status === 'inprogress') {
    ring = 'ring-yellow-600/50';
    shadow = 'shadow-yellow-500/50';
  }

  return (
    <>
      <div id={'task' + id} className={ring + ' ' + shadow + " p-5 md:mx-96 mx-5 mt-12 mb-12 rounded-2xl ring-4  bg-white shadow-xl"}>
        <div className="flex flex-row justify-end mb-4">
          <h6>
            شماره :‌ {task.id}
          </h6>
          <div>
            <svg onClick={() => {
              task.status = "onhold"; setCurrent(task)
              toast.error(`وظیفه شماره ${task.id} به حالت نگه داشته شده تغییر داده شد`);
            }}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="transition duration-700 ease-in-out text-gray-300 hover:text-red-600 cursor-pointer w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 00.177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zm8.75 4a.75.75 0 00-1.5 0v2.546l-.943-1.048a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.114 0l2.25-2.5a.75.75 0 10-1.114-1.004l-.943 1.048V8.75z" clipRule="evenodd" />
            </svg>

          </div>
          <div>
            <svg onClick={() => {
              task.status = "inprogress"; setCurrent(task)
              toast.warn(`وظیفه شماره ${task.id} به حالت در حال اجرا تغییر داده شد`);
            }}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="transition duration-700 ease-in-out text-gray-300 hover:text-yellow-600 cursor-pointer  w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <svg onClick={() => {
              task.status = "complate"; setCurrent(task)
              toast.success(`وظیفه شماره ${task.id} به حالت انجام شده تغییر داده شد`);
            }}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="transition duration-700 ease-in-out text-gray-300 hover:text-green-600 cursor-pointer  w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <svg onClick={() => {
              onDelete();
              toast.info(`وظیفه شماره ${task.id} از لیست حذف شد`);
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="transition duration-700 ease-in-out text-gray-300 hover:text-blue-600 cursor-pointer  w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        {body}
      </div>
    </>
  )
}
TaskItem.propTypes = {
  task: PropTypes.object.isRequired
}
export default TaskItem;
