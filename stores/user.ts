import { StaffResource } from '@/types'
import { apis } from '@/apis'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<StaffResource>()

  const fetchAuthUser = async () => {
    const me: StaffResource | null | undefined = await apis.evazoomApi
      ?.get('me', {
        retry: INITIATION_RETRY_OPTIONS,
      })
      .json<StaffResource>()
      .catch(() => null)
    if (me) currentUser.value = me
  }

  const isAdmin = computed(() =>
    ADMIN_EMAILS.some(email => currentUser.value?.email === email)
  )

  return {
    isAdmin,
    currentUser,
    fetchAuthUser,
  }
})
