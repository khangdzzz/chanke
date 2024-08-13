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

  const checkContentExit = async (content: string) => {
    const res: IResponse | null = await apis
      .chanle!.get(`game/checkContentExits?content=${content}`)
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      isExitContentInDB.value = true
    } else {
      isExitContentInDB.value = false
    }
  }

  const createNewGame = async (body: Game[]) => {
    const token = useCookie('accessToken')
    const res: IResponse | null = await apis
      .chanle!.post(`game/createReward`, {
        json: body,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      await getAllGames()
    }
  }

  const createNewGameDetail = async (body: Game) => {
    const token = useCookie('accessToken')
    const res: IResponse | null = await apis
      .chanle!.post(`game/createGame`, {
        json: body,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      statusCreateNewGame.value = 'success'
    } else {
      statusCreateNewGame.value = 'fail'
    }
  }

  const getAllGames = async () => {
    const res: IResponse | null = await apis
      .chanle!.get(`game/getAllGame`)
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      listGames.value = res.data
    }
  }

  const getAllResultType = async () => {
    const res: IResponse | null = await apis
      .chanle!.get(`game/getResultType`)
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      resultTypeList.value = res.data
    }
  }

  const updateGame = async (id: string, body: Game) => {
    const token = useCookie('accessToken')
    const res: IResponse | null = await apis
      .chanle!.put(`game/updateGame/${id}`, {
        json: body,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      await getAllGames()
    }
  }

  const deleteGame = async (id: string) => {
    const token = useCookie('accessToken')
    const res: IResponse | null = await apis
      .chanle!.delete(`game/deleteGame/${id}`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      await getAllGames()
    }
  }

  const updateStatusGame = async (id: string, body: { status: boolean }) => {
    const token = useCookie('accessToken')
    await apis
      .chanle!.put(`game/updateStatusGame/${id}`, {
        json: body,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .json<IResponse>()
      .catch(() => null)
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
    getAllGames,
    updateGame,
    deleteGame,
    createNewGame,
    getAllResultType,
    checkContentExit,
    createNewGameDetail,
    getListGameDetail,
    updateStatusGame,
  }
})
