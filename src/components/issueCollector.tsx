import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import firebase from '../firebase'

const CollectorStyle = styled.div`
  display: absolute;
  top: 1rem;
  padding: 2rem 0 2rem 0;
  label {
    padding: 0.5rem;
  }
  input {
    margin-top: 0.5rem;
  }
  * {
    display: block;
  }
  textarea {
    width: 80%;
    height: 20vh;
  }
`

const IssueCollector: FunctionComponent<any> = ({ toggleForm }) => {
  const [issue, updateIssue] = useState('')
  return (
    <CollectorStyle>
      <h3>Issue Collector</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const user = firebase.auth.currentUser?.email
          toggleForm(false)
          alert('Thank you for your feedback')
        }}
      >
        <label>Describe the Issue</label>
        <textarea
          value={issue}
          onChange={(e) => updateIssue(e.target.value)}
        ></textarea>
        <input type='submit' />
      </form>
    </CollectorStyle>
  )
}

export default IssueCollector
