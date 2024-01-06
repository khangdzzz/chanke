import { apis } from '@/apis'
import { IPlayer, PlayerResponse } from '@/utils'

export const usePlayerStore = defineStore('player', () => {
  const isCreateSuccess = ref(false)
  const isCreateFail = ref(false)
  const player = ref<IPlayer[]>([])

  const create = async (body: IPlayer) => {
    const res: { success: boolean; message: string } | null = await apis
      .chanle!.post('player/playData', {
        json: body,
      })
      .json<{ success: boolean; message: string }>()
      .catch(() => null)

    isCreateSuccess.value = res?.success ?? false
    isCreateFail.value = !isCreateSuccess.value
    await getPlayerData()
  }

  const getPlayerData = async () => {
    const res = await apis.chanle
      ?.get('player/playData')
      .json<PlayerResponse>()
      .catch(() => null)

    if(res && res.success) {
      player.value = res.data
    }
  }

  return {
    isCreateSuccess,
    isCreateFail,
    player,
    create,
    getPlayerData,
  }
})
