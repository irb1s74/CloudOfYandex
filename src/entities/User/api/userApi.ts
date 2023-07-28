import { rtkApi } from 'shared/api/rtkApi'
import { type User } from '../model/types/user'

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserDataByToken: build.query<{ user: User }, undefined>({
      query: () => ({
        url: `v1/disk`,
        method: 'GET',
      }),
    }),
  }),
})

export const getUserDataByToken = userApi.endpoints.getUserDataByToken.initiate
