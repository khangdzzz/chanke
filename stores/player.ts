import { apis } from '@/apis'
import { IPlayer, PlayerResponse, UserResponse } from '@/utils'

export const usePlayerStore = defineStore('player', () => {
  const isCreateSuccess = ref(false)
  const isCreateFail = ref(false)
  const statusUpdate = ref(false)
  const player = ref<IPlayer[]>([])

  const create = async (body: IPlayer) => {
    const res: { success: boolean; message: string } | null = await apis
      .chanle!.post('player', {
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
      ?.get('player')
      .json<PlayerResponse>()
      .catch(() => null)

    if (res && res.success) {
      player.value = res.data
    }
  }

  const getPlayererDataByUserId = async (userid: string) => {
    const res = await apis.chanle
      ?.get('player/nickname?userid=' + userid)
      .json<PlayerResponse>()
      .catch(() => null)

    if (res && res.success) {
      player.value = res.data
    }
  }

  const updatePlayer = async (body: IPlayer, id: string) => {
    const res = await apis.chanle
      ?.put(`player/${id}`, {
        json: body,
      })
      .json<PlayerResponse>()
      .catch(() => null)

    if (res && res.success) {
      await getPlayerData()
      statusUpdate.value = true
    } else statusUpdate.value = false
  }

  const deletePlayer = async (id: string) => {
    const res = await apis.chanle
      ?.delete(`player/${id}`)
      .json<PlayerResponse>()
      .catch(() => null)

    if (res && res.success) {
      await getPlayerData()
    }
  }

  return {
    isCreateSuccess,
    isCreateFail,
    player,
    statusUpdate,
    create,
    getPlayerData,
    updatePlayer,
    deletePlayer,
    getPlayererDataByUserId,
  }
})
