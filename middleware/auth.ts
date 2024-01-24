export default defineNuxtRouteMiddleware(() => {
  const token = window.localStorage.getItem('accessToken')
  if (token) {
    const { checkToken } = useAuth()

    const isTokenExpired = checkToken(token)

    console.log('Token found.', isTokenExpired)

    if (isTokenExpired) {
      console.log('Token has expired.')
      return navigateTo('/login')
    } else {
      console.log('Token is valid.')
    }
  } else {
    console.log('Token not found.')
    return navigateTo('/login')
  }
})
