import { apis } from '@/apis'
import { IResponse, Game, IListGame, IListGameDetail } from '~~/utils'

export const useGameStore = defineStore('game', () => {
  const reward = ref<Game[]>([])
  const listGames = ref<IListGame[]>([])
  const gameType = ref('')
  const gameName = ref('Chẵn Lẻ')
  const resultTypeList = ref<{ _id: string }[]>([])
  const listGamesDetail = ref<IListGameDetail[]>([])
  const isExitContentInDB = ref(false)
  const statusCreateNewGame = ref('')

  const getReward = async (gameType: string) => {
    const res: IResponse | null = await apis
      .chanle!.get(`game/getReward?gameType=${gameType}`)
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      reward.value = res.data
    }
  }

  const getListGameDetail = async (status?: string) => {
    const query = status ? `?status=${status}` : ''
    const res: IResponse | null = await apis
      .chanle!.get(`game/getGameDetail${query}`)
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      listGamesDetail.value = res.data
    }
  }

  return {
    reward,
    gameType,
    listGames,
    gameName,
    resultTypeList,
    isExitContentInDB,
    statusCreateNewGame,
    listGamesDetail,
    getReward,
    getListGameDetail,
  }
})
