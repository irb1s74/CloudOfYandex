export interface User {
  id: string
  authToken: string
  username: string
  avatar?: string
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
