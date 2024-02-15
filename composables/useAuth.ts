import { de } from "date-fns/locale"

export const useAuth = () => {
  const permission = ref('')
  const username = ref('')

  const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )

    return JSON.parse(jsonPayload)
  }
  const checkToken = (token: string) => {
    const decodedToken = parseJwt(token)
    permission.value = decodedToken.permission
    username.value = decodedToken.username

    const dateNow = new Date()

    return decodedToken.exp > dateNow.getTime() / 1000
  }

  const checkTokenValid = () => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      return checkToken(token)
    }
    return false
  }

  const getUserName = () => {
    const token = localStorage.getItem('accessToken')
    const decodedToken = parseJwt(token as string)

    return decodedToken.username
  }
  return {
    username,
    permission,
    checkToken,
    checkTokenValid,
    getUserName
  }
}
