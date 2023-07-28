import { rtkApi } from 'shared/api/rtkApi'
import { type User } from '../model/types/user'

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserDataByToken: build.query<User, string>({
      query: (token) => ({
        url: `https://login.yandex.ru/info`,
        method: 'GET',
      }),
    }),
  }),
})

export const getUserDataByToken = userApi.endpoints.getUserDataByToken.initiate
