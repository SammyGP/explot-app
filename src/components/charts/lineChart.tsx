import React, { FunctionComponent } from 'react'
import ReactEcharts from 'echarts-for-react'
import { EChartOption } from 'echarts'

const LineChart: FunctionComponent<any> = ({ chartConfig }) => {
  const option: EChartOption = {
    dataset: {
      source: chartConfig.dataset,
    },
    xAxis: { type: 'category' },
    yAxis: {},
    tooltip: {},
    series: [
      {
        type: 'line',
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

export default LineChart
