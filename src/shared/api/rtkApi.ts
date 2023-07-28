import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
      headers.set('Accept', '*/*')
      headers.set('Host', ' api.yandex.net')
      headers.set('Origin', 'http://localhost:3000')
      headers.set('Referer', 'http://localhost:3000/')
      if (token) {
        headers.set('Authorization', `OAuth ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({}),
})
