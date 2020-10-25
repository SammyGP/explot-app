import React, { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import AuthContext from '../../context/authContext'
import ActiveUser from '../../context/authContext'
import UserContext from '../../context/userContext'
import firebase from '../../firebase'
import Nav from '../nav'

// Here we only want to signup the user
// for interest in signing up for beta (they need to contact us through the landing page)

const Signup = () => {
  let history = useHistory()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

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

  const onRegister = () => {
    try {
      firebase
        .register(user.name, user.email, user.password)
        .then(() => history.replace('/'))
        .catch((err) => alert(err.message))
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onRegister()
        }}
      >
        <label htmlFor='form-user-name'>Username</label>
        <input
          type='text'
          id='from-user-name'
          name='name'
          placeholder='Username'
          onChange={handleChange}
          value={user.name}
          required
        />
        <label htmlFor='form-user-email'>E-mail</label>
        <input
          type='email'
          id='from-user-email'
          name='email'
          placeholder='Your e-mail Here'
          onChange={handleChange}
          value={user.email}
          required
        />

        <label htmlFor='form-user-password'>Password</label>
        <input
          type='password'
          id='form-user-password'
          name='password'
          placeholder='*****'
          onChange={handleChange}
          minLength={6}
          required
        />

        <input type='submit' />
      </form>
    </div>
  )
}

export default Signup
