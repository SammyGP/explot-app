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
const CellAdder = styled.div`
  width: 100%;
  text-align: center;
  color: #4a5568;
  svg {
    display: block;
    height: 3rem;
    width: 3rem;
    margin: auto;
    border-radius: 9999px;
    &:hover {
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    }
  }
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
      <CellAdder>
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
      </CellAdder>
    </Container>
  )
}

export default WorkSheet
