import { apis } from '@/apis'
import {
  TransactionHistoryResponse,
  ITransactionHistoryPagination,
  ITransactionHistory,
  ITransactionHistoryResponse,
  CashHistoryResponse,
  ICashHistoryPagination,
  IResponse,
  Ctv,
  CtvResponse,
} from '@/utils'

export interface IBodyDetectTransaction {
  transaction_id: string
}

export const useTransactionStore = defineStore('transaction', () => {
  const historyTransaction = ref<ITransactionHistoryPagination>()
  const historyTransactionLatest = ref<ITransactionHistoryPagination>()
  const historyTransactionAuth = ref<ITransactionHistoryPagination>()
  const historyCashLatest = ref<ICashHistoryPagination>()
  const tenHistoryTransactionWinNewest = ref<ITransactionHistory[]>()
  const isCallPaymentSuccess = ref<boolean>(false)
  const isDetectTransactionSuccess = ref<boolean>(false)
  const ctvData = ref<Ctv[]>()
  const rankData = ref<Ctv[]>()
  const isPaymentIntro = ref(false)

  const getHistoryTransaction = async (
    nickname: string,
    page: number,
    limit: number
  ) => {
    const res: TransactionHistoryResponse | null = await apis
      .chanle!.get(
        `transation/history-by-nickname?nickname=${nickname}&page=${page}&limit=${limit}`
      )
      .json<TransactionHistoryResponse>()
      .catch(() => null)

    if (res && res.success) {
      historyTransaction.value = res.data
    }
  }

  const getHistoryTransactionLatest = async (
    condition: string,
    page: number,
    limit: number
  ) => {
    console.log('here', condition)
    const res: TransactionHistoryResponse | null = await apis
      .chanle!.get(
        `transation/history-player?page=${page}&limit=${limit}${condition}`
      )
      .json<TransactionHistoryResponse>()
      .catch(() => null)

    console.log('res', res)

    if (res && res.success) {
      historyTransactionLatest.value = res.data

      console.log('historyTransactionLatest', historyTransactionLatest.value)
    }
  }

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

  const getHistoryCashLatest = async (
    condition: string,
    page: number,
    limit: number
  ) => {
    const res: CashHistoryResponse | null = await apis
      .chanle!.get(
        `transation/history-cash?page=${page}&limit=${limit}${condition}`
      )
      .json<CashHistoryResponse>()
      .catch(() => null)

    if (res && res.success) {
      historyCashLatest.value = res.data
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

  const callBackPayment = async (username: string, transactionId: string) => {
    const res = await apis
      .chanle!.get(
        `private/call-back-payment?username=${username}&transactionId=${transactionId}`
      )
      .json<IResponse>()
      .catch(() => null)

    if (res && res.success) {
      isCallPaymentSuccess.value = true
    } else {
      isCallPaymentSuccess.value = false
    }
  }

  const detectTransaction = async (body: IBodyDetectTransaction) => {
    const res = await apis
      .chanle!.post('private/detect', {
        json: body,
      })
      .json<IResponse>()
      .catch(() => null)

    if (res && res.success) {
      isDetectTransactionSuccess.value = true
    } else {
      isDetectTransactionSuccess.value = false
    }
  }

  const paymentIntro = async (username: string) => {
    const res = await apis
      .chanle!.post('private/paymentIntro', {
        json: {
          username,
        },
      })
      .json<IResponse>()
      .catch(() => null)

    if (res && res.success) {
      isPaymentIntro.value = true
    } else {
      isPaymentIntro.value = false
    }
  }

  const getRankInfor = async (month: number | string) => {
    const res = await apis
      .chanle!.get(`transation/rank?month=${month}`)
      .json<CtvResponse>()
      .catch(() => null)

    if (res?.success) rankData.value = res.data
  }

  const getCtvInfor = async () => {
    const res = await apis
      .chanle!.get(`transation/ctv`)
      .json<CtvResponse>()
      .catch(() => null)

    if (res?.success) ctvData.value = res.data
  }

  return {
    historyCashLatest,
    historyTransaction,
    historyTransactionLatest,
    tenHistoryTransactionWinNewest,
    isCallPaymentSuccess,
    historyTransactionAuth,
    isDetectTransactionSuccess,
    ctvData,
    rankData,
    paymentIntro,
    getHistoryCashLatest,
    getHistoryTransaction,
    getHistoryTransactionLatest,
    getTenHistoryTransactionWinNewset,
    callBackPayment,
    getHistoryTransactionAuth,
    detectTransaction,
    getCtvInfor,
    getRankInfor,
    isPaymentIntro,
  }
})
