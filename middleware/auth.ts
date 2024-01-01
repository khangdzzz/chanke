export default defineNuxtRouteMiddleware(() => {
  const token = window.localStorage.getItem('accessToken')
  if (token) {
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

    const decodedToken = JSON.parse(jsonPayload)
    const dateNow = new Date()

    if (decodedToken.exp < dateNow.getTime() / 1000) {
      console.log('Token has expired.')
      return navigateTo('/login')
    } else {
      console.log('Token is valid.')
    }
  }
})
