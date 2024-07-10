import { apis } from '@/apis'
import { IBankAdmin, IResponse, BankAdminResponse } from '@/utils'

export const useAdminStore = defineStore('admin', () => {
  const bankAdminClient = ref<IBankAdmin[]>([])

  const getBankAdminClient = async () => {
    const res: BankAdminResponse | null = await apis
      .chanle!.get('bank-client')
      .json<BankAdminResponse>()
      .catch(() => null)

    if (res && res.success) {
      bankAdminClient.value = res.data
    }
  }

  const deleteBankAdmin = async (id: string) => {
    await apis
      .chanle!.delete(`admin/bank/${id}`)
      .json<IResponse>()
      .catch(() => null)
  }

  return {
    bankAdminClient,
    getBankAdminClient,
    deleteBankAdmin,
  }
})
