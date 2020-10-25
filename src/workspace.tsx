import { User } from 'firebase'
import React, { FunctionComponent } from 'react'
import Feedback from './components/feedback'
import WorkSheet from './components/workSheet'

// Handles contet of the workspace such as user info ie files they have and presets if any etc
// (all user handling that not to do with auth as they already logged in)
const Workspace: FunctionComponent<{ user: User }> = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <WorkSheet />
      <Feedback />
    </div>
  )
}

export default Workspace
