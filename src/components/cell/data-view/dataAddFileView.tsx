import React, { FunctionComponent, useState, useContext } from 'react'
import styled from 'styled-components'
import { DocumentAdd32, Csv32 } from '@carbon/icons-react'
import Button from '../../generic/button'
import readAndUploadFile from '../../../utils/filereader'
import ActiveDataframe from '../../../context/dataframe'
import mixpanel from 'mixpanel-browser'
//import { FileUpload, Button } from '@patternfly/react-core'
//import { Dataset } from '../../../types'

const FileInfoStyle = styled.div`
  width: 75%;
  height: 75%;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 2em;
  ul {
    padding: 1em 0 1em 0.5em;
    list-style-type: none;
    text-align: left;
    span {
      background-color: rgb(239, 239, 239);
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  }
`
const DataAddFileStyle = styled.div<any>`
  width: 100%;
  form {
    padding-top: 1.5em;
  }
  overflow: auto;
  svg:hover {
    transform: scale(1.1);
  }
`

const DataAddFileView: FunctionComponent<any> = () => {
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [error, throwError] = useState<null | Error>(null)
  const [showUpload, toggle] = useState(false)

  // This will set the `context` dataframe to be the result of the SetDataframe function
  const [dataframe, setDataframe] = useContext(ActiveDataframe)

  const getFileSize = (number: number) => {
    if (number < 1024) {
      return number + 'bytes'
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + 'KB'
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + 'MB'
    } else {
      return '0'
    }
  }

  if (error) {
    return (
      <div>
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
        <p>Please contact our support at info@explot.io about the issue</p>
      </div>
    )
  }

  return (
    <DataAddFileStyle>
      <form onSubmit={(e) => e.preventDefault()}>
        {!file ? (
          showUpload ? (
            <>
              <h2>
                Choose a <code>CSV</code> File to upload
              </h2>
              <input
                type='file'
                accept='.csv'
                onChange={(e) => {
                  if (e.target.files) {
                    setFile(e.target.files[0])
                  }
                }}
              />
            </>
          ) : (
            <>
              <h2>Choose a File to upload</h2>

              <DocumentAdd32
                height={64}
                width={64}
                onClick={() => toggle(!showUpload)}
              />
            </>
          )
        ) : (
          <FileInfoStyle>
            <Csv32 />
            <ul>
              <li>
                Name: <span>{file?.name}</span>
              </li>
              <li>
                Last Modified:{' '}
                <span>{new Date(file?.lastModified).toDateString()}</span>
              </li>
              <li>
                Size: <span>{getFileSize(file.size)}</span>
              </li>
            </ul>
            <Button onClick={() => setFile(null)}>Clear</Button>
            <Button
              primary
              onClick={() => {
                // do the file parsing here
                if (file) {
                  if (file.size >= 52428800) {
                    alert(`File of ${getFileSize(file.size)} is too big`)
                    return
                  }
                  mixpanel.track('uploaded_file', {
                    size: getFileSize(file.size),
                  })
                  setLoading(!loading)
                  readAndUploadFile(file)
                    .then((res) => {
                      setDataframe(res)
                    })
                    .catch((e) => throwError(e))
                }
              }}
            >
              {loading ? 'Loading' : 'Upload'}
            </Button>
          </FileInfoStyle>
        )}
      </form>
    </DataAddFileStyle>
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
