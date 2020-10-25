import React, { FunctionComponent, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import './style/overrides.css'
import firebase from './firebase'
import WorkSheet from './components/workSheet'
import Feedback from './components/feedback'
import Nav from './components/nav'
import Information from './components/information'
import MobileDisclaimer from './components/mobileDisclaimer'
import Signup from './components/user/signup'
import AuthContext from './context/authContext'
import Login from './components/user/login'
import Workspace from './workspace'

const PrivateRoute: FunctionComponent<any> = ({
  children,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return firebase.auth.currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signup',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

const NotAuthWelcomeScreen = () => {
  return (
    <div style={{ width: '60%', margin: 'auto', textAlign: 'left' }}>
      <h2>Welcome To The First Beta Wave</h2>
      <p>
        Explot is ready to be tried from real users and we hope you are
        interested in trying it out.
      </p>
      <p>
        Since its a beta most of the features are still not fully enabled (like
        all the different chart types) and things might not work correctly or
        looks a bit odd so please don't hesitate to click that{' '}
        <code>feedback</code> button as your feedback is valuable to us to make
        the product event better!
      </p>
      <p>
        To get started head over to the <Link to='/signup'>sign up</Link> page
        and create a account. If you already have an account you can go straight
        to <Link to='/login'>log in</Link> and continue from there.
      </p>
      <p>
        Best of luck! <br /> The Explot Team
      </p>
    </div>
  )
}

function App() {
  const [isLoggedIn, loggIn] = useState(false)
  const [activeUser, setUser] = useState<any>(null)

  firebase.auth.onAuthStateChanged((user) => {
    console.log('status change', user)
    if (user && !activeUser) {
      console.log('setting user')
      setUser(user)
    }
    if (!user) {
      setUser(null)
    }
  })
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/signup' component={Signup} />

          <Route exact path='/login' component={Login} />
          <Route exact path='/'>
            {activeUser ? (
              <Workspace user={activeUser} />
            ) : (
              <NotAuthWelcomeScreen />
            )}
          </Route>
          {/*<PrivateRoute path='/' authenticated={isLoggedIn}>
            {Worspace}
          </PrivateRoute>*/}
        </Switch>
      </Router>
    </div>
  )
}

export default App
