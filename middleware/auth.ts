export default defineNuxtRouteMiddleware(() => {
  const { checkTokenValid } = useAuth()

  const isTokenExpired = checkTokenValid()

  if (!isTokenExpired) {
    console.log('Token has expired.')
    return navigateTo('/user/login')
  } else {
    console.log('Token is valid.')
  }

})
