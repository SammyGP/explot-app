import React, { useState, FunctionComponent } from 'react'
import BarChart from '../../charts/barChart'
import LineChart from '../../charts/lineChart'
import ScatterChart from '../../charts/scatterChart'
import PieChart from '../../charts/pieChart'
import { InformationFilled32 } from '@carbon/icons-react'

/**
 * Renders the chart based on the @type
 */
const ChartGraphView: FunctionComponent<any> = ({ chartConfig, type }) => {
  const [moreInfo, toggleMoreInfo] = useState(false)
  const renderChart = (type: string) => {
    if (type === 'bar') {
      return <BarChart chartConfig={chartConfig} />
    }
    if (type === 'line') {
      return <LineChart chartConfig={chartConfig} />
    }
    if (type === 'scatter') {
      return <ScatterChart chartConfig={chartConfig} />
    }
    if (type === 'pie') {
      return <PieChart chartConfig={chartConfig} />
    }
    return <h2>Error</h2>
  }
  return (
    <div className='m-auto'>
      <p className='text-left ml-8 pt-4 flex'>
        <div className='pr-4' onClick={() => toggleMoreInfo(!moreInfo)}>
          <InformationFilled32 />
        </div>
        {moreInfo ? (
          <div>
            Chart Type:<code>{type}-chart</code> X Axis:
            <u>{chartConfig.xAxis}</u> Y Axis: <u>{chartConfig.yAxis}</u>{' '}
            Aggregation: <b>{chartConfig.agg}</b>
          </div>
        ) : (
          <div></div>
        )}
      </p>
      {renderChart(type)}
    </div>
  )
}

export default ChartGraphView
