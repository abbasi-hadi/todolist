import React, { useContext } from 'react';
import TaskContext from '@/context/task/taskContext';
import TaskItem from './TaskItems';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { toast } from 'react-toastify';

const Tasks = () => {
  const taskContext = useContext(TaskContext)
  const { tasks, filtered } = taskContext;
  if (tasks.length === 0) {
    toast.info('لطفا یک وظیفه اضافه کنید')
  }
  return (
    <>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(task => (
            <CSSTransition key={task.id} timeout={500} className="item">
              <TaskItem task={task} />
            </CSSTransition>
          ))
          : tasks.map(
            task => (
              <CSSTransition key={task.id} timeout={500} className="item">
                <TaskItem task={task} />
              </CSSTransition>
            )
          )}
      </TransitionGroup>
    </>
  )
}
export default Tasks;
