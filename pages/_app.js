import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

import TaskState from '@/context/task/taskState'

export default function App({ Component, pageProps }) {

  return (
    <TaskState>
      <Component {...pageProps} />
    </TaskState>
  )
}
