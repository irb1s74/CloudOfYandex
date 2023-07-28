import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getUploadHref } from '../../api/diskApi'

export const uploadFileByHref = createAsyncThunk<
  void,
  { path: string; formData: FormData },
  ThunkConfig<string>
>('user/initAuthData', async ({ path, formData }, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI

  try {
    const response = await dispatch(getUploadHref(path)).unwrap()
    await axios.put(response.href, formData)
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
