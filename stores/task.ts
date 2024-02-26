import { apis } from '@/apis'
import { Task, TaskResponse, IResponse } from '@/utils'

export const useTaskStore = defineStore('task', () => {
  const task = ref<Task | null>(null)

  const getTask = async () => {
    const res: TaskResponse | null = await apis
      .chanle!.get(`task`)
      .json<TaskResponse>()
      .catch(() => null)

    if (res && res.success) {
      task.value = res.data
    }
  }

  return {
    getTask,
    task,
  }
})
