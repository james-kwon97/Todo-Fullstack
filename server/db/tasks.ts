import connection from './connection.ts'
import { Task } from '../../models/tasks.ts'

export async function getAllTasks(db = connection): Promise<Task[]> {
  return db('tasks').select()
}

export async function addNewTask(newTask: Task): Promise<Task[]> {
  return connection('tasks')
    .insert({ ...newTask })
    .returning('*')
}

export async function deleteTaskById(id: number) {
  return connection('tasks').delete().where({ id })
}
