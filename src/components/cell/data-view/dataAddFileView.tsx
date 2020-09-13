import React, { FunctionComponent, useState } from 'react'
import readAndUploadFile from '../../../utils/filereader'
//import { FileUpload, Button } from '@patternfly/react-core'
//import { Dataset } from '../../../types'

const FileDisplay: FunctionComponent<any> = ({ name, size }) => {
  return <div></div>
}

const DataAddFileView: FunctionComponent = () => {
  const [file, setFile] = useState<File | null>(null)

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
      <div>
        <h2>{file?.name}</h2>
        <p>{file?.size}</p>
        <button onClick={() => setFile(null)}>Clear</button>
        <button
          onClick={() => {
            console.log('called', file)
            // do the file parsing here
            if (file) {
              readAndUploadFile(file)
            }
          }}
        >
          Upload
        </button>
      </div>
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
