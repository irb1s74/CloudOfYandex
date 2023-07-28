import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { getUserDataByToken } from '../../api/userApi'
import { type User } from '../types/user'

export const initAuthData = createAsyncThunk<User, undefined, ThunkConfig<string>>(
  'user/initAuthData',
  async (arg, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY)

    if (!token) {
      return rejectWithValue('')
    }

    try {
      const response = await dispatch(getUserDataByToken(undefined)).unwrap()
      return response.user
    } catch (e) {
      console.log(e)
      return rejectWithValue('')
    }
  },
)
