import React from 'react'
import logo from './logo.svg'
import './App.css'
import WorkSheet from './components/workSheet'
import Feedback from './components/feedback'
import Nav from './components/nav'
import Information from './components/information'
import MobileDisclaimer from './components/mobileDisclaimer'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <div className='min-h-screen bg-gray-100'>
        <Nav />
        <WorkSheet />
        <Feedback />
      </div>
    </div>
  )
}

export default App
