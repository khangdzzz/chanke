import { apis } from '@/apis'
import { IResponse } from '~~/utils'
interface LoginBody {
  username: string
  password: string
}

export const useUserStore = defineStore('user', () => {
  const isLoginSuccess = ref(false)
  const isLoginFail = ref(false)
  const login = async (body: LoginBody) => {
    const res: IResponse | null = await apis
      .chanle!.post('user/login', {
        json: body,
      })
      .json<IResponse>()
      .catch(() => null)

    isLoginSuccess.value = res?.success ? true : false
    isLoginFail.value = res?.success ? false : true

    if (res?.success) {
      window.localStorage.setItem('accessToken', res?.data)
    }
  }

  return {
    isLoginSuccess,
    isLoginFail,
    login,
  }
})
