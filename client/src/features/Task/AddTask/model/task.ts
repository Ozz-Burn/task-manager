import type { ITask } from '@/entities/Task'
import { useTaskStore } from '@/entities/Task'

export const useAddTask = () => {
  const taskStore = useTaskStore()

  const addTask = (task: ITask) => {
    try {
      //task add request
      //det new task into task list
    } catch (error) {
      //error
    }
  }

  return {
    addTask
  }
}
