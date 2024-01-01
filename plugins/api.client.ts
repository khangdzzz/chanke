import { createAPI, apis } from '@/apis'

export default defineNuxtPlugin(async () => {
  const runtimeConfig = useRuntimeConfig()
  apis.chanle = createAPI(runtimeConfig.API_BASE_URL)
})
