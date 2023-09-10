import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllTasks, addNewTask, deleteTaskById } from '../apis/tasks'

export function useTasks() {
  const query = useQuery(['tasks'], getAllTasks)
  return {
    ...query,
    add: useAddNewTask(),
    delete: useDeleteTaskById(),
  }
}

export function useTasksMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return mutation
}

function useAddNewTask() {
  return useTasksMutation(addNewTask)
}

function useDeleteTaskById() {
  return useTasksMutation(deleteTaskById)
}
