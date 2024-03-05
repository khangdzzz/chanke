import { apis } from '@/apis'
import {
  IBankAdmin,
  IResponse,
  BankAdminResponse,
  ITransaction,
  ITransactionHistoryPagination
} from '@/utils'

export const useAdminStore = defineStore('admin', () => {
  const isCreateSuccess = ref(false)
  const isCreateFail = ref(false)
  const isHandleTransactionSuccess = ref(false)
  const isHandleTransactionFail = ref(false)
  const bankAdmin = ref<IBankAdmin[]>([])
  const bankAdminClient = ref<IBankAdmin[]>([])

  const createBankAdmin = async (body: IBankAdmin) => {
    const res: IResponse | null = await apis
      .chanle!.post('admin/bank', {
        json: body,
      })
      .json<IResponse>()
      .catch(() => null)

    isCreateSuccess.value = res?.success ?? false
    isCreateFail.value = !isCreateSuccess.value
  }

  const getBankAdmin = async () => {
    const res: BankAdminResponse | null = await apis
      .chanle!.get('admin/bank')
      .json<BankAdminResponse>()
      .catch(() => null)

    if (res && res.success) {
      bankAdmin.value = res.data
    }
  }

  const getBankAdminClient = async () => {
    const res: BankAdminResponse | null = await apis
      .chanle!.get('bank-client')
      .json<BankAdminResponse>()
      .catch(() => null)

    if (res && res.success) {
      bankAdminClient.value = res.data
    }
  }

  const updateBankAdmin = async (body: IBankAdmin) => {
    await apis
      .chanle!.put('admin/bank', {
        json: body,
      })
      .json<BankAdminResponse>()
      .catch(() => null)
  }

  const handleTransaction = async (body: ITransaction) => {
    const res: IResponse | null = await apis
      .chanle!.post('transation', {
        json: body,
      })
      .json<IResponse>()
      .catch(() => null)

    isHandleTransactionSuccess.value = res?.success ?? false
    isHandleTransactionFail.value = !isHandleTransactionSuccess.value
  }

  const deleteBankAdmin = async (id: string) => {
    await apis
      .chanle!.delete(`admin/bank/${id}`)
      .json<IResponse>()
      .catch(() => null)
  }

  return {
    isCreateSuccess,
    isCreateFail,
    bankAdmin,
    isHandleTransactionSuccess,
    isHandleTransactionFail,
    bankAdminClient,
    createBankAdmin,
    getBankAdmin,
    updateBankAdmin,
    handleTransaction,
    getBankAdminClient,
    deleteBankAdmin
  }
})
