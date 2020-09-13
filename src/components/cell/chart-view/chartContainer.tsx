import React, { useState, FunctionComponent } from 'react'
import ChartChooseChartView from './chartChooseChartView'
import ChartGraphView from './chartGraphView'
import ChartSetOptionsView from './chartSetOptionsView'
import Loading from '../../loading'

/**
 * Routes to the correct Chart
 */
const ChartContainer: FunctionComponent<any> = ({
  chartConfig,
  setChartConfig,
  activeDataset,
}) => {
  const [view, setView] = useState(1)
  const [chartType, setChartType] = useState(null)

  if (!activeDataset) {
    return (
      <div className='h-full'>
        <h2 className='pt-8 mx-4'>Choose a Dataset to view chart options</h2>
      </div>
    )
  }

  if (view === 0) {
    return <div>Chart go here</div>
  }
  if (view === 1) {
    return (
      <ChartChooseChartView setView={setView} setChartType={setChartType} />
    )
  }
  if (view === 2) {
    const columns = activeDataset.content.columnNames
    return (
      <ChartSetOptionsView
        setView={setView}
        columns={columns}
        dataframe={activeDataset}
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
