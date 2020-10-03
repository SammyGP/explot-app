import React from 'react'
import logo from './logo.svg'
import './App.css'
import './style/overrides.css'
import WorkSheet from './components/workSheet'
import Feedback from './components/feedback'
import Nav from './components/nav'
import Information from './components/information'
import MobileDisclaimer from './components/mobileDisclaimer'

function App() {
  return (
    <div className='App'>
      <div className='min-h-screen bg-gray-100'>
        <Nav />
        <WorkSheet />
        <Feedback />
      </div>
    </div>
  )
}

export default App
