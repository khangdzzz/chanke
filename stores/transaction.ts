import { apis } from '@/apis'
import {
  TransactionHistoryResponse,
  ITransactionHistoryPagination,
  ITransactionHistory,
  ITransactionHistoryResponse,
} from '@/utils'

export const useTransactionStore = defineStore('transaction', () => {
  const historyTransactionAuth = ref<ITransactionHistoryPagination>()
  const tenHistoryTransactionWinNewest = ref<ITransactionHistory[]>()

  const getHistoryTransactionAuth = async (
    condition: string,
    page: number,
    limit: number
  ) => {
    const res: TransactionHistoryResponse | null = await apis
      .chanle!.get(`transation/auth?page=${page}&limit=${limit}${condition}`)
      .json<TransactionHistoryResponse>()
      .catch(() => null)

    if (res && res.success) {
      historyTransactionAuth.value = res.data
    }
  }

  const getTenHistoryTransactionWinNewset = async () => {
    const res: ITransactionHistoryResponse | null = await apis
      .chanle!.get(`transation/ten-history-win`)
      .json<ITransactionHistoryResponse>()
      .catch(() => null)

    if (res && res.success) {
      tenHistoryTransactionWinNewest.value = res.data
    }
  }

  return {
    tenHistoryTransactionWinNewest,
    historyTransactionAuth,
    getTenHistoryTransactionWinNewset,
    getHistoryTransactionAuth,
  }
})
