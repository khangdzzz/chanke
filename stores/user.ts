import { apis } from '@/apis'
import { is } from 'date-fns/locale'
import { IResponse, IUserResponse, IUsersResponse, User } from '~~/utils'
interface LoginBody {
  username: string
  password: string
}

interface RegisterBody {
  username: string
  password: string
}

interface UpdateUser {
  username: string
  bankcode: string
  accountNumber: string
  accountName: string
}

interface UpdatePassword {
  username: string
  password: string
  newPassword: string
}

export const useUserStore = defineStore('user', () => {
  const isLoginSuccess = ref(false)
  const isLoginFail = ref(false)
  const isUpdated = ref(false)
  const isRegisterSuccess = ref(false)
  const authUser = ref<User>()
  const isUpdatePassword = ref(false)
  const users = ref<User[]>([])

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

  const register = async (body: RegisterBody) => {
    const res: IResponse | null = await apis
      .chanle!.post('user/register', {
        json: body,
      })
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      window.localStorage.setItem('accessToken', res?.data)
    }
    isRegisterSuccess.value = res?.success ? true : false
  }

  const updateUser = async (body: UpdateUser) => {
    const res: IResponse | null = await apis
      .chanle!.put('user/update', {
        json: body,
      })
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      isUpdated.value = true
    } else isUpdated.value = false
  }

  const getDetailUser = async (username: string) => {
    const res: IUserResponse | null = await apis
      .chanle!.get('user/detail-user?username=' + username)
      .json<IUserResponse>()
      .catch(() => null)

    if (res?.success) {
      authUser.value = res?.data
    }
  }

  const getAllUsers = async () => {
    const res: IUsersResponse | null = await apis
      .chanle!.get('user/all')
      .json<IUsersResponse>()
      .catch(() => null)

    if (res?.success) {
      users.value = res?.data
    }
  }

  const updatePassword = async (body: UpdatePassword) => {
    const res: IResponse | null = await apis
      .chanle!.put('user/change-pass', {
        json: body,
      })
      .json<IResponse>()
      .catch(() => null)

    if (res?.success) {
      isUpdatePassword.value = true
    } else isUpdatePassword.value = false
  }

  const deleteUser = async (username: string) => {
    const res = await apis.chanle
      ?.delete(`user?username=${username}`)
      .json<IResponse>()
      .catch(() => null)

    if (res && res.success) {
      await getAllUsers()
    }
  }

  return {
    isLoginSuccess,
    isLoginFail,
    isRegisterSuccess,
    isUpdated,
    authUser,
    isUpdatePassword,
    users,
    login,
    register,
    updateUser,
    getDetailUser,
    updatePassword,
    getAllUsers,
    deleteUser
  }
})
