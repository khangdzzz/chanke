import { apis } from '@/apis'
import {
  TransactionHistoryResponse,
  ITransactionHistoryPagination,
  ITransactionHistory,
  ITransactionHistoryResponse
} from '@/utils'

export const useTransactionStore = defineStore('transaction', () => {
  const historyTransaction = ref<ITransactionHistoryPagination>()
  const tenHistoryTransactionWinNewest = ref<ITransactionHistory[]>()

  const getHistoryTransaction = async (nickname: string, page: number, limit: number) => {
    const res: TransactionHistoryResponse | null = await apis
      .chanle!.get(`transation/history?nickname=${nickname}&page=${page}&limit=${limit}`)
      .json<TransactionHistoryResponse>()
      .catch(() => null)

    if (res && res.success) {
      historyTransaction.value = res.data
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
    historyTransaction,
    tenHistoryTransactionWinNewest,
    getHistoryTransaction,
    getTenHistoryTransactionWinNewset,
  }
})
