import { createAPI, apis } from '@/apis'

export default defineNuxtPlugin(async () => {
  const runtimeConfig = useRuntimeConfig()
  apis.evazoomApi = createAPI(runtimeConfig.API_BASE_URL)
})
