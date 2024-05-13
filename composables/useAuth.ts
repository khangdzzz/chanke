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
    const token = useCookie('accessToken')
    if (token.value) {
      return checkToken(token.value)
    }
    return false
  }

  const getUserName = () => {
    const token = useCookie('accessToken')

    if (!token.value) return ''

    const decodedToken = parseJwt(token.value as string)

    return decodedToken.username
  }

  const getAuthUser = () => {
    const token = useCookie('accessToken')

    if (!token.value) return ''

    const decodedToken = parseJwt(token.value as string)

    return decodedToken
  }



  const checkUpdateBank = () => {
    const token = useCookie('accessToken')

    if (!token.value) return false
    
    const decodedToken = parseJwt(token.value as string)

    if (!decodedToken.accountNumber || !decodedToken.accountName || !decodedToken.bankcode) {
      return false
    }

    return true
  }
  return {
    username,
    permission,
    checkToken,
    checkTokenValid,
    getUserName,
    checkUpdateBank,
    getAuthUser
  }
}
