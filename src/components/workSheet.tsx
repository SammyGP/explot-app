import React, { useState } from 'react'
import CellContainer from './cell/cellContainer'
import { Add32 } from '@carbon/icons-react'
import styled from 'styled-components'
/**
 * Parent container to all the `Cell`s sends down all the File objects to the childs
 */

const Container = styled.div`
  margin-top: 3rem;
`

const WorkSheet = () => {
  const savedFiles: any[] = []

  const [allSavedFiles, addSavedFile] = useState([...savedFiles])
  const [cells, addCell] = useState([
    <CellContainer allSavedFiles={allSavedFiles} key={`cell-${1}`} />,
  ])
  return (
    <Container>
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
    </Container>
  )
}

export default WorkSheet
