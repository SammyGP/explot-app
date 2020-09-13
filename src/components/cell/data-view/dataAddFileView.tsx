import React, { FunctionComponent, useState, useContext } from 'react'
import styled from 'styled-components'
import readAndUploadFile from '../../../utils/filereader'
import { DataFrame } from 'data-forge'
import ActiveDataframe from '../../../context/dataframe'
//import { FileUpload, Button } from '@patternfly/react-core'
//import { Dataset } from '../../../types'

const FileInfoStyler = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 2em;
`

const DataAddFileView: FunctionComponent = () => {
  const [file, setFile] = useState<File | null>(null)
  //const [dataframe, setDataframe] = useState<null | DataFrame>(null)
  const [error, throwError] = useState<null | Error>(null)

  const [dataframe, setDataframe] = useContext(ActiveDataframe)

  if (error) {
    return (
      <div>
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
        <p>Please contact our support at samuel@explot.io about the issue</p>
      </div>
    )
  }

  return (
    <div>
      <form>
        <input
          type='file'
          placeholder='file here'
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0])
            }
          }}
        />
      </form>
      <FileInfoStyler>
        <h2>{file?.name}</h2>
        <p>{file?.size}</p>
        <p>{file?.type}</p>
        <button onClick={() => setFile(null)}>Clear</button>
        <button
          onClick={() => {
            // do the file parsing here
            if (file) {
              readAndUploadFile(file)
                .then((res) => setDataframe(res))
                .catch((e) => throwError(e))
            }
          }}
        >
          Upload
        </button>
      </FileInfoStyler>
    </div>
  )
}

export default DataAddFileView

/*
class DataAddFileView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "", filename: "", isLoading: false }
    this.setView = this.props.setView

    this.handleFileChange = (value, filename, event) => {
      this.setState({ value, filename })
    }
    this.handleFileReadStarted = fileHandle => {
      this.setState({ isLoading: true })
    }
    this.handleFileReadFinished = fileHandle => {
      this.setState({ isLoading: false })
      console.log("the file", fileHandle)
    }
  }

  render() {
    const { value, filename, isLoading } = this.state
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          this.setView(1)
        }}
      >
        <FileUpload
          id="simple-text-file"
          type="text"
          value={value}
          filename={filename}
          onChange={this.handleFileChange}
          onReadStarted={this.handleFileReadStarted}
          onReadFinished={this.handleFileReadFinished}
          isLoading={isLoading}
        />
        {value.length >= 1 ? (
          <Button type="submit" variant="secondary">
            Add File
          </Button>
        ) : null}
      </form>
    )
  }
}

export default DataAddFileView
*/
