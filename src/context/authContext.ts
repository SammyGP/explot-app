import React from 'react'

let token: string | null | undefined = null

type IAuthContext = {
  isLoggedIn: boolean
  token: string | null
  login: (arg0: string | undefined) => void
  logout: () => void
}

const AuthContext = React.createContext<IAuthContext>({
  isLoggedIn: false,
  token,
  login: (refreshToken) => {
    token = refreshToken
  },
  logout: () => {},
})

export default AuthContext
