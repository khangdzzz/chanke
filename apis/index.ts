import ky from 'ky-universal'
import type { KyInstance } from 'ky/distribution/types/ky'

interface API {
  chanle: null | KyInstance
}

export const apis: API = {
  chanle: null,
}

export function createAPI(baseURL: string) {
  // Check for an access token in local storage
  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  // Create a headers object
  const headers = {};

  // If an access token exists, add it to the headers
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return ky.create({
    prefixUrl: baseURL,
    timeout: 30000,
    credentials: 'include',
    headers: headers
  })
}
