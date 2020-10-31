import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import mixpanel from 'mixpanel-browser'
import './App.css'
import './style/overrides.css'
import firebase from './firebase'
import Nav from './components/nav'
import Signup from './components/user/signup'
import Login from './components/user/login'
import Workspace from './workspace'
import Readme from './readme'

mixpanel.init(
  '65c097f9573764c7d98a0488e0e4ed33',
  { api_host: 'https://api-eu.mixpanel.com' },
  ''
)

const NotAuthWelcomeScreen = () => {
  return (
    <div style={{ width: '60%', margin: 'auto', textAlign: 'left' }}>
      <h2>Welcome To The First Beta Wave</h2>
      <p>
        Explot is ready to be experience by real users and we hope you are
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
  const [activeUser, setUser] = useState<any>(null)

  firebase.auth.onAuthStateChanged((user) => {
    if (user && !activeUser) {
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
          <Route exact path='/readme' component={Readme} />
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
