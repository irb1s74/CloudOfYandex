import { createSlice } from '@reduxjs/toolkit'
import { uploadFileByHref } from 'entities/Disk'

const initialState = {}

export const diskSlice = createSlice({
  name: 'disk',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadFileByHref.fulfilled, (state, { payload }) => {})
  },
})

export const { actions: diskActions } = diskSlice
export const { reducer: diskReducer } = diskSlice
