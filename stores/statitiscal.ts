import { apis } from '@/apis'
import { Statistical, StatisticalResponse } from '@/utils'

export const useStatisticalStore = defineStore('statitiscal', () => {
  const statistical = ref<Statistical[]>()

  const getStatistical = async (condition: string) => {
    const res = await apis.chanle
      ?.get('statistical/search' + condition)
      .json<StatisticalResponse>()
      .catch(() => null)

    if (res && res.success) {
      statistical.value = res.data
    }
  }

  return {
    statistical,
    getStatistical
  }
})
