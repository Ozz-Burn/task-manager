import { defineStore } from 'pinia'
import type { ITask } from './types'
import { ref } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const taskList = ref<ITask[]>([])

  const getTaskById = (id: number): ITask | undefined => {
    const task = taskList.value.find((task) => task.id === id)
    return task
  }

  return {
    taskList,
    getTaskById
  }
})
