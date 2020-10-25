import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import firebase from '../../firebase'
import AuthContext from '../../context/authContext'

const Auth = () => {
  let history = useHistory()
  let location = useLocation()

  const authContext = useContext(AuthContext)

  const handleLogin = () => {
    window.sessionStorage.setItem('explotSession', 'key')
    //@ts-ignore
    let { from } = location?.state || { from: { pathname: '/' } }
    authContext.login('aweaweawe')
    history.replace(from)
  }
  const handleLogout = () => {
    authContext.logout()
    firebase.logout()
  }

  console.log('auth rendered')

  return (
    <div>
      {!authContext.isLoggedIn ? (
        <button onClick={handleLogin}>Log In</button>
      ) : (
        <button onClick={handleLogout}>Log Out</button>
      )}
      <button>Sign Up</button>
    </div>
  )
}

export default Auth
