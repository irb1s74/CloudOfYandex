import { rtkApi } from 'shared/api/rtkApi'
import { type User } from '../model/types/user'

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserDataByToken: build.query<User, string>({
      query: (token) => ({
        url: `https://login.yandex.ru/info`,
        baseUrl: '',
        method: 'GET',
        headers: {
          Authorization: 'OAuth y0_AgAAAAARrso1AADLWwAAAADo0eej0M3a7pmTSGiqW-y7kIIQLWAkStc',
        },
      }),
    }),
  }),
})

export const getUserDataByToken = userApi.endpoints.getUserDataByToken.initiate
