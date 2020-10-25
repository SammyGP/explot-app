import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/authContext'
import firebase from '../../firebase'
import Form from '../generic/form'

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
    <Form>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onLogin()
        }}
      >
        {' '}
        <h2>Sign In</h2>
        <div>
          <label>E-mail</label>
          <input
            type='email'
            name='email'
            value={user.email}
            placeholder={'Your E-mai'}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={user.password}
            placeholder={'Your Password'}
            onChange={handleChange}
          />
        </div>
        <input type='submit' value='login' />
      </form>
    </Form>
  )
}

export default Login
