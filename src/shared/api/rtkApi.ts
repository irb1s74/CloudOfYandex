import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: __API__,
    mode: 'cors',
    credentials: 'same-origin',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
      headers.set('Access-Control-Allow-Origin', '*')
      headers.set(
        'Access-Control-Allow-Headers',
        'Accept, Accept-Language, Authorization, Content-Type, X-Requested-With',
      )
      headers.set('Content-Type', 'application/json')
      if (token) {
        headers.set('Authorization', `OAuth ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({}),
})
