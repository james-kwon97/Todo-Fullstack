import { Router } from 'express'
import * as db from '../db/tasks.ts'
import { addNewZombie, deleteById } from '../db/zombies.ts'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const zombies = await db.getAllZombies()

    res.json(zombies)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  const newZombie = req.body
  console.log(newZombie)
  const addZombie = await db.addNewZombie(newZombie)
  res.json(addZombie[0])
})

router.delete('/:id', async (req, res) => {
  const deleteId = Number(req.params.id)
  console.log(deleteId)
  const deleteZombie = await db.deleteById(deleteId)
  res.json(deleteZombie)
})

export default router
