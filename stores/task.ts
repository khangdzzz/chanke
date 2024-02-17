import { apis } from '@/apis'
import { Task, TaskResponse, IResponse } from '@/utils'

export const useTaskStore = defineStore('task', () => {
  const isCreateOrUpdate = ref<boolean>(false)
  const task = ref<Task | null>(null)

  const createTask = async (code: string) => {
    const res: IResponse | null = await apis
      .chanle!.post(`task`, { json: { code } })
      .json<IResponse>()
      .catch(() => null)

    if (res && res.success) {
      isCreateOrUpdate.value = true
    } else {
      isCreateOrUpdate.value = false
    }
  }

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
    createTask,
    getTask,
    task,
    isCreateOrUpdate
  }
})
