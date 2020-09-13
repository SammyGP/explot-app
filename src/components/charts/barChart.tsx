import React, { FunctionComponent } from 'react'
import ReactEcharts from 'echarts-for-react'
import { setOptions } from './chartUtils'
import { EChartOption } from 'echarts'

const BarChart: FunctionComponent<any> = ({ chartConfig }) => {
  const option: EChartOption = {
    dataset: {
      source: chartConfig.dataset,
    },
    xAxis: { type: 'category' },
    yAxis: {},
    tooltip: {},
    series: [
      {
        type: 'bar',
        encode: {
          x: chartConfig.xAxis,
          y: chartConfig.yAxis,
        },
      },
    ],
  }

  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  )
}

export default BarChart
