import React from "react"
import Tasks from "@/components/tasks/Tasks";
import TaskForm from "@/components/tasks/TaskForm";
import TaskFilter from "@/components/tasks/TaskFilter";
export const TaskContext = React.createContext();

export default function Todolist() {
  return (
    <>
      <TaskForm />
      <TaskFilter />
      <Tasks />
    </>
  )
}
