import React, { useState, FunctionComponent, useContext } from 'react'
import ChartChooseChartView from './chartChooseChartView'
import ChartGraphView from './chartGraphView'
import ChartSetOptionsView from './chartSetOptionsView'
import Loading from '../../loading'
import ActiveDataframe from '../../../context/dataframe'
import { DataFrame } from 'data-forge'
import styled from 'styled-components'

/**
 * Routes to the correct Chart
 */
const ChartContainer: FunctionComponent<any> = ({
  chartConfig,
  setChartConfig,
  width,
}) => {
  const [view, setView] = useState(0)
  const [chartType, setChartType] = useState(null)
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
    const df: DataFrame = dataframe
    const columns = df.getColumns()
    console.log('columns', columns)
    return (
      <ChartSetOptionsView
        setView={setView}
        columns={columns}
        dataframe={dataframe}
        setChartConfig={setChartConfig}
      />
    )
  }
  if (view === 3) {
    //const chartData = echartsDataPreparer(chartConfig)
    return <ChartGraphView chartConfig={chartConfig} type={chartType} />
  }

  return <Loading />
}

export default ChartContainer
