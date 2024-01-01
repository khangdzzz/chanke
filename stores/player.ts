import { apis } from '@/apis'
interface IPlayer {
  amount?: number
  bankcode: string
  phone: string
  userid: string
}

export const usePlayerStore = defineStore('player', () => {
  const isCreateSuccess = ref(false)
  const isCreateFail = ref(false)
  const create = async (body: IPlayer) => {
    const res: { success: boolean; message: string } | null = await apis
      .chanle!.post('player/playData', {
        json: body,
      })
      .json<{ success: boolean; message: string }>()
      .catch(() => null)

    isCreateSuccess.value = res?.success ?? false
    isCreateFail.value = !isCreateSuccess.value
  }

  const getPlayData = async () => {
    await apis.chanle
      ?.get('player/playData')
      .json()
      .catch(() => null)
  }

  return {
    isCreateSuccess,
    isCreateFail,
    create,
    getPlayData,
  }
})
