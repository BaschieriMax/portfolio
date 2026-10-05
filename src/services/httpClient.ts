import axios from 'axios'

/** Shared Axios instance. The portfolio only talks to third-party APIs, so no baseURL. */
export const httpClient = axios.create({
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
