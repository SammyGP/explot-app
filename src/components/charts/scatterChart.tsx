import React, { FunctionComponent } from 'react'
import ReactEcharts from 'echarts-for-react'
import { EChartOption } from 'echarts'

const ScatterChart: FunctionComponent<any> = ({ chartConfig }) => {
  const option: EChartOption = {
    dataset: {
      source: chartConfig.dataset,
    },
    xAxis: {},
    yAxis: {},
    tooltip: {},
    series: [
      {
        type: 'scatter',
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

export default ScatterChart
