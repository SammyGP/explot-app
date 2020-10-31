import React, { useState, FunctionComponent, useContext } from 'react'
import { ChartLineData32 } from '@carbon/icons-react'
import ChartChooseChartView from './chartChooseChartView'
import ChartGraphView from './chartGraphView'
import ChartSetOptionsView from './chartSetOptionsView'
import Loading from '../../loading'
import ActiveDataframe from '../../../context/dataframe'
import { DataFrame } from 'data-forge'
import styled from 'styled-components'
import { ChartType } from '../../../types/types'

/**
 * Routes to the correct Chart
 */
const ChartContainer: FunctionComponent<any> = ({
  chartConfig,
  setChartConfig,
  width,
}) => {
  const [view, setView] = useState(0)
  const [chartType, setChartType] = useState<ChartType>({
    type: 'line',
    icon: <ChartLineData32 />,
  })
  const [dataframe] = useContext(ActiveDataframe)

  if (!dataframe) {
    return (
      <div>
        <div className='h-full'>
          <h2 className='pt-8 mx-4'>Upload a Dataset to view chart options</h2>
        </div>
      </div>
    )
  }
  if (dataframe && view === 0) {
    return (
      <div>
        <ChartChooseChartView setView={setView} setChartType={setChartType} />
      </div>
    )
  }
  if (view === 1) {
    return (
      <ChartSetOptionsView
        setView={setView}
        dataframe={dataframe}
        setChartConfig={setChartConfig}
        chartType={chartType}
      />
    )
  }
  if (view === 3) {
    //const chartData = echartsDataPreparer(chartConfig)
    return <ChartGraphView chartConfig={chartConfig} chart={chartType} />
  }

  return <Loading />
}

export default ChartContainer
