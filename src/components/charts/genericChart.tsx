import React, { FunctionComponent } from 'react'
import ReactEcharts from 'echarts-for-react'
import { EChartOption } from 'echarts'

const GenericChart: FunctionComponent<any> = ({ dimensions, data, type }) => {
  const option: EChartOption = {
    dataset: {
      source: data,
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
      {
        type,
        encode: {
          x: dimensions.xAxis,
          y: dimensions.yAxis,
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

export default GenericChart
