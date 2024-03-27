import React, { useState, useContext, useEffect, useRef } from 'react'
import TaskContext from "@/context/task/taskContext";
import { toast } from 'react-toastify';
const TaskFilter = () => {
  const taskContext = useContext(TaskContext)
  const checkbox = useRef();
  const { filterTasks, clearFilter, filtered, tasks } = taskContext;
  const onChange = e => {
    if (e.target.value === "complate") {
      document.querySelectorAll("input[value='onhold']")[0].checked = false;
      document.querySelectorAll("input[value='inprogress']")[0].checked = false;
    }
    if (e.target.value === "onhold") {
      document.querySelectorAll("input[value='complate']")[0].checked = false;
      document.querySelectorAll("input[value='inprogress']")[0].checked = false;
    }
    if (e.target.value === "inprogress") {
      document.querySelectorAll("input[value='complate']")[0].checked = false;
      document.querySelectorAll("input[value='onhold']")[0].checked = false;
    }
    if (e.target.checked) {
      filterTasks(e.target.value)
    } else {
      clearFilter();
    }
  }
  return (
    <div className="flex justify-between p-5 md:mx-96 mx-5 mt-10 rounded-2xl ring-4 ring-purple-500/50 bg-white shadow-lg shadow-purple-500">
      {(tasks.length) ? (
        <>
          <div>
            <input ref={checkbox}
              onChange={onChange}
              name="inprogress" value="inprogress"
              type="checkbox"
              className="cursor-pointer transition duration-700 ease-in-out rounded focus:ring-yellow-500 h-4 w-4 ml-2 text-yellow-600 border-gray-300"
            />
            <span>
              در حال اجرا
            </span>
          </div>
          <div>
            <input ref={checkbox}
              onChange={onChange} value="onhold"
              name="onhold"
              type="checkbox"
              className="cursor-pointer transition duration-700 ease-in-out rounded focus:ring-red-500 h-4 w-4 ml-2 text-red-600 border-gray-300"
            />
            <span>
              نگه داشته شده
            </span>
          </div>
          <div>
            <input value="complate" ref={checkbox}
              onChange={onChange}
              name="complate"
              type="checkbox"
              className="cursor-pointer transition duration-700 ease-in-out rounded focus:ring-green-500 h-4 w-4 ml-2 text-green-600 border-gray-300"
            />
            <span>
              انجام شده
            </span>
          </div>
        </>) :
        <h1>برای مشاهده فیلترها یک وظیفه به لیست اضافه نمایید</h1>
      }
    </div>
  )
}
export default TaskFilter;
