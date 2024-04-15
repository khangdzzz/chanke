import ky from 'ky-universal'
import type { KyInstance } from 'ky/distribution/types/ky'

interface API {
  chanle: null | KyInstance,
  blog: null | KyInstance
}

export const apis: API = {
  chanle: null,
  blog: null,
}

export function createAPI(baseURL: string) {
  return ky.create({
    prefixUrl: baseURL,
    timeout: 30000,
    credentials: 'include',
  })
}
