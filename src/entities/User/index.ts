export type { UserSchema, User } from './model/types/user'

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserInited } from './model/selectors/getUserInited/getUserInited'
export { userReducer } from './model/slice/userSlice'
