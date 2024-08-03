import { apis } from '@/apis'
import {
  IGiftCode,
  IGiftCodeLog,
  IGiftCodeLogResponse,
  IGiftCodeResponse,
  IResponse,
} from '@/utils'

export interface ICreateGiftCode {
  giftCodeText: string
  money: number
}

export const useGiftCode = defineStore('giftcode', () => {
  const statusCreateGiftCode = ref<boolean>(false)
  const listGiftCodes = ref<IGiftCode[]>([])
  const listLogsGiftCodes = ref<IGiftCodeLog[]>([])

  const createGiftCode = async (body: ICreateGiftCode) => {
    const res: IResponse | null = await apis
      .chanle!.post(`giftcode/create`, { json: body })
      .json<IResponse>()
      .catch(() => null)

    if (res && res.success) {
      statusCreateGiftCode.value = true
    } else {
      statusCreateGiftCode.value = false
    }
  }

  const getAllGiftCode = async (type = 'all') => {
    const res = await apis.chanle
      ?.get('giftcode?type=' + type)
      .json<IGiftCodeResponse>()
      .catch(() => null)

    if (res && res.success) {
      listGiftCodes.value = res.data
    }
  }

  const getAllLogsGiftCode = async (type = 'all') => {
    const res = await apis.chanle
      ?.get('giftcode/logs')
      .json<IGiftCodeLogResponse>()
      .catch(() => null)

    if (res && res.success) {
      listLogsGiftCodes.value = res.data
    }
  }

  return {
    listGiftCodes,
    listLogsGiftCodes,
    statusCreateGiftCode,
    createGiftCode,
    getAllGiftCode,
    getAllLogsGiftCode,
  }
})
