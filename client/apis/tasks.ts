import request from 'superagent'
import { Task } from '../../models/tasks'

const rootUrl = '/api/v1/tasks'

export function getAllTasks(): Promise<Task[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function addNewTask(task: Task): Promise<Task[]> {
  return request
    .post(rootUrl)
    .send(task)
    .then((res) => {
      return res.body
    })
}

export function deleteTaskById(id: number): Promise<Task[]> {
  return request.delete(`${rootUrl}/${id}`).then((res) => {
    return res.body
  })
}
