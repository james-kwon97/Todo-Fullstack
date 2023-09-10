import AddNewTask from './AddTask.tsx'
import { useTasks } from '../hooks/useTasks.ts'
// import '../styles/tooltip.css'

function Tasks() {
  const hook = useTasks()
  const taskDelete = hook.delete

  const { data: tasks, isLoading, isError } = useTasks()

  if (!tasks || isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Something went wrong</p>
  }

  function onDeleteClicked(id?: number) {
    if (id) {
      taskDelete.mutate(id)
    }
  }

  return (
    <>
      <div className="list-img-container">
        <div>
          <AddNewTask />
        </div>
        <ol className="task-list">
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <div className="tooltip-trigger">
                  <p>
                    {task.description}
                    {/* {task.completed ? 'completed' : 'not completed'} */}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onDeleteClicked(task.id)
                  }}
                >
                  Delete task
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </>
  )
}

export default Tasks
