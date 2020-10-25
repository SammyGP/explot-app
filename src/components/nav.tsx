import React from 'react'
import { Home32 } from '@carbon/icons-react'
import firebase from '../firebase'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './generic/button'
import { ReactComponent as Logo } from '../explore.svg'

const Navbar = styled.nav<any>`
  width: 100%;
  height: 3.5rem;
  background-color: ${(props) => (props.isLoggedIn ? '#24b47e' : '#e2e8f0')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  div {
    margin: 1rem 1rem;
    display: inline;
    span,
    button {
      margin: 0 0.5rem 0 0.5rem;
    }
  }
`

const Nav = () => {
  return (
    <Navbar isLoggedIn={!!firebase.auth.currentUser}>
      <div>
        <Link to='/'>
          <Logo height='32px' width='32px' />
        </Link>
        {firebase.isLoggedIn() && <Button secondary>Feedback</Button>}
      </div>
      <h2>
        <Link to='/'>
          Explot - <code>Beta</code>
        </Link>
      </h2>
      <div>
        {firebase.isLoggedIn() ? (
          <>
            <span>{firebase.auth.currentUser?.email}</span>
            <Button onClick={() => firebase.logout()}>Sign Out</Button>
          </>
        ) : (
          <>
            <Button primary>
              <Link to='/login'>Log In</Link>
            </Button>
            <Button>
              <Link to='/signup'>Sign Up</Link>
            </Button>
          </>
        )}
      </div>
    </Navbar>
  )

  return (
    <nav className='flex w-full h-14 p-4 my-auto bg-gray-300 shadow sticky top-0 z-50 '>
      <p>User {firebase.auth.currentUser?.email}</p>
      <a href='https://www.explot.io'>
        <Home32 className='my-auto' />
      </a>
      <h3 className='mb-0 items-center justify-center mx-auto'>
        Explot - Demo
      </h3>
      <ul className='flex inline-block px-8 absolute right-0 items-center justify-center'>
        <li className='px-4'>
          <a href='https://www.explot.io/trial'>Beta Opt-in</a>
        </li>
        <li className='px-4'>
          <a href='https://www.explot.io/early-access/' target='_blank'>
            <button
              className='gradient px-2 py-1 items-center justify-center border border-transparent text-base leading-6 font-bold text-white hover:text-black hover:shadow-xl focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out'
              type='button'
            >
              Buy early access
            </button>
          </a>
        </li>
      </ul>
      <Link to='/'>SLASH</Link>
      {firebase.auth.currentUser ? (
        <button onClick={() => firebase.logout()}>Sign Out</button>
      ) : (
        <>
          <li className='px-4'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='px-4'>
            <Link to='/signup'>Signup</Link>
          </li>
        </>
      )}
    </nav>
  )
}

export default Nav
