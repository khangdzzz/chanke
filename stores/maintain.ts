import { apis } from '@/apis'
import { IMaintain, MaintainResponse } from '@/utils'

export const useMaintainStore = defineStore('maintain', () => {
  const isSuccess = ref(false)
  const isFail = ref(false)
  const maintain = ref<IMaintain>()

  const create = async (body: IMaintain) => {
    const res: MaintainResponse | null = await apis
      .chanle!.post('maintain/create', {
        json: body,
      })
      .json<MaintainResponse>()
      .catch(() => null)

    isSuccess.value = res?.success ?? false
    isFail.value = !isSuccess.value
  }

  const getCalenderMaintain = async () => {
    const res = await apis.chanle
      ?.get('maintain')
      .json<MaintainResponse>()
      .catch(() => null)

    if (res && res.success) {
      maintain.value = res.data[0]
    }
  }

  return {
    isSuccess,
    isFail,
    maintain,
    create,
    getCalenderMaintain
  }
})
