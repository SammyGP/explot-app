import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/authContext'
import firebase from '../../firebase'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const authContext = useContext(AuthContext)
  const history = useHistory()

  const handleChange = (e: any) => {
    const name = e.target.name
    const value = e.target.value

    setUser((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const onLogin = () => {
    firebase.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => history.replace('/'))
      .catch((err) => alert(err.message))
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onLogin()
        }}
      >
        <div>
          <label>E-mail</label>
          <input
            type='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <input type='submit' value='login' />
      </form>
    </div>
  )
}

export default Login
