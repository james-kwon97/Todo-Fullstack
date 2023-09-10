import { useState, FormEvent, ChangeEvent } from 'react'
import { useTasks } from '../hooks/useTasks.ts'
import { addNewTask } from '../apis/tasks.ts'

const initialFormData = {
  description: '',
  // completed: false,
}

function AddNewTask() {
  const [form, setForm] = useState(initialFormData)

  const hook = useTasks()
  const addTask = hook.add

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addTask.mutate(form)
    setForm(initialFormData)
  }

  return (
    <>
      <div className="addTask-title">
        <h2>Add a new task!</h2>
      </div>

      <form onSubmit={handleSubmit} className="addTaskForm">
        <div>
          <label htmlFor="description">New task: </label>

          <input
            id="description"
            onChange={handleChange}
            value={form.description}
            name="description"
            placeholder="Add a task.."
          />
        </div>
        {/* <div>
          <label htmlFor="completed">Completed:</label>
          <input
            type="checkbox"
            id="completed"
            onChange={handleChange}
            checked={form.completed}
            name="completed"
          />
        </div> */}
        <br />
        <button>Add task</button>
      </form>
    </>
  )
}

export default AddNewTask
