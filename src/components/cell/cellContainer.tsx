import React, { useState, FunctionComponent } from 'react'
import styled from 'styled-components'
import DataViewContainer from './data-view/dataViewContainer'
import ChartContainer from './chart-view/chartContainer'
import { ChartConfig } from '../../types/types'

type CellContainerProps = {
  allSavedFiles: any[]
}

const CellContainerStyle = styled.div`
  width: 85vw;
  min-height: 33vh;
  border: 1px solid black;
  overflow: hidden;
  border: 2px solid grey;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(199, 200, 201);
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`

/**
 *
 * THOUGHTS: Turn this into a `Class` components instead to better handle the constructor?
 * That way when we add a new cell we can call it with new Cell()
 */
const CellContainer: FunctionComponent<CellContainerProps> = ({
  allSavedFiles,
}) => {
  const [addedFiles, addFile] = useState([])
  const [fileId, setActiveId] = useState(null)
  const [activeDataset, editActiveDataset] = useState(null)
  const [chartConfig, setChartConfig] = useState<ChartConfig | null>(null)

  const chartCSS = chartConfig
    ? 'chart-view flex-grow md:w-4/5'
    : 'chart-view md:w-1/2'
  const dataCSS = chartConfig
    ? 'data-view bg-white overflow-auto relative md:w-1/5 max-h-screen'
    : 'data-view bg-white overflow-auto relative md:1/2 max-h-screen'

  return (
    <CellContainerStyle className='cell-container bg-light-green md:flex my-4 mx-auto overflow-hidden flex-column'>
      <div className={dataCSS}>
        <DataViewContainer
          allSavedFiles={allSavedFiles}
          activeDataset={activeDataset}
          editActiveDataset={editActiveDataset}
          setActiveId={setActiveId}
          id={fileId}
        />
      </div>
      <div className={chartCSS}>
        <ChartContainer
          chartConfig={chartConfig}
          setChartConfig={setChartConfig}
          activeDataset={activeDataset}
        />
      </div>
    </CellContainerStyle>
  )
}

export default CellContainer
