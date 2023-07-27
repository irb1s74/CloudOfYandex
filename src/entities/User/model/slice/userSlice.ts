import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { type User, type UserSchema } from '../types/user'
import { initAuthData } from '../services/initAuthData'

const initialState: UserSchema = {
  _inited: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload
      localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.id)
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.authData = payload
      state._inited = true
    })
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
