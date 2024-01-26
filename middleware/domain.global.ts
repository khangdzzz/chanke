export default defineNuxtRouteMiddleware((to, from) => {
  const route = useRoute()
  const { HOME_URL, ADMIN_URL } = useRuntimeConfig()
  const currentDomain = window.location.origin
  const currentPath = route.path

  if (currentDomain === ADMIN_URL && (currentPath === '/' || to.path === '/')) {
    return navigateTo(currentDomain + '/dashboard', { external: true })
  }

  if (currentDomain === HOME_URL && currentPath != '/') {
    return navigateTo(currentDomain, { external: true })
  }
})
