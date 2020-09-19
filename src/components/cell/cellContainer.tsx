import React, { useState, FunctionComponent } from 'react'
import styled from 'styled-components'
import DataViewContainer from './data-view/dataViewContainer'
import ChartContainer from './chart-view/chartContainer'
import { ChartConfig } from '../../types/types'
import ActiveDataframe from '../../context/dataframe'

type CellContainerProps = {
  allSavedFiles: any[]
}

const CellContainerStyle = styled.div`
  width: 85vw;
  min-height: 264px;
  height: 33vh;
  border: 1px solid black;
  overflow: hidden;
  border: 2px solid grey;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
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

const CellStyle = styled.div<any>`
  height: 100%;
  background-color: ${(props) => props.bg || '#b9f4bc'};
  width: ${(props) => props.width || '50%'};
`

/**
 *
 * THOUGHTS: Turn this into a `Class` components instead to better handle the constructor?
 * That way when we add a new cell we can call it with new Cell()
 */
const CellContainer: FunctionComponent<CellContainerProps> = ({
  allSavedFiles,
}) => {
  const [chartConfig, setChartConfig] = useState<ChartConfig | null>(null)

  // Hook that sets the dataframe context (pass it as the value of the provider to get the setFunctin working)
  const dataframeHook = useState(null)
  console.log('df hook!', dataframeHook)
  const dataCellWidth = () => {
    if (!dataframeHook[0]) {
      return '67%'
    } else if (dataframeHook[0] && !chartConfig) {
      return '67%'
    } else {
      return '50%'
    }
  }

  const chartCellWidth = () => {
    if (!chartConfig) {
      return '33%'
    } else {
      return '50%'
    }
  }

  const chartCSS = chartConfig
    ? 'chart-view flex-grow md:w-4/5'
    : 'chart-view md:w-1/2'
  const dataCSS = chartConfig
    ? 'data-view bg-white overflow-auto relative md:w-1/5 max-h-screen'
    : 'data-view bg-white overflow-auto relative md:1/2 max-h-screen'

  return (
    <CellContainerStyle className='cell-container bg-light-green md:flex my-4 mx-auto overflow-hidden flex-column'>
      <ActiveDataframe.Provider value={dataframeHook}>
        <CellStyle
          className='data-view bg-white'
          bg={'#ffffff'}
          width={dataCellWidth()}
        >
          <DataViewContainer allSavedFiles={allSavedFiles} />
        </CellStyle>
        <CellStyle className='chart-view' width={chartCellWidth()}>
          <ChartContainer
            chartConfig={chartConfig}
            setChartConfig={setChartConfig}
            width={chartCellWidth()}
          />
        </CellStyle>
      </ActiveDataframe.Provider>
    </CellContainerStyle>
  )
}

export default CellContainer
