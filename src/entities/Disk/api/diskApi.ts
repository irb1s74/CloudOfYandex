import { rtkApi } from 'shared/api/rtkApi'
import { type Disk } from '../model/types/disk'

const diskApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFilesByPath: build.query<Disk, string>({
      query: (path: string) => ({
        url: `v1/disk/resources?path=${path}`,
        method: 'GET',
      }),
    }),
    getUploadHref: build.mutation<{ href: string; method: string }, string>({
      query: (path) => ({
        url: `v1/disk/resources/upload?path=${path}`,
        method: 'get',
      }),
    }),
  }),
})

export const { useGetFilesByPathQuery } = diskApi
export const getUploadHref = diskApi.endpoints.getUploadHref.initiate
