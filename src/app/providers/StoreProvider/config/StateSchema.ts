import {
  type AnyAction,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type CombinedState } from 'redux'
import { type AxiosInstance } from 'axios'
import { type UserSchema } from 'entities/User'
import { type rtkApi } from 'shared/api/rtkApi'

export interface StateSchema {
  user: UserSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Асинхронные редюсеры
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
