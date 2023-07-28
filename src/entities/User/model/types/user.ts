export interface User {
  uid: string
  display_name: string
  login: string
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
