import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getUploadHref } from '../../api/diskApi'

export const uploadFileByHref = createAsyncThunk<
  void,
  { path: string; file: File },
  ThunkConfig<string>
>('disk/uploadFileByHref', async ({ path, file }, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI

  try {
    const href = path.length > 0 ? `${path}/${file.name}` : file.name
    const response = await dispatch(getUploadHref(href)).unwrap()
    const formData = new FormData()
    formData.append('file', file)
    await axios.put(response.href, formData)
  } catch (e) {
    return rejectWithValue('')
  }
})
