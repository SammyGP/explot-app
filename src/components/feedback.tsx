import React, { FunctionComponent, useState } from 'react'
import { Help32 } from '@carbon/icons-react'
import styled from 'styled-components'
import IssueCollector from './issueCollector'

const Form: FunctionComponent<any> = ({ toggleForm }) => {
  const [collector, toggle] = useState(false)
  return (
    <div className='shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4 w-64'>
      {collector && <IssueCollector toggleForm={toggleForm} />}
      <div>
        <h3>Getting Started</h3>
        <p>
          Start by uploading a <code>CSV</code> file of your choice. <br />
          Once its Uploaded you will see a table of all the properties of the
          file on the left side and a view of the available charts on the right
          side, pick a chart from the icons. <br />
          Once you have chosen a chart you need to specify what the{' '}
          <code>axi</code> of the chart will be (X and Y). You will also need to
          aggregate the data somehow (by max, min average and so on). Be wary
          that there might be some issue by trying to get the max values of a
          column with text data and so on.
        </p>
      </div>
      <button onClick={() => toggle(!collector)}>Issue Collector</button>
    </div>
  )
}

const FeedbackContainer = styled.div<any>`
  background-color: #fff;
  position: fixed;
  bottom: 0.5rem;
  right: 4rem;
  max-width: 33vw;
  font-size: 0.7rem;
  text-align: left;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  svg {
    float: right;
  }
  code {
    background-color: rgb(239, 239, 239);
  }
`

const Feedback = () => {
  const [showForm, toggleForm] = useState(false)
  const css = showForm
    ? 'fixed bottom-0 right-0 px-4 pb-2 '
    : 'fixed bottom-0 right-0 px-4 pb-2'
  return (
    <FeedbackContainer toggled={showForm}>
      {showForm ? <Form toggleForm={toggleForm} /> : <div></div>}
      <div className='float-right'>
        <Help32 onClick={() => toggleForm(!showForm)} />
      </div>
    </FeedbackContainer>
  )
}

export default Feedback
