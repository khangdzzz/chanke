import ky from 'ky-universal'
import type { KyInstance } from 'ky/distribution/types/ky'

interface API {
  evazoomApi: null | KyInstance
}

export const apis: API = {
  evazoomApi: null,
}
export function createAPI(baseURL: string) {
  return ky.create({
    prefixUrl: baseURL,
    timeout: 30000,
    credentials: 'include',
  })
}
