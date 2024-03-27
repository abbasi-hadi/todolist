import React, { useState, useContext } from "react";
import TaskContext from "@/context/task/taskContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TaskForm = () => {
  const taskContext = useContext(TaskContext)
  const [task, setTask] = useState({
    body: '',
    status: 'inprogress'
  });
  const { body, status } = task;
  const onChange = e => setTask({ ...task, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault();
    if (task.body === "") {
      toast("متن وظیفه نمی تواند خالی باشد!");
      return;
    }
    taskContext.addTask(task);
    setTask({
      body: '',
      status: 'inprogress'
    });
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="p-5 md:mx-96 mx-5 mt-10 rounded-2xl ring-4 ring-pink-400/50  bg-white shadow-xl shadow-pink-400/50">
        <form onSubmit={onSubmit}>
          <div className="mb-5 md:flex text-gray-900 justify-between">
            <div> یک مورد به لیست کارها اضافه کنید و Enter  بزنید :)</div>
            <div>
              وضعیت :
              <select defaultValue="inprogress" value={status} onChange={onChange} name='status' className="cursor-pointer py-1 mr-2  rounded-xl focus:ring-0 border-yellow-600">
                <option value="inprogress">در حال اجرا</option>
                <option value="onhold">نگه داشته شده</option>
                <option value="complate">انجام شده</option>
              </select>
            </div>
          </div>
          <input onChange={onChange} type="text" title="متن را وارد نمایید" value={body} name="body" className="hover:shadow transition duration-1000 ease-in-out px-3 py-3 rounded-2xl border-b focus:ring-0 border-yellow-600 min-w-full" />
        </form>
      </div>
    </>
  )
}
export default TaskForm;
