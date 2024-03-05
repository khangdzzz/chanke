export default defineNuxtRouteMiddleware(() => {
    const { checkTokenValid, permission } = useAuth()
    const router = useRouter()

    if (checkTokenValid()) {
        if (permission.value === 'admin') {
            router.push('/dashboard')
            return
        }
    }
})
