import { apis } from '@/apis'
import { IResponse, Game, IListGame } from '~~/utils'

export const useGameStore = defineStore('game', () => {
  const reward = ref<Game[]>([])
  const games = ref<IListGame[]>([])
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

  const getAllGames = async () => {
    const res: IResponse | null = await apis
      .chanle!.get(`game/getAllGame`)
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      games.value = res.data
    }
  }

  return {
    reward,
    gameType,
    games,
    getReward,
    getAllGames
  }
})
