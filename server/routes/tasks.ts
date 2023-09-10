import { Router } from 'express'
import * as db from '../db/tasks.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getAllTasks()

    res.json(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  const newTask = req.body
  console.log(newTask)
  const addTask = await db.addNewTask(newTask)
  res.json(addTask[0])
})

router.delete('/:id', async (req, res) => {
  const deleteId = Number(req.params.id)
  console.log(deleteId)
  const deleteTask = await db.deleteTaskById(deleteId)
  res.json(deleteTask)
})

export default router
