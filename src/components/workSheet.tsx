import React, { useState } from 'react'
import CellContainer from './cell/cellContainer'
import { Add32 } from '@carbon/icons-react'
/**
 * Parent container to all the `Cell`s sends down all the File objects to the childs
 */
const WorkSheet = () => {
  const savedFiles: any[] = []
  /**
   * gets the url of all previously saved files that existed during build time with the csv format
   */
  /*const savedFiles = useStaticQuery(
    graphql`
      query MyQuery {
        allFile(filter: { extension: { eq: "csv" } }) {
          edges {
            node {
              id
              publicURL
              name
            }
          }
        }
      }
    `
  )*/
  const [allSavedFiles, addSavedFile] = useState([...savedFiles])
  const [cells, addCell] = useState([
    <CellContainer allSavedFiles={allSavedFiles} key={`cell-${1}`} />,
  ])
  return (
    <div className='mt-8'>
      <ul>{cells}</ul>
      <div className='w-full text-center text-gray-700'>
        <Add32
          className='h-12 w-12 mx-auto rounded-full hover:shadow-custom'
          onClick={() => {
            // MAX 10 cells for now to prevent over clutter
            if (cells.length <= 10) {
              addCell((prevState) => {
                return [
                  ...prevState,
                  <CellContainer
                    allSavedFiles={allSavedFiles}
                    key={`cell-${cells.length + 1}`}
                  />,
                ]
              })
            }
          }}
        />
        Add Cell
      </div>
    </div>
  )
}

export default WorkSheet
