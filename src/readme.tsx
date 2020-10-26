import React from 'react'
import styled from 'styled-components'

const ReadmeContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  div {
    margin: auto;
    width: 66%;
    ul,
    h1,
    p {
      text-decoration: none;
      text-align: left;
    }
    code {
      background-color: rgb(239, 239, 239);
    }
  }
`

const Readme = () => {
  return (
    <ReadmeContainer>
      <div>
        <h1>Readme</h1>
        <p>
          Hi and welcome to the Explot beta 2020 Q4. Thank you for signing up
          and I hope you get some usage of this tool.
        </p>
        <p>
          <u>
            So here's a little bit of what features there is in this beta and
            what isn't
          </u>
          . This beta is focused on the{' '}
          <em>link between data and visualization</em>, the goal is to have a
          painless process from uploading a data file to visualizing it.
          Therefore some features are not enabled yet and a still a work in
          progress, such as manipulating/converting data, and saving the chart
          or file, at the moment the only supported format is <code>CSV</code>{' '}
          but more will be added in the future. Take a look on the list bellow
          to see the mini roadmap and what will come in the next.
        </p>
        <p>
          One last thing, if you encounter any issues or thoughts don't hesitate
          to reach out to my e-mail at <code>samuel@explot.io</code>
        </p>
        <p>
          Kind Regards <br /> Sam
        </p>
        <ul>
          <h3>Under Development</h3>
          <li>Support uploading excel files</li>
          <li>Data manipulation of the tabular data</li>
          <li>Pie and chart and multiple axi-charts</li>
          <h3>On the horizon</h3>
          <li>Export and save files</li>
          <li>Export and save the output charts</li>
          <li>
            Non-file data sources, such as google-analytics or a SQL-database
          </li>
          <li>Saving files to the cloud</li>
          <li>
            Locking the files and chart output to create a self updating
            dashboard
          </li>
        </ul>
      </div>
    </ReadmeContainer>
  )
}

export default Readme
