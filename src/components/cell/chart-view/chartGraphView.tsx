import React, { useState, FunctionComponent } from 'react'
import BarChart from '../../charts/barChart'
import LineChart from '../../charts/lineChart'
import ScatterChart from '../../charts/scatterChart'
import PieChart from '../../charts/pieChart'
import { InformationFilled32 } from '@carbon/icons-react'
import { ChartType } from '../../../types/types'
import mixpanel from 'mixpanel-browser'

/**
 * Renders the chart based on the @type
 */
const ChartGraphView: FunctionComponent<{
  chartConfig: any
  chart: ChartType
}> = ({ chartConfig, chart }) => {
  const [moreInfo, toggleMoreInfo] = useState(false)
  mixpanel.track('rendered_chart')
  const renderChart = (chartType: string) => {
    if (chartType === 'bar') {
      return <BarChart chartConfig={chartConfig} />
    }
    if (chartType === 'line') {
      return <LineChart chartConfig={chartConfig} />
    }
    if (chartType === 'scatter') {
      return <ScatterChart chartConfig={chartConfig} />
    }
    if (chartType === 'pie') {
      return <PieChart chartConfig={chartConfig} />
    }
    return <h2>Error</h2>
  }
  return (
    <div className='m-auto'>
      <p className='text-left ml-8 pt-4 flex'>
        <span className='pr-4' onClick={() => toggleMoreInfo(!moreInfo)}>
          <InformationFilled32 />
        </span>
        {moreInfo ? (
          <span>
            Chart Type:<code>{chart.type}-chart</code> X Axis:
            <u>{chartConfig.xAxis}</u> Y Axis: <u>{chartConfig.yAxis}</u>{' '}
            Aggregation: <b>{chartConfig.agg}</b>
          </span>
        ) : (
          <span></span>
        )}
      </p>
      {renderChart(chart.type)}
    </div>
  )
}

export default ChartGraphView
