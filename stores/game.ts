import { apis } from '@/apis'
import { IResponse, Game } from '~~/utils'

export const useGameStore = defineStore('game', () => {
  const reward = ref<Game[]>([])
  const gameType = ref('')

  const getReward = async (gameType: string) => {
    const res: IResponse | null = await apis
      .chanle!.get(`game/getReward?gameType=${gameType}`)
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      reward.value = res.data
    }
  }

  return {
    reward,
    gameType,
    getReward,
  }
})
